"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface VoiceCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVoiceCreated?: () => void | Promise<void>;
}

const MAX_FILE_SIZE_MB = 11;
const MAX_FILE_SIZE = MAX_FILE_SIZE_MB * 1024 * 1024; // 11 МБ
const ALLOWED_TYPES = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/webm", "audio/ogg"];
const MAX_DESCRIPTION_LENGTH = 100;

export function VoiceCreateModal({
  isOpen,
  onClose,
  onVoiceCreated,
}: VoiceCreateModalProps) {
  const [voiceName, setVoiceName] = useState("");
  const [voiceDescription, setVoiceDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [activeTab, setActiveTab] = useState<"upload" | "record">("upload"); // Вкладка: загрузка или запись
  const [audioLevel, setAudioLevel] = useState(0); // Уровень громкости (0-100)
  const [isTestingMicrophone, setIsTestingMicrophone] = useState(false); // Тест микрофона до записи
  const [recordingTimer, setRecordingTimer] = useState(120); // Таймер записи в секундах (2 минуты)
  const [errorModal, setErrorModal] = useState<{ isOpen: boolean; message: string }>({ isOpen: false, message: "" });
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopProgressLoop = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  const stopTimer = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  const stopAudioAnalysis = useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
    }
    setAudioLevel(0);
  }, []);

  const startAudioAnalysis = useCallback((stream: MediaStream) => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;
      microphone.connect(analyser);
      
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      
      const updateAudioLevel = () => {
        if (!analyserRef.current) return;
        
        analyserRef.current.getByteFrequencyData(dataArray);
        
        // Вычисляем средний уровень громкости
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        
        // Преобразуем в проценты (0-100)
        const level = Math.min(100, (average / 255) * 100);
        setAudioLevel(level);
        
        animationFrameRef.current = requestAnimationFrame(updateAudioLevel);
      };
      
      updateAudioLevel();
    } catch (error) {
      // Игнорируем ошибки анализа аудио
    }
  }, []);

  const startProgressLoop = useCallback(() => {
    stopProgressLoop();
    setProgress(0);
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextValue = Math.min(100, (elapsed / 15000) * 100);
      setProgress(nextValue);
    }, 50);
  }, [stopProgressLoop]);

  const resetState = useCallback(() => {
    setVoiceName("");
    setVoiceDescription("");
    setSelectedFile(null);
    setRecordedBlob(null);
    // Очищаем URL для освобождения памяти
    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
    }
    setRecordedAudioUrl(null);
    setIsRecording(false);
    setIsWaiting(false);
    setIsTestingMicrophone(false);
    setProgress(0);
    setRecordingTimer(120);
    setShowConsentModal(false);
    setConsentChecked(false);
    setActiveTab("upload");
    stopProgressLoop();
    stopTimer();
    stopAudioAnalysis();
    audioChunksRef.current = [];
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (mediaRecorderRef.current?.stream) {
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  }, [recordedAudioUrl, stopProgressLoop, stopTimer, stopAudioAnalysis]);

  const closeModal = useCallback(() => {
    resetState();
    onClose();
  }, [onClose, resetState]);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (mediaRecorderRef.current?.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
      // Очищаем URL при размонтировании
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
      stopProgressLoop();
      stopTimer();
      stopAudioAnalysis();
    };
  }, [recordedAudioUrl, stopProgressLoop, stopTimer, stopAudioAnalysis]);

  const showError = useCallback((message: string) => {
    setErrorModal({ isOpen: true, message });
  }, []);

  const validateFile = (file: File): boolean => {
    if (!ALLOWED_TYPES.includes(file.type.toLowerCase())) {
      showError("Неподдерживаемый формат файла. Допустимы только MP3, WAV, WebM или OGG.");
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      showError(
        `Файл превышает лимит ${MAX_FILE_SIZE_MB} МБ. Размер файла: ${(file.size / 1024 / 1024).toFixed(1)} МБ`,
      );
      return false;
    }
    return true;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        setRecordedBlob(null); // Сбрасываем запись если выбрали файл
      }
    }
  };

  const handleDrag = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    if (event.dataTransfer.files?.[0]) {
      const file = event.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        setRecordedBlob(null); // Сбрасываем запись если выбрали файл
      }
    }
  }, []);

  const startMicrophoneTest = useCallback(async () => {
    try {
      // Проверяем доступность API
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showError(
          "Ваш браузер не поддерживает запись с микрофона. Пожалуйста, используйте современный браузер (Chrome, Firefox, Edge)."
        );
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        } 
      });
      
      streamRef.current = stream;
      setIsTestingMicrophone(true);
      
      // Запускаем анализ аудио для индикатора громкости
      startAudioAnalysis(stream);
    } catch (error: unknown) {
      setIsTestingMicrophone(false);
      
      let errorMessage = "Не удалось получить доступ к микрофону.";
      
      if (error instanceof Error) {
        if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
          errorMessage = 
            "Доступ к микрофону запрещен.\n\n" +
            "Пожалуйста:\n" +
            "1. Нажмите на иконку замка в адресной строке браузера\n" +
            "2. Разрешите доступ к микрофону\n" +
            "3. Обновите страницу и попробуйте снова";
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          errorMessage = "Микрофон не найден. Убедитесь, что микрофон подключен и включен.";
        } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
          errorMessage = 
            "Микрофон уже используется другим приложением.\n\n" +
            "Закройте другие приложения, использующие микрофон, и попробуйте снова.";
        } else {
          errorMessage = `Ошибка: ${error.message}`;
        }
      }
      
      showError(errorMessage);
    }
  }, [startAudioAnalysis, showError]);

  const stopMicrophoneTest = useCallback(() => {
    setIsTestingMicrophone(false);
    stopAudioAnalysis();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, [stopAudioAnalysis]);

  // Автоматически запускаем тест микрофона при открытии модального окна или переключении на вкладку записи
  useEffect(() => {
    if (isOpen && activeTab === "record" && !isRecording && !isTestingMicrophone && !streamRef.current) {
      startMicrophoneTest();
    }
    
    return () => {
      // Останавливаем тест при закрытии модального окна или переключении на другую вкладку (если не идет запись)
      if ((!isOpen || activeTab !== "record") && !isRecording && isTestingMicrophone) {
        stopMicrophoneTest();
      }
    };
  }, [isOpen, activeTab, isRecording, isTestingMicrophone, startMicrophoneTest, stopMicrophoneTest]);

  const startRecording = async () => {
    try {
      // Проверяем доступность API
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showError(
          "Ваш браузер не поддерживает запись с микрофона. Пожалуйста, используйте современный браузер (Chrome, Firefox, Edge)."
        );
        return;
      }

      // Проверяем разрешения перед запросом
      try {
        const permissionStatus = await navigator.permissions.query({ name: "microphone" as PermissionName });
        if (permissionStatus.state === "denied") {
          showError(
            "Доступ к микрофону запрещен. Пожалуйста, разрешите доступ к микрофону в настройках браузера и обновите страницу."
          );
          return;
        }
      } catch (permError) {
        // Некоторые браузеры не поддерживают permissions API, продолжаем
      }

      // Всегда создаем новый поток для записи, чтобы избежать конфликтов
      // Если был тест микрофона, остановим его поток после создания нового
      const oldStream = streamRef.current;
      
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        } 
      });
      
      // Останавливаем старый поток из теста, если он был
      if (oldStream && isTestingMicrophone) {
        stopAudioAnalysis();
        oldStream.getTracks().forEach(track => track.stop());
      }
      
      streamRef.current = stream;
      
      // Запускаем анализ аудио для индикатора громкости
      startAudioAnalysis(stream);
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm") 
          ? "audio/webm" 
          : MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
          ? "audio/webm;codecs=opus"
          : "audio/mp4"
      });
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const mimeType = mediaRecorder.mimeType || "audio/webm";
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        setRecordedBlob(audioBlob);
        
        // Создаем URL для воспроизведения
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(audioUrl);
        
        setSelectedFile(null); // Сбрасываем файл если записали
        stopAudioAnalysis();
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.onerror = (event) => {
        setIsRecording(false);
        stopAudioAnalysis();
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
        showError("Произошла ошибка при записи. Попробуйте еще раз.");
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsTestingMicrophone(false); // Останавливаем тест, начинаем запись
      setRecordingTimer(120); // Сбрасываем таймер на 2 минуты
      
      // Запускаем таймер обратного отсчета
      stopTimer();
      timerIntervalRef.current = setInterval(() => {
        setRecordingTimer((prev) => {
          if (prev <= 1) {
            stopTimer();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error: unknown) {
      setIsRecording(false);
      
      let errorMessage = "Не удалось получить доступ к микрофону.";
      
      if (error instanceof Error) {
        if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") {
          errorMessage = 
            "Доступ к микрофону запрещен.\n\n" +
            "Пожалуйста:\n" +
            "1. Нажмите на иконку замка в адресной строке браузера\n" +
            "2. Разрешите доступ к микрофону\n" +
            "3. Обновите страницу и попробуйте снова";
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          errorMessage = "Микрофон не найден. Убедитесь, что микрофон подключен и включен.";
        } else if (error.name === "NotReadableError" || error.name === "TrackStartError") {
          errorMessage = 
            "Микрофон уже используется другим приложением.\n\n" +
            "Закройте другие приложения, использующие микрофон, и попробуйте снова.";
        } else {
          errorMessage = `Ошибка: ${error.message}`;
        }
      }
      
      showError(errorMessage);
    }
  };

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      stopTimer();
      stopAudioAnalysis();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    }
  }, [stopTimer, stopAudioAnalysis]);

  // Автоматическая остановка записи при достижении 0
  useEffect(() => {
    if (isRecording && recordingTimer === 0) {
      stopRecording();
    }
  }, [isRecording, recordingTimer, stopRecording]);

  const loadLameJs = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined" && (window as any).lamejs) {
        resolve((window as any).lamejs);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js";
      script.onload = () => resolve((window as any).lamejs);
      script.onerror = () => reject(new Error("Не удалось загрузить библиотеку конвертации"));
      document.head.appendChild(script);
    });
  };

  const convertWebmToMp3 = async (webmBlob: Blob): Promise<File> => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const arrayBuffer = await webmBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    try {
      // Пытаемся использовать lamejs для конвертации в MP3
      const Lame = await loadLameJs();
      
      const mp3encoder = new Lame.Mp3Encoder(
        audioBuffer.numberOfChannels,
        audioBuffer.sampleRate,
        128 // bitrate
      );

      // Конвертируем float32 в int16
      const samples: Int16Array[] = [];
      for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
        const channelData = audioBuffer.getChannelData(i);
        const int16Array = new Int16Array(channelData.length);
        for (let j = 0; j < channelData.length; j++) {
          int16Array[j] = Math.max(-32768, Math.min(32767, channelData[j] * 32768));
        }
        samples.push(int16Array);
      }

      const mp3Data: BlobPart[] = [];
      const sampleBlockSize = 1152;
      
      for (let i = 0; i < samples[0].length; i += sampleBlockSize) {
        const left = samples[0].subarray(i, i + sampleBlockSize);
        const right = audioBuffer.numberOfChannels > 1 
          ? samples[1].subarray(i, i + sampleBlockSize)
          : left;
        const mp3buf = mp3encoder.encodeBuffer(left, right);
        if (mp3buf.length > 0) {
          mp3Data.push(mp3buf);
        }
      }

      const mp3buf = mp3encoder.flush();
      if (mp3buf.length > 0) {
        mp3Data.push(mp3buf);
      }

      const mp3Blob = new Blob(mp3Data, { type: "audio/mpeg" });
      return new File([mp3Blob], "recording.mp3", { type: "audio/mpeg" });
    } catch (error) {
      // Fallback: если lamejs не загрузился, конвертируем в WAV
      const wavBlob = audioBufferToWav(audioBuffer);
      // Отправляем как WAV с расширением mp3 (сервер может конвертировать)
      return new File([wavBlob], "recording.mp3", { type: "audio/mpeg" });
    }
  };

  const audioBufferToWav = (buffer: AudioBuffer): Blob => {
    const length = buffer.length;
    const numberOfChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2);
    const view = new DataView(arrayBuffer);

    // WAV header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, "RIFF");
    view.setUint32(4, 36 + length * numberOfChannels * 2, true);
    writeString(8, "WAVE");
    writeString(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numberOfChannels * 2, true);
    view.setUint16(32, numberOfChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(36, "data");
    view.setUint32(40, length * numberOfChannels * 2, true);

    // Convert float samples to 16-bit PCM
    let offset = 44;
    for (let i = 0; i < length; i++) {
      for (let channel = 0; channel < numberOfChannels; channel++) {
        const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
        view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
        offset += 2;
      }
    }

    return new Blob([arrayBuffer], { type: "audio/wav" });
  };

  const handleCloneClick = () => {
    if (!voiceName.trim()) {
      showError("Введите название голоса");
      return;
    }
    if (!selectedFile && !recordedBlob) {
      showError("Загрузите файл или запишите голос с микрофона");
      return;
    }
    setShowConsentModal(true);
  };

  const handleConsentConfirm = () => {
    if (!consentChecked) {
      return;
    }
    setShowConsentModal(false);
    handleCloneVoice();
  };

  const handleCloneVoice = async () => {
    if (!voiceName.trim()) {
      showError("Введите название голоса");
      return;
    }

    // Проверка лимита в демо-режиме
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: voicesData } = await supabase
          .from("voices")
          .select("id")
          .eq("uid", user.id);

        if (voicesData && voicesData.length >= 2) {
          showError("В демо-режиме можно создать максимум 2 голоса");
          return;
        }
      }
    } catch (error) {
      // Игнорируем ошибки проверки лимита
    }

    // Запускаем прогресс-бар сразу при нажатии на кнопку
    setIsUploading(true);
    setIsWaiting(true);
    startProgressLoop();

    let audioFile: File | null = null;

    if (selectedFile) {
      // Если файл загружен, используем его как есть
      audioFile = selectedFile;
    } else if (recordedBlob) {
      // Если запись с микрофона, конвертируем webm в mp3
      try {
        audioFile = await convertWebmToMp3(recordedBlob);
      } catch (error) {
        stopProgressLoop();
        setIsUploading(false);
        setIsWaiting(false);
        showError("Ошибка при конвертации записи. Попробуйте еще раз.");
        return;
      }
    } else {
      stopProgressLoop();
      setIsUploading(false);
      setIsWaiting(false);
      showError("Загрузите файл или запишите голос с микрофона");
      return;
    }

    if (audioFile.size > MAX_FILE_SIZE) {
      stopProgressLoop();
      setIsUploading(false);
      setIsWaiting(false);
      showError(
        `Файл превышает лимит ${MAX_FILE_SIZE_MB} МБ. Размер файла: ${(audioFile.size / 1024 / 1024).toFixed(1)} МБ`,
      );
      return;
    }

    try {
      // Получаем UUID авторизованного пользователя
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error("Не удалось получить данные пользователя");
      }

      const formData = new FormData();
      formData.append("name", voiceName.trim());
      if (voiceDescription.trim()) {
        const trimmedDescription = voiceDescription.trim().slice(0, MAX_DESCRIPTION_LENGTH);
        formData.append("description", trimmedDescription);
      }
      formData.append("file", audioFile);
      formData.append("uuid", user.id);

      const response = await fetch(
        "https://rueleven.ru/webhook/053aa1a5-396c-4cff-b9c4-a71ca8910a22",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка отправки: ${response.statusText}`);
      }

      // Отправляем вебхук с UUID пользователя при клонировании голоса
      try {
        await fetch("https://rueleven.ru/webhook/373bb6fa-8fae-49fd-83b6-b503e7f286c4", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uuid: user.id }),
        });
      } catch (webhookError) {
        // Игнорируем ошибки вебхука, но не прерываем процесс клонирования
      }

      // Продолжаем ждать появления записи в таблице (прогресс-бар уже запущен)
      setIsUploading(false);

      // Ждем появления записи в таблице voices
      const timeoutMs = 30000; // 30 секунд максимум
      const pollDelayMs = 1000; // Проверяем каждую секунду
      const deadline = Date.now() + timeoutMs;
      let found = false;

      while (Date.now() < deadline && !found) {
        const { data, error } = await supabase
          .from("voices")
          .select("*")
          .eq("uid", user.id)
          .eq("name", voiceName.trim())
          .order("created_at", { ascending: false })
          .limit(1);

        if (!error && data && data.length > 0) {
          found = true;
          stopProgressLoop();
          setProgress(100);
          await new Promise((resolve) => setTimeout(resolve, 300)); // Небольшая задержка для завершения анимации
          setIsWaiting(false);
          await onVoiceCreated?.();
          closeModal();
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, pollDelayMs));
      }

      // Если не нашли за отведенное время
      stopProgressLoop();
      setIsWaiting(false);
      showError("Голос отправлен на обработку. Проверьте список голосов через несколько секунд.");
      await onVoiceCreated?.();
      closeModal();
    } catch (error) {
      stopProgressLoop();
      setIsUploading(false);
      setIsWaiting(false);
      showError(
        `Ошибка при клонировании голоса: ${
          error instanceof Error ? error.message : "Неизвестная ошибка"
        }`
      );
    }
  };

  const dropZoneClasses = `rounded-2xl border border-dashed border-purple-400/50 bg-purple-50/30 p-6 text-center transition-all duration-200 ${
    dragActive
      ? "shadow-lg -translate-y-0.5 border-purple-500"
      : "hover:shadow-md hover:-translate-y-0.5"
  }`;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
      <div className="w-full max-w-lg rounded-[32px] bg-white shadow-2xl">
        <div className="relative flex items-center justify-center border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Создать голос
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            disabled={isUploading || isRecording}
          >
            <span className="sr-only">Закрыть</span>✕
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="space-y-6 text-sm text-gray-600">
            <div>
              <label
                htmlFor="voice-name"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Название голоса
              </label>
              <input
                id="voice-name"
                value={voiceName}
                onChange={(event) => setVoiceName(event.target.value)}
                placeholder="Придумайте название голоса"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-400"
                disabled={isUploading || isRecording}
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="voice-description"
                  className="block text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  Описание голоса <span className="text-gray-400">(необязательно)</span>
                </label>
                <span className={`text-xs ${
                  voiceDescription.length > MAX_DESCRIPTION_LENGTH 
                    ? "text-red-500" 
                    : "text-gray-400"
                }`}>
                  {voiceDescription.length}/{MAX_DESCRIPTION_LENGTH}
                </span>
              </div>
              <textarea
                id="voice-description"
                value={voiceDescription}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value.length <= MAX_DESCRIPTION_LENGTH) {
                    setVoiceDescription(value);
                  }
                }}
                maxLength={MAX_DESCRIPTION_LENGTH}
                placeholder="Добавьте описание голоса"
                className="h-28 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-400"
                disabled={isUploading || isRecording}
              />
            </div>

            {/* Вкладки для переключения между загрузкой и записью */}
            <div className="flex gap-2 rounded-lg border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("upload");
                  // Останавливаем запись и тест микрофона при переключении на загрузку
                  if (isRecording) {
                    stopRecording();
                  }
                  if (isTestingMicrophone) {
                    stopMicrophoneTest();
                  }
                }}
                disabled={isUploading || isWaiting}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeTab === "upload"
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                } disabled:opacity-50`}
              >
                Загрузить аудиофайл
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("record");
                  // Очищаем выбранный файл при переключении на запись
                  if (selectedFile) {
                    setSelectedFile(null);
                  }
                }}
                disabled={isUploading || isWaiting}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeTab === "record"
                    ? "bg-white text-purple-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                } disabled:opacity-50`}
              >
                Записать голос
              </button>
            </div>

            {/* Контент для загрузки файла */}
            {activeTab === "upload" && (
              <>
                <div
                  className={dropZoneClasses}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="mx-auto flex max-w-sm flex-col items-center gap-3 text-gray-700">
                    <div className="rounded-2xl border border-purple-200 bg-white p-3 text-purple-500">
                      ↑
                    </div>
                    <p className="text-base font-semibold">
                      Перетащите аудио файл сюда
                    </p>
                    <p className="text-xs text-gray-500">MP3, WAV до 11 МБ</p>
                    <button
                      type="button"
                      className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploading || isRecording}
                    >
                      Выбрать файл
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="audio/*"
                      className="hidden"
                      onChange={handleFileSelect}
                      disabled={isUploading || isRecording}
                    />
                  </div>
                </div>

                {/* Выбранный файл */}
                {selectedFile && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                          🎵
                        </div>
                        <div>
                          <div className="font-medium">{selectedFile.name}</div>
                          <div className="text-xs text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} МБ
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedFile(null)}
                        className="text-gray-400 transition hover:text-red-500"
                        disabled={isUploading || isRecording}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}

                {/* Требования к аудиофайлу */}
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-xs text-gray-600">
                  <p className="mb-2 text-sm font-semibold text-gray-800">
                    Требования к аудиофайлу
                  </p>
                  <p className="text-gray-700">
                    Аудиофайл должен содержать запись голоса без посторонних звуков в хорошем качестве.
                  </p>
                </div>
              </>
            )}

            {/* Контент для записи с микрофона */}
            {activeTab === "record" && (
              <>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                  <div className="mx-auto flex max-w-sm flex-col items-center gap-4">
                    <div className="rounded-full border-4 border-purple-200 bg-white p-4">
                      {isRecording ? (
                        <div className="h-12 w-12 animate-pulse rounded-full bg-red-500"></div>
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-purple-500"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        {isRecording ? "Идет запись..." : "Записать с микрофона"}
                      </p>
                      {isRecording && (
                        <p className="mt-1 text-xs text-gray-500">
                          Нажмите остановить для завершения записи
                        </p>
                      )}
                    </div>
                    
                    {/* Индикатор громкости - показываем всегда когда тестируем или записываем */}
                    {(isTestingMicrophone || isRecording) && (
                      <div className="w-full space-y-1.5">
                        <p className="text-xs font-medium text-gray-600">
                          Тест микрофона
                        </p>
                        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-transparent via-purple-500/50 to-purple-600 transition-all duration-75 ease-out"
                            style={{ width: `${Math.max(2, audioLevel)}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Таймер обратного отсчета во время записи */}
                    {isRecording && (
                      <div className="w-full">
                        <div className="rounded-lg bg-purple-50 px-4 py-2">
                          <p className="text-sm font-semibold text-purple-700">
                            Осталось времени: {Math.floor(recordingTimer / 60)}:{(recordingTimer % 60).toString().padStart(2, '0')}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {!isRecording ? (
                      <button
                        type="button"
                        onClick={startRecording}
                        className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50"
                        disabled={isUploading || isWaiting}
                      >
                        Начать запись
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={stopRecording}
                        className="rounded-lg bg-red-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
                      >
                        Остановить запись
                      </button>
                    )}
                  </div>
                </div>

                {/* Требования к записи */}
                {!isRecording && (
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-xs text-gray-600">
                    <p className="mb-2 text-sm font-semibold text-gray-800">
                      Требования к записи
                    </p>
                    <p className="text-gray-700">
                      Прочитайте отрывок любого текста в естественной форме <span className="font-semibold">(не менее 2 минут)</span>. На фоне не должно быть посторонних звуков.
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Записанный файл - показываем только на вкладке записи */}
            {activeTab === "record" && recordedBlob && !isRecording && recordedAudioUrl && (
              <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-green-100 p-2 text-green-600">
                        ✓
                      </div>
                      <div>
                        <div className="font-medium">Запись завершена</div>
                        <div className="text-xs text-gray-500">
                          {(recordedBlob.size / 1024).toFixed(2)} КБ
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setRecordedBlob(null);
                        if (recordedAudioUrl) {
                          URL.revokeObjectURL(recordedAudioUrl);
                        }
                        setRecordedAudioUrl(null);
                      }}
                      className="text-gray-400 transition hover:text-red-500"
                      disabled={isUploading}
                    >
                      ✕
                    </button>
                  </div>
                  {/* Аудио плеер */}
                  <div className="flex items-center gap-2 rounded-lg bg-white p-2">
                    <audio
                      ref={audioPlayerRef}
                      src={recordedAudioUrl}
                      controls
                      className="flex-1"
                      style={{ height: "32px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex flex-1 items-center gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              disabled={isUploading || isRecording || isWaiting}
            >
              Отмена
            </button>
            {(isUploading || isWaiting || progress > 0) && (
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transition-[width] duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleCloneClick}
            disabled={
              isUploading ||
              isRecording ||
              isWaiting ||
              !voiceName.trim() ||
              (!selectedFile && !recordedBlob)
            }
            className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:ml-auto"
          >
            {isUploading
              ? "Клонируем..."
              : isWaiting
                ? "Ожидаем..."
                : "Клонировать голос"}
          </button>
        </div>
      </div>

      {/* Кастомный модал ошибки */}
      {errorModal.isOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setErrorModal({ isOpen: false, message: "" });
            }
          }}
        >
          <div 
            className="mx-4 w-full max-w-md rounded-3xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-black/5"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Ошибка
              </h2>
              <button
                type="button"
                onClick={() => setErrorModal({ isOpen: false, message: "" })}
                className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <span className="sr-only">Закрыть</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <p className="whitespace-pre-line text-sm text-gray-600">
                {errorModal.message}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setErrorModal({ isOpen: false, message: "" })}
                className="rounded-lg border border-purple-600 bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно согласия для загрузки аудио */}
      {showConsentModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="w-full max-w-lg rounded-[32px] bg-white shadow-2xl">
            <div className="relative flex items-center justify-center border-b px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Подтверждение загрузки аудиозаписи
              </h2>
              <button
                type="button"
                onClick={() => setShowConsentModal(false)}
                className="absolute right-6 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <span className="sr-only">Закрыть</span>✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="space-y-4 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">
                  Продолжая загрузку аудиозаписи, я подтверждаю:
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>Голос, который я загружаю — принадлежит лично мне.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>
                      Я не использую голос других людей без их прямого и документального согласия.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>
                      Я понимаю, что технология создаёт цифровую копию моего голоса, которая может использоваться для генерации речи.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>
                      Я разрешаю обработку моего голоса исключительно для целей, связанных с функционалом сервиса.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>
                      Я беру на себя полную ответственность за содержание и использование созданного голосового клона.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>
                      Сервис работает в тестовом режиме, функциональность может быть ограничена или изменена, а результат может содержать неточности.
                    </span>
                  </li>
                </ul>

                <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <input
                    type="checkbox"
                    id="voice-consent"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                    className="mt-0.5 h-5 w-5 cursor-pointer rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
                  />
                  <label
                    htmlFor="voice-consent"
                    className="cursor-pointer text-sm text-gray-700"
                  >
                    Я прочитал и согласен с условиями загрузки аудиозаписи
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-200 px-6 py-4 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
              <button
                type="button"
                onClick={() => setShowConsentModal(false)}
                className="rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={handleConsentConfirm}
                disabled={!consentChecked}
                className="rounded-lg bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Продолжить загрузку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


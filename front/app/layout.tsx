import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../style/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Платформа для создания контента с ИИ-аватарами",
  description: "Создавайте видео с ИИ-аватарами, генерируйте речь, клонируйте голос и получайте готовый контент за считанные минуты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

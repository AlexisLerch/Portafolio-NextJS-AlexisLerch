import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alexis Lerch · Desarrollador de software",
  description:
    "Portafolio de Alexis Lerch, desarrollador de software de Argentina. Sitios y apps con React, Next.js, JavaScript y React Native.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${sans.variable} ${mono.variable} relative min-h-screen overflow-x-clip`}>
        {/* fondo decorativo */}
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
          <div className="bg-grid absolute inset-0" />
          <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />
        </div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

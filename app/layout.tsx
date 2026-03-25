import type { Metadata, Viewport } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Carlos Rubén Bageta | Consultor en Data & IA",
  description:
    "Consultoría especializada en datos, inteligencia artificial y automatizaciones. Data Engineering, Data Science y modelado matemático aplicado para empresas y PyMEs.",
  keywords: [
    "consultor datos",
    "data engineering",
    "inteligencia artificial",
    "automatización",
    "data science",
    "machine learning",
    "Python",
    "Mendoza",
    "Argentina",
  ],
  authors: [{ name: "Carlos Rubén Bageta" }],
  openGraph: {
    title: "Carlos Rubén Bageta | Consultor en Data & IA",
    description:
      "Consultoría especializada en datos, inteligencia artificial y automatizaciones para empresas y PyMEs.",
    locale: "es_AR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a3a6b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}

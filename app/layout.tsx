import type { Metadata } from "next";
import "./globals.css";

const title = "Génesis Ojeda | Psicología online para adultos";
const description = "Atención psicológica online para adultos con Génesis Ojeda. Enfoque cognitivo conductual. Sesiones de 60 minutos a Gs. 150.000. Agendá tu consulta.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Génesis Ojeda",
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, type: "website", locale: "es_PY", siteName: "Génesis Ojeda" },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-PY"><body>{children}</body></html>;
}

import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";


export const metadata = {
  metadataBase: new URL('https://teachandtaste.it'),
  title: "Teach And Taste | Esperienze culinarie in Toscana",
  description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste.",
  keywords: [
    "cucina toscana",
    "chef a domicilio",
    "corsi di cucina",
    "catering",
    "eventi privati",
    "esperienze culinarie",
    "Toscana",
    "Teach And Taste"
  ],
  authors: [{ name: "Eduard", url: "https://teachandtaste.it" }],
  openGraph: {
    title: "Teach And Taste | Esperienze culinarie in Toscana",
    description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste.",
    url: "https://teachandtaste.it",
    siteName: "Teach And Taste",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Teach And Taste Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teach And Taste | Esperienze culinarie in Toscana",
    description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste.",
    images: ["/logo-extended.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

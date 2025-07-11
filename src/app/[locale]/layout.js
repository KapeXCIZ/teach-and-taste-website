import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import "../globals.css";

const metadataByLocale = {
  it: {
    title: "Teach And Taste | Esperienze culinarie in Toscana",
    description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste.",
    keywords: [
      "cucina toscana", "chef a domicilio", "corsi di cucina", "catering", "eventi privati", "esperienze culinarie", "Toscana", "Teach And Taste"
    ],
    openGraph: {
      title: "Teach And Taste | Esperienze culinarie in Toscana",
      description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste.",
      locale: "it_IT"
    },
    twitter: {
      title: "Teach And Taste | Esperienze culinarie in Toscana",
      description: "Chef a domicilio, corsi di cucina e catering in Toscana. Vivi esperienze culinarie autentiche con Teach And Taste."
    }
  },
  en: {
    title: "Teach And Taste | Culinary experiences in Tuscany",
    description: "Private chef, cooking classes and catering in Tuscany. Enjoy authentic culinary experiences with Teach And Taste.",
    keywords: [
      "Tuscan cuisine", "private chef", "cooking classes", "catering", "private events", "culinary experiences", "Tuscany", "Teach And Taste"
    ],
    openGraph: {
      title: "Teach And Taste | Culinary experiences in Tuscany",
      description: "Private chef, cooking classes and catering in Tuscany. Enjoy authentic culinary experiences with Teach And Taste.",
      locale: "en_US"
    },
    twitter: {
      title: "Teach And Taste | Culinary experiences in Tuscany",
      description: "Private chef, cooking classes and catering in Tuscany. Enjoy authentic culinary experiences with Teach And Taste."
    }
  }
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const meta = metadataByLocale[locale] || metadataByLocale.it;
  return {
    metadataBase: new URL('https://teachandtaste.it'),
    ...meta,
    authors: [{ name: "Eduard", url: "https://teachandtaste.it" }],
    openGraph: {
      ...meta.openGraph,
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
      type: "website",
    },
    twitter: {
      ...meta.twitter,
      card: "summary_large_image",
      images: ["/logo-extended.svg"],
    }
  };
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Controllo se la lingua è supportata
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Teach and Taste" />
      </head>
      <body className={`antialiased`}>
        <NextIntlClientProvider >
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

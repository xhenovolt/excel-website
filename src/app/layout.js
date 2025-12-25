import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://excelislamicschool.ug"),
  title: {
    default: "Excel Islamic Nursery and Primary School | Islamic Education Uganda",
    template: "%s | Excel Islamic School",
  },
  description: "Discover Excellence in Islamic and Secular Education. Excel Islamic Nursery and Primary School in Busembatia, Namutumba offers Islamic theology, Quran memorisation, and rigorous secular academics for boys and girls, Day and Boarding.",
  keywords: [
    "Islamic school Uganda",
    "Islamic nursery school",
    "Quran memorisation school",
    "boarding school Uganda",
    "primary school Namutumba",
    "Islamic education",
    "Hifz program",
    "Day and boarding",
    "Excellence in education",
    "Islamic studies",
    "best school in Namutumba",
    "affordable Islamic school",
  ],
  authors: [
    { name: "Xhenvolt", url: "https://xhenvolt.com" },
    { name: "Excel Islamic School", url: "https://excelislamicschool.ug" }
  ],
  creator: "Xhenvolt",
  publisher: "Excel Islamic School",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://excelislamicschool.ug",
    title: "Excel Islamic Nursery and Primary School - Uganda's Premier Islamic School",
    description: "Shaping tomorrow's leaders through Islamic theology, secular excellence, and Quran memorisation. Excellence in education since 2013.",
    siteName: "Excel Islamic School",
    locale: "en_UG",
    images: [
      {
        url: "/images/Primary-seven-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Excel Islamic School - Students and Campus",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Islamic Nursery and Primary School",
    description: "Excellence in Islamic and Secular Education - Uganda's Best Islamic School",
    creator: "@excelislamicschool",
    site: "@excelislamicschool",
    images: ["/images/Primary-seven-2025.jpg"],
  },
  alternates: {
    canonical: "https://excelislamicschool.ug",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Excel Islamic Nursery and Primary School",
              url: "https://excelislamicschool.ug",
              logo: "https://excelislamicschool.ug/images/logo.jpg",
              description: "Excellence in Islamic and Secular Education in Busembatia, Namutumba, Uganda",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Busembatia",
                addressLocality: "Namutumba",
                addressRegion: "Eastern Uganda",
                addressCountry: "UG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: ["+256-702-962984", "+256-701-962984", "+256-706-074179"],
                email: "excelislamicschoolbusembatia@gmail.com",
              },
              sameAs: [
                "https://instagram.com/excelislamicschool",
                "https://tiktok.com/@excelislamicschool",
                "https://t.me/excelislamicschool",
              ],
              founder: {
                "@type": "Person",
                name: "Sheikh Hassan Muhammad Mwaita",
              },
              educationalLevel: "Nursery to Primary",
              areaServed: "Uganda",
            }),
          }}
        />

        {/* JSON-LD Schema for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Excel Islamic Nursery and Primary School",
              image: "https://excelislamicschool.ug/images/Primary-seven-2025.jpg",
              url: "https://excelislamicschool.ug",
              telephone: "+256-702-962984",
              email: "excelislamicschoolbusembatia@gmail.com",
              priceRange: "UGX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Busembatia",
                addressLocality: "Namutumba",
                addressCountry: "UG",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "07:00",
                  closes: "13:00",
                },
              ],
            }),
          }}
        />

        {/* Google Site Verification (add your actual code) */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

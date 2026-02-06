import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PYRONICS Engineering Solutions Saudi Arabia | Contracting & Maintenance Services KSA",
  description:
    "Leading engineering solutions provider in Saudi Arabia since 1993. PYRONICS offers contracting, maintenance & engineering services across KSA, UK & India.",
  keywords: [
    "engineering solutions Saudi Arabia",
    "contracting services KSA",
    "maintenance company Riyadh",
    "PYRONICS engineering",
    "industrial contracting Saudi Arabia",
  ],
  authors: [{ name: "PYRONICS Innovative Engineering Solution" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.pyronics.co.uk/",
  },
  openGraph: {
    type: "website",
    url: "https://www.pyronics.co.uk/",
    title:
      "PYRONICS Engineering Solutions Saudi Arabia | Contracting & Maintenance Services",
    description:
      "Leading engineering solutions provider in Saudi Arabia since 1993.",
    images: [
      {
        url: "https://www.pyronics.co.uk/images/pyronics-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "PYRONICS Innovative Engineering Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "PYRONICS Engineering Solutions Saudi Arabia",
    description:
      "Leading engineering solutions provider in Saudi Arabia since 1993.",
    images: ["https://www.pyronics.co.uk/images/pyronics-twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme */}
        <meta name="theme-color" content="#1e3c72" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Raleway:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* CSS Files */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/lc_lightbox.css" />
        <link rel="stylesheet" href="/css/bootstrap-slider.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* JSON-LD Schemas */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PYRONICS Innovative Engineering Solution",
              "url": "https://www.pyronics.co.uk",
              "logo": "https://www.pyronics.co.uk/images/pyronics-logo.png",
              "foundingDate": "1993",
              "email": "info@pyronics.co.uk",
              "telephone": "+966-1-474-4411"
            }
          `,
          }}
        />
      </head>

      <body>
        {children}

        {/* JS FILES (ORDER IS IMPORTANT) */}

        {/* jQuery */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="afterInteractive" />

        {/* Bootstrap + Popper */}
        <Script src="/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />

        {/* Plugins */}
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/theia-sticky-sidebar.js" strategy="afterInteractive" />
        <Script src="/js/jquery.bootstrap-touchspin.js" strategy="afterInteractive" />
        <Script src="/js/lc_lightbox.lite.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap-slider.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/img-parallax.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />

        {/* Custom JS */}
        <Script src="/js/custom.js" strategy="afterInteractive" />

      </body>
    </html>
  );
}

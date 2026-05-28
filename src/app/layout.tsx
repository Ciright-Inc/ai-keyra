import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { KeyraSessionProvider } from "@/contexts/KeyraSessionContext";
import { KEYRA_FAVICON_SRC } from "@/lib/keyraBrandAssets";
import { SITE } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.tagline} | Keyra AOTI`,
    template: "%s | Keyra AOTI",
  },
  description:
    "ai.keyra.ie — Keyra Autonomous Operational Trust Infrastructure (AOTI). The trust layer for autonomous systems: rooted identity, operational authorization, runtime governance, trust federation, and execution verification at enterprise, telecom, and sovereign scale.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.tagline} | Keyra AOTI`,
    description:
      "Autonomous Operational Trust Infrastructure (AOTI) — the foundational trust layer for secure autonomous systems.",
    url: SITE.url,
    siteName: "Keyra AOTI",
    locale: "en_IE",
    type: "website",
  },
  icons: {
    icon: KEYRA_FAVICON_SRC,
    shortcut: KEYRA_FAVICON_SRC,
    apple: KEYRA_FAVICON_SRC,
  },
  keywords: [
    "Autonomous Operational Trust Infrastructure",
    "AOTI",
    "KOTA",
    "machine identity",
    "operational trust",
    "trust federation",
    "telecom trust",
    "sovereign identity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IE"
      data-keyra-lane="enterprise"
      className={`${inter.variable} ${montserrat.variable} ds-site-root h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ds-site min-h-full flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Keyra AOTI",
              url: SITE.url,
              description:
                "Autonomous Operational Trust Infrastructure — the trust layer for autonomous systems.",
              publisher: {
                "@type": "Organization",
                name: "Keyra Global",
                url: "https://keyra.ie",
              },
            }),
          }}
        />
        <a href="#main" className="ds-skip">
          Skip to content
        </a>
        <KeyraSessionProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </KeyraSessionProvider>
      </body>
    </html>
  );
}

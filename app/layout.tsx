import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richtprijscalculators | Floors & More & ABBI",
  description: "Twee transparante prijsfunnels voor gietvloeren en vloerherstellingen.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Eerst je richtprijs. Dan pas contact.",
    description: "Transparante budgetindicaties voor gietvloeren en vloerherstellingen.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Floors & More en ABBI richtprijscalculators" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

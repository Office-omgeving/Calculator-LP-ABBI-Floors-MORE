import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const preview = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: "Richtprijscalculators | Floors & More & ABBI",
    description: "Twee transparante prijsfunnels voor gietvloeren en vloerherstellingen.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Eerst je richtprijs. Dan pas contact.",
      description: "Transparante budgetindicaties voor gietvloeren en vloerherstellingen.",
      images: [{ url: preview, width: 1730, height: 909, alt: "Floors & More en ABBI richtprijscalculators" }],
      type: "website",
    },
    twitter: { card: "summary_large_image", images: [preview] },
  };
}

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

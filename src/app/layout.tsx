import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nurizkiansyah — Full Stack Developer & Product Builder",
  description:
    "Full Stack Developer building SaaS products and automation systems, backed by real enterprise security experience (Trellix DLP, Skyhigh CASB) securing 23,000+ endpoints.",
  metadataBase: new URL("https://nurizkiansyah.dev"),
  openGraph: {
    title: "Nurizkiansyah — Full Stack Developer & Product Builder",
    description:
      "I build SaaS products and automation systems, backed by real enterprise security experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Nav />
          <main className="pb-24 pt-16 lg:pl-60 lg:pb-0 lg:pt-0">
            <PageTransition>{children}</PageTransition>
          </main>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NefroEndo 2026 | Zagreb, Hotel Internacional",
  description:
    "Hrvatsko društvo za bubreg Hrvatskog liječničkog zbora - 11. - 13. rujan 2026.",
  keywords: [
    "NefroEndo",
    "nefrologija",
    "endokrinologija",
    "konferencija",
    "Zagreb",
    "2026",
  ],
  openGraph: {
    title: "NefroEndo 2026",
    description: "Pridružite se vodećim stručnjacima na NefroEndo 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

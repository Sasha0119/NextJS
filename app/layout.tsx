import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MenimSaytim",
    template: "%s | MenimSaytim", // "Blog | MenimSaytim" kabi
  },
  description: "Next.js bilan qurilgan zamonaviy veb-sayt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />           {/* Har sahifada ko'rinadi */}
        <main>{children}</main>  {/* Sahifa kontenti */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-20">
          <p>© 2025 MenimSaytim. Barcha huquqlar himoyalangan.</p>
        </footer>
      </body>
    </html>
  );
}
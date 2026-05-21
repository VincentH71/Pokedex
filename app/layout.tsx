import "./globals.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokedex - VHDev",
  description: "Mon pokedex",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div>
  <ul id="Navbar">
    <li><Link href="./">Accueil</Link></li>
    <li><Link href="/pokemons/102">EasterEgg</Link></li>
  </ul>
</div>
        {children}
      </body>
    </html>
  );
}

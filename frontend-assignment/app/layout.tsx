import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WebFontLoader from "./components/WebFontLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dropbox Brand Guidelines",
  description: "Design system and brand guidelines for Dropbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://cdn.prod.website-files.com/66c503d081b2f012369fc5d2/673385fd3198626bd743eb08_1024x1024bb%20(1).jpg"
          rel="apple-touch-icon"
        />
        <link
          href="https://cdn.prod.website-files.com/66c503d081b2f012369fc5d2/67336e1ef555445999b4a0a3_favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <WebFontLoader />
        {children}
      </body>
    </html>
  );
}

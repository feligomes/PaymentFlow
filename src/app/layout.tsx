import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const HEADER_HEIGHT = 81;

export const metadata: Metadata = {
  title: "Payment Flow App",
  description: "Demo application showing a payment flow with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header
          style={{
            height: HEADER_HEIGHT,
            borderBottom: "1px solid #E7E9EF",
            padding: "0px 16px",
          }}
        >
          <Link href="/" passHref>
            <Image
              src="/CedarLogo.svg"
              alt="ABC Health System"
              width={153}
              height={80}
            />
          </Link>
        </header>
        <main
          style={{
            height: `calc(100vh - ${HEADER_HEIGHT}px)`,
            backgroundColor: "#F2F8FF",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

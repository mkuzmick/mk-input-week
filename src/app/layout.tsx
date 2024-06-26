import type { Metadata } from "next";
import { Inter, Emilys_Candy, Amatic_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const emilysCandy = Emilys_Candy({ subsets: ["latin"], weight: "400", variable: "--font-emilys-candy" });
const amaticSC = Amatic_SC({ subsets: ["latin"], weight: "700", variable: "--font-amatic-sc" });

export const metadata: Metadata = {
  title: "MK Input Week",
  description: "all sorts of inputs explored",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${emilysCandy.variable} ${amaticSC.variable}`}>{children}</body>
    </html>
  );
}

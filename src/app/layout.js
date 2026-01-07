import {  Manrope, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: [
    "100","200","300","400","500","600","700","800","900",
  ],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
       className={`${manrope.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

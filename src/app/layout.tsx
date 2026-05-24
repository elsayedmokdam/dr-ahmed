import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { DoctorContextProvider } from "./_context/DoctorContextProvider";

const cairo = Cairo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doctor-clinic.vercel.app/"),

  title: {
    default: "عيادة د. سيف حازم",
    template: "%s | د. سيف حازم",
  },

  keywords: [
    "د. سيف حازم",
    "عيادة طبية",
    "طبيب",
    "حجز موعد",
    "استشارة طبية",
    "كشف طبي",
    "فحص طبي",
    "عيادة في مصر",
    "طبيب متخصص",
  ],

  authors: [{ name: "د. سيف حازم" }],

  creator: "Elsayed Mokdam",
  publisher: "Elsayed Mokdam",
  category: "عيادة طبية",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: { canonical: "" },

  openGraph: {
    title: "عيادة د. سيف حازم | Doctor Clinic",
    description:
      "عيادة د. سيف حازم — رعاية طبية احترافية بأعلى مستويات الجودة. احجز موعدك الآن.",
    url: "",
    siteName: "عيادة د. سيف حازم",
    locale: "ar_EG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "عيادة د. سيف حازم | Doctor Clinic",
    description:
      "عيادة د. سيف حازم — رعاية طبية احترافية بأعلى مستويات الجودة. احجز موعدك الآن.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn(cairo.variable, "font-sans")}>
      <body>
        <DoctorContextProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </DoctorContextProvider>
      </body>
    </html>
  );
}

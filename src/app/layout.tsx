import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { DoctorContextProvider } from "./_context/DoctorContextProvider";
import drPhoto from "@/assets/Images/doctor.png"

const cairo = Cairo({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doctor-clinic.vercel.app/"),

  title: {
    default: "عيادة د. أحمد محمد",
    template: "%s | د. أحمد محمد",
  },

  keywords: [
    "د. أحمد محمد",
    "عيادة طبية",
    "طبيب",
    "حجز موعد",
    "استشارة طبية",
    "كشف طبي",
    "فحص طبي",
    "عيادة في مصر",
    "طبيب متخصص",
  ],

  authors: [{ name: "د. أحمد محمد" }],

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
    title: "عيادة د. أحمد محمد | Doctor Clinic",
    description:
      "عيادة د. أحمد محمد — رعاية طبية احترافية بأعلى مستويات الجودة. احجز موعدك الآن.",
    url: drPhoto.src,
    siteName: "عيادة د. أحمد محمد",
    locale: "ar_EG",
    type: "website",

    images: [
      {
        url: drPhoto.src,
        width: 800,
        height: 600,
        alt: "عيادة د. أحمد محمد",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "عيادة د. أحمد محمد | Doctor Clinic",
    description:
      "عيادة د. أحمد محمد — رعاية طبية احترافية بأعلى مستويات الجودة. احجز موعدك الآن.",
    images: [drPhoto.src],
  },

  icons: {
    icon: drPhoto.src,
    apple: drPhoto.src,
    shortcut: drPhoto.src,
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

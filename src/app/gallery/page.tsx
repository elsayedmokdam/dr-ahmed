"use client";

import { motion } from "framer-motion";
import {
  FaCamera,
  FaStar,
  FaArrowLeft,
  FaUserDoctor,
  FaHospital,
  FaAward,
} from "react-icons/fa6";
import Link from "next/link";
import BackToHomeBtn from "@/components/back-to-home-btn/BackToHomeBtn";
import Image from "next/image";
import image1 from "@/assets/Images/image1.png";
import image2 from "@/assets/Images/image2.png";
import image3 from "@/assets/Images/image3.png";
import image4 from "@/assets/Images/image4.png";
import image5 from "@/assets/Images/image5.png";
import image6 from "@/assets/Images/image6.png";
import image7 from "@/assets/Images/image7.png";
import image8 from "@/assets/Images/image8.png";
import image9 from "@/assets/Images/image9.png";
import image10 from "@/assets/Images/image10.png";


// Gallery items — using gradient placeholders since no doctor images were provided.
// Replace with real clinic/doctor images by swapping `gradient` with <Image src={...} />.
const galleryItems = [
  {
    id: 1,
    gradient: "from-blue-600 to-blue-800",
    image: image1,
  },
  {
    id: 2,
    gradient: "from-teal-600 to-cyan-700",
    image: image2,
  },
  {
    id: 3,
    gradient: "from-indigo-600 to-blue-700",
    image: image3,
  },
  {
    id: 4,
    gradient: "from-sky-600 to-blue-700",
    image: image4,
  },
  {
    id: 5,
    gradient: "from-blue-700 to-indigo-800",
    image: image5,
  },
  {
    id: 6,
    gradient: "from-cyan-600 to-teal-700",
    image: image6,
  },
  {
    id: 7,
    gradient: "from-blue-500 to-sky-700",
    image: image7,
  },
  {
    id: 8,
    gradient: "from-indigo-500 to-violet-700",
    image: image8,
  },
  {
    id: 9,
    gradient: "from-cyan-500 to-teal-700",
    image: image9,
  },
  {
    id: 10,
    gradient: "from-blue-500 to-sky-700",
    image: image10,
  },
];

export default function GalleryPage() {
  return (
    <main className="relative max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <BackToHomeBtn />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 backdrop-blur-xl">
            <FaCamera className="text-primary" />
            <span className="text-sm text-muted-foreground">
              جولة داخل العيادة والتجهيزات
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
            عيادة متكاملة
            <span className="block text-primary">بأعلى المعايير الطبية</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
            اطّلع على تجهيزات العيادة الحديثة والبيئة الطبية الآمنة التي نوفرها
            لضمان أفضل تجربة علاجية لمرضانا.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/booking"
              className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105"
            >
              احجز موعدك الآن
              <FaArrowLeft className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="rounded-2xl border border-border bg-card/60 px-6 py-3 font-medium backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-primary/10"
            >
              الخدمات الطبية
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            {
              icon: <FaUserDoctor />,
              title: "+2000",
              subtitle: "مريض تمت رعايتهم",
            },
            { icon: <FaStar />, title: "4.9", subtitle: "تقييم المرضى" },
            { icon: <FaHospital />, title: "5+", subtitle: "سنة خبرة طبية" },
            { icon: <FaAward />, title: "100%", subtitle: "رضا المرضى" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/50 bg-card/60 p-5 text-center backdrop-blur-xl shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">عن الدكتور و العيادة</h2>
            <p className="mt-2 text-muted-foreground">
              تجهيزات حديثة وبيئة طبية مريحة
            </p>
          </div>
          <div className="hidden rounded-2xl border border-border bg-card/50 px-4 py-2 backdrop-blur-xl md:block">
            <span className="text-sm text-muted-foreground">
              {galleryItems.length} صورة
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 shadow-2xl backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="relative h-110 overflow-hidden">
                <Image
                  src={item.image}
                  alt={"Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-all duration-500 group-hover:from-black/90" />

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 to-accent/10 p-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            هل أنت مستعد لزيارة العيادة؟
          </h3>
          <p className="text-muted-foreground mb-6">
            احجز موعدك الآن واستمتع بتجربة طبية راقية في بيئة مريحة وآمنة.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105"
          >
            احجز موعد الآن
            <FaArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

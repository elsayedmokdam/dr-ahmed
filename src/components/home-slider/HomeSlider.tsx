"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import { FaStethoscope, FaHeartPulse, FaShieldHeart } from "react-icons/fa6";

const slides = [
  {
    gradient: "from-blue-900 via-blue-800 to-blue-700",
    icon: <FaStethoscope className="w-20 h-20 text-blue-200/40" />,
    badge: "🏥 عيادة طبية متخصصة",
    title: "رعاية صحتك",
    titleHighlight: "أولويتنا الأولى",
    subtitle:
      "نقدم لك رعاية طبية متكاملة بأحدث الأساليب العلمية وأعلى مستويات الجودة.",
  },
  {
    gradient: "from-teal-900 via-teal-800 to-cyan-800",
    icon: <FaHeartPulse className="w-20 h-20 text-teal-200/40" />,
    badge: "❤️ صحتك بين يدي أمينة",
    title: "تشخيص دقيق",
    titleHighlight: "وعلاج فعّال",
    subtitle:
      "بخبرة طبية واسعة وتقنيات حديثة، نضمن لك دقة التشخيص وكفاءة العلاج.",
  },
  {
    gradient: "from-indigo-900 via-blue-900 to-blue-800",
    icon: <FaShieldHeart className="w-20 h-20 text-indigo-200/40" />,
    badge: "⭐ خبرة تتجاوز 15 عاماً",
    title: "ثق بنا",
    titleHighlight: "لأنك تستحق الأفضل",
    subtitle:
      "احجز موعدك الآن واستمتع بتجربة طبية راقية في بيئة مريحة وودية.",
  },
];

export default function HomeSlider() {
  return (
    <section className="relative overflow-hidden">
      <Slider
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{ clickable: true }}
        className="h-[75vh] min-h-125 w-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`relative h-[80vh] min-h-80 w-full overflow-hidden bg-linear-to-br ${slide.gradient}`}
          >
            {/* Decorative medical cross pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 text-[20rem] font-black text-white leading-none select-none">
                +
              </div>
              <div className="absolute bottom-10 left-20 text-[10rem] font-black text-white leading-none select-none">
                +
              </div>
            </div>

            {/* Floating icon */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
              {slide.icon}
            </div>

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl shadow-lg"
                  >
                    <span className="text-sm font-medium text-white">
                      {slide.badge}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl font-black leading-tight text-white md:text-7xl"
                  >
                    {slide.title}
                    <span className="block text-blue-200">
                      {slide.titleHighlight}
                    </span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="mt-6 max-w-2xl text-lg leading-9 text-blue-100 md:text-xl"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-10 flex flex-wrap gap-4"
                  >
                    <Link
                      href="/booking"
                      className="group relative overflow-hidden rounded-2xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20"
                    >
                      <span className="relative z-10">احجز موعد الآن</span>
                      <div className="absolute inset-0 translate-y-full bg-blue-50 transition-transform duration-300 group-hover:translate-y-0" />
                    </Link>

                    <Link
                      href="/services"
                      className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
                    >
                      خدماتنا الطبية
                    </Link>

                    <Link
                      href="/gallery"
                      className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
                    >
                      العيادة والتجهيزات
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

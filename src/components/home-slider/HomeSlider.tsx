"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import { FaHeartPulse, FaShieldHeart, FaStethoscope } from "react-icons/fa6";
import DoctorPhoto from "../doctor-photo/DoctorPhoto";

// Shared slide wrapper — consistent height/overflow
function SlideWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        relative w-full overflow-hidden
        min-h-175
        sm:min-h-200
        md:min-h-225
        lg:min-h-[80vh]
        ${className}
      `}
    >
      {/* Main Content */}
      <div className="relative h-full pt-13">{children}</div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
}


export default function HomeSlider() {
  return (
    <section className="relative overflow-hidden">
      <Slider
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {/* SLIDE 1 — Doctor Portrait Hero */}
        <SlideWrapper className="bg-[#04111f]">
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1a6fc4 1px,transparent 1px),linear-gradient(90deg,#1a6fc4 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Blue glow — desktop: left side; mobile: centered behind content */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 h-full w-full lg:w-1/2 bg-[radial-gradient(ellipse_at_left_center,rgba(26,111,196,0.3),transparent_70%)]" />
          </div>

          {/* ── Content layout ── */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20">
              {/*
                Mobile:  single column — text on top, doctor photo below (hidden on xs, shown sm+)
                Desktop: two columns — text right, photo left (RTL)
              */}
              <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:gap-0">
                {/* ── Text block (full width mobile, flex-1 desktop) ── */}
                <div className="w-full flex-1 pt-8 pb-4 text-center lg:text-right lg:py-12">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 backdrop-blur-xl shadow-lg"
                  >
                    <FaStethoscope className="text-blue-300 w-3.5 h-3.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-blue-100 sm:text-sm">
                      عيادة طبية متخصصة · منذ 2010
                    </span>
                  </motion.div>

                  {/* Doctor name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.28 }}
                    className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    د. أحمد
                    <span className="block bg-gradient-to-l from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                      محمد
                    </span>
                  </motion.h1>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42 }}
                    className="mx-auto mt-4 max-w-md text-base leading-7 text-blue-100/80 sm:text-lg lg:mx-0 lg:max-w-xl lg:leading-8"
                  >
                    رعاية صحتك أولويتنا — نقدم لك تشخيصاً دقيقاً وعلاجاً فعّالاً
                    بأحدث الأساليب الطبية وأعلى مستويات الجودة.
                  </motion.p>

                  {/* Stats row */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.54 }}
                    className="mt-6 flex justify-center gap-6 lg:justify-start"
                  >
                    {[
                      { value: "+15", label: "سنة خبرة" },
                      { value: "+2000", label: "مريض" },
                      { value: "4.9★", label: "تقييم" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-xl font-black text-blue-300 sm:text-2xl">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[11px] text-blue-200/60 sm:text-xs">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.64 }}
                    className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"
                  >
                    <Link
                      href="/booking"
                      className="group relative overflow-hidden rounded-2xl bg-blue-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-base"
                    >
                      <span className="relative z-10">احجز موعد الآن</span>
                      <div className="absolute inset-0 translate-y-full bg-blue-400 transition-transform duration-300 group-hover:translate-y-0" />
                    </Link>
                    <Link
                      href="/services"
                      className="rounded-2xl border border-white/25 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/[0.15] sm:px-8 sm:py-3.5 sm:text-base"
                    >
                      خدماتنا الطبية
                    </Link>
                  </motion.div>
                </div>

                {/* Doctor photo */}
                <DoctorPhoto />
              </div>
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 2 — Services highlight */}
        <SlideWrapper className="bg-linear-to-br from-teal-900 via-teal-800 to-cyan-800">
          {/* Decorative cross */}
          <div className="absolute top-8 right-8 text-[16rem] font-black text-white/4 leading-none select-none pointer-events-none sm:text-[22rem]">
            +
          </div>
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
            <FaHeartPulse className="w-20 h-20 text-teal-200/25" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20">
              <div className="max-w-3xl text-center sm:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xl shadow-lg"
                >
                  <span className="text-sm font-medium text-white">
                    ❤️ صحتك بين يدي أمينة
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  تشخيص دقيق
                  <span className="block text-teal-200">وعلاج فعّال</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44 }}
                  className="mx-auto mt-5 max-w-xl text-base leading-8 text-teal-100/90 sm:mx-0 sm:text-lg"
                >
                  بخبرة طبية واسعة وتقنيات حديثة، نضمن لك دقة التشخيص وكفاءة
                  العلاج في بيئة آمنة ومريحة.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.58 }}
                  className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start"
                >
                  <Link
                    href="/booking"
                    className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    <span className="relative z-10">احجز موعد الآن</span>
                    <div className="absolute inset-0 translate-y-full bg-teal-50 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    خدماتنا الطبية
                  </Link>
                </motion.div>
              </div>
              <div className="flex w-full justify-center lg:hidden mt-8">
                <DoctorPhoto />
              </div>
            </div>
          </div>
        </SlideWrapper>

        {/* SLIDE 3 — Trust & experience */}
        <SlideWrapper className="bg-linear-to-br from-indigo-900 via-blue-900 to-blue-800">
          <div className="absolute top-8 right-8 text-[16rem] font-black text-white/4 leading-none select-none pointer-events-none sm:text-[22rem]">
            +
          </div>
          <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
            <FaShieldHeart className="w-20 h-20 text-indigo-200/25" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20">
              <div className="max-w-3xl text-center sm:text-right">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-xl shadow-lg"
                >
                  <span className="text-sm font-medium text-white">
                    ⭐ خبرة تتجاوز 5 أعوام
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  ثق بنا
                  <span className="block text-indigo-200">
                    لأنك تستحق الأفضل
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44 }}
                  className="mx-auto mt-5 max-w-xl text-base leading-8 text-indigo-100/90 sm:mx-0 sm:text-lg"
                >
                  احجز موعدك الآن واستمتع بتجربة طبية راقية في بيئة مريحة وودية
                  مع طاقم طبي متخصص.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.58 }}
                  className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start"
                >
                  <Link
                    href="/booking"
                    className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    <span className="relative z-10">احجز موعد الآن</span>
                    <div className="absolute inset-0 translate-y-full bg-indigo-50 transition-transform duration-300 group-hover:translate-y-0" />
                  </Link>
                  <Link
                    href="/gallery"
                    className="rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    العيادة والتجهيزات
                  </Link>
                </motion.div>
              </div>
              <div className="flex w-full justify-center lg:hidden mt-8">
                <DoctorPhoto />
              </div>
            </div>
          </div>
        </SlideWrapper>
      </Slider>
    </section>
  );
}

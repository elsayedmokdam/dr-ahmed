"use client";

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { useDoctor } from "../_context/DoctorContextProvider";
import BackToHomeBtn from "@/components/back-to-home-btn/BackToHomeBtn";

// Map service names to relevant icons/emojis
const serviceIconMap: Record<string, string> = {
  "كشف عام": "🩺",
  "متابعة مريض": "📋",
  "استشارة طبية": "💬",
  "فحص شامل": "🔬",
  "تقرير طبي": "📄",
};

export default function ServicesPage() {
  const { services } = useDoctor();

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Back Button */}
        <BackToHomeBtn />

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            خدماتنا الطبية الاحترافية
          </span>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            خدمات عيادة د. أحمد محمد
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            نقدم لك رعاية طبية متكاملة بأحدث الأساليب العلمية وأعلى مستويات الجودة،
            مع اهتمام كامل بكل تفاصيل حالتك الصحية.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const icon = serviceIconMap[service.nameAr] ?? "🏥";
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Medical cross decoration */}
                <div className="absolute top-2 left-2 text-7xl font-black text-primary/5 leading-none select-none">
                  +
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                  {icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold">{service.nameAr}</h3>
                <p className="mb-6 leading-7 text-muted-foreground">
                  مدة الجلسة: {service.durationMinutes} دقيقة
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>رعاية طبية متخصصة</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>تشخيص دقيق وعلاج فعّال</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>بيئة طبية معقمة وآمنة</span>
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <span className="text-2xl font-extrabold text-primary">
                    {service.price} جنيه
                  </span>
                  <Link
                    href="/booking"
                    className="z-10 rounded-xl bg-primary px-5 py-2 font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    احجز الآن
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {services.length === 0 && (
          <div className="text-center py-20">
            <FaStethoscope className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              لا توجد خدمات متاحة حالياً
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

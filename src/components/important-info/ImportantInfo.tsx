"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";

export default function ImportantInfo() {
  return (
    <div>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-linear-to-br from-primary/15 to-accent/15 rounded-2xl p-6 border border-primary/20"
        >
          <h3 className="font-bold mb-4">معلومات مهمة</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>مدة الكشف من 15 دقيقة إلى 45 دقيقة حسب الحالة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>الدفع يتم عند الحضور فقط</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>يمكنك طباعة إيصال حجزك بعد الحجز</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>احجز مسبقاً لتجنب الانتظار وتوفير الوقت</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>أحضر نتائج تحاليلك السابقة عند الزيارة إن وُجدت</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>يمكنك إلغاء الموعد وإعادة الحجز في أي وقت</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">✓</span>
              <span>للاستفسار أو حالات الطوارئ تواصل مع العيادة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">
                <FaPhone />
              </span>
              <Link href="tel:01069341668" className="underline font-medium">
                01069341668
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 border border-border"
        >
          <h3 className="font-bold mb-4">مواعيد العيادة</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">سبت - اثنين - أربعاء</span>
              <span className="font-medium">02:00 م - 8:00 م</span>
            </div>
            <div className="mt-3 flex justify-between text-muted-foreground text-xs border-t border-border pt-3">
              <span>راجع حالة العيادة في أعلى الصفحة</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 border border-border text-center"
        >
          <div className="text-4xl mb-3 flex justify-center">
            <FaStethoscope className="text-primary w-10 h-10" />
          </div>
          <h3 className="font-bold mb-2">رعاية طبية متميزة</h3>
          <p className="text-sm text-muted-foreground">
            فريق طبي متخصص ومتمرس لخدمتك بأعلى مستويات الاحترافية
          </p>
        </motion.div>
      </div>
    </div>
  );
}

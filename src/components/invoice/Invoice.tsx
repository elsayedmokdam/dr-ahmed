import { motion, AnimatePresence } from "motion/react";
import { format, parse } from "date-fns";
import { arSA } from "date-fns/locale/ar-SA";
import { Booking } from "@/types";
import InvoiceButtons from "../invoice-buttons/InvoiceButtons";
import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";

interface InvoiceProps {
  booking: Booking;
  onClose: () => void;
}

export function Invoice({ booking, onClose }: InvoiceProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
        >
          <div className="p-6 print:p-8">
            <div className="flex items-center justify-between mb-6 print:hidden">
              <h2>إيصال الحجز الطبي</h2>
              <InvoiceButtons onClose={onClose} handlePrint={handlePrint} />
            </div>

            <div className="border-2 border-primary rounded-xl p-6 print:border-black">
              {/* Header */}
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="flex justify-center mb-2">
                  <FaStethoscope className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-1">
                  عيادة د. سيف حازم
                </h1>
                <p className="text-muted-foreground text-sm">إيصال حجز موعد طبي</p>
              </div>

              {/* Patient Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">اسم المريض</p>
                  <p className="font-bold text-lg">{booking.customerName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">رقم الهاتف</p>
                  <p className="font-bold text-lg">{booking.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">تاريخ الزيارة</p>
                  <p className="font-bold">
                    {format(
                      parse(booking.date, "yyyy-MM-dd", new Date()),
                      "EEEE، dd MMMM yyyy",
                      { locale: arSA },
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">وقت الموعد</p>
                  <p className="font-bold">{booking.timeSlot}</p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-bold mb-4">الخدمات الطبية المطلوبة</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-2">الخدمة</th>
                      <th className="text-center py-2">المدة</th>
                      <th className="text-left py-2">الرسوم</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.services.map((service) => (
                      <tr key={service.id} className="border-b border-border/50">
                        <td className="py-3 text-right">{service.nameAr}</td>
                        <td className="py-3 text-center text-muted-foreground">
                          {service.durationMinutes} دقيقة
                        </td>
                        <td className="py-3 text-left font-medium">
                          {service.price} جنيه
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes */}
              {booking.additionalNotes && (
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="font-bold mb-2">الشكوى / الملاحظات</h3>
                  <p className="text-muted-foreground">{booking.additionalNotes}</p>
                </div>
              )}

              {/* Summary */}
              <div className="bg-primary/10 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">عدد الخدمات:</span>
                  <span className="font-bold">{booking.services.length}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">المدة التقديرية:</span>
                  <span className="font-bold">
                    {booking.services.reduce((sum, s) => sum + s.durationMinutes, 0)} دقيقة
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t-2 border-primary/30">
                  <span className="font-bold text-lg">إجمالي الرسوم:</span>
                  <span className="font-bold text-2xl text-primary">
                    {booking.totalCost} جنيه
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 rounded-3xl border border-border/50 bg-muted/30 px-5 py-6 text-center backdrop-blur-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  💵 الدفع يتم عند الحضور للعيادة
                </div>

                <h3 className="text-lg font-bold">
                  نتمنى لكم الشفاء والصحة الدائمة 🏥
                </h3>

                <div className="my-5 h-px w-full bg-border/60" />

                <div className="flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground md:flex-row">
                  <Link
                    href="tel:01069341668"
                    className="transition-colors duration-300 hover:text-primary hover:underline"
                  >
                    📞 01069341668
                  </Link>
                  <span className="hidden md:block">•</span>
                  <p>
                    🗓 تاريخ الإصدار:
                    <span className="mr-1 font-medium text-foreground">
                      {format(new Date(booking.createdAt), "dd/MM/yyyy HH:mm")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

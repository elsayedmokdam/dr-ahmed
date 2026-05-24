"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { useDoctor } from "@/app/_context/DoctorContextProvider";
import { Service } from "@/types";
import { format } from "date-fns";
import { notify } from "@/lib/helpers/alerts";
import { FaCalendar, FaClock, FaPhone, FaUser, FaNotesMedical } from "react-icons/fa6";

// Converts Arabic time slot to minutes for sorting
const slotToMinutes = (slot: string): number => {
  const [time, period] = slot.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "م" && hours !== 12) hours += 12;
  if (period === "ص" && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

export function BookingForm() {
  const { services, bookings, addBooking, getAvailableTimeSlots, shopStatus } =
    useDoctor();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const availableSlots = useMemo(() => {
    return getAvailableTimeSlots(selectedDate);
  }, [selectedDate, bookings, getAvailableTimeSlots]);

  useEffect(() => {
    if (selectedTime && !availableSlots.includes(selectedTime)) {
      setSelectedTime("");
    }
  }, [selectedDate, availableSlots, selectedTime]);

  const totalCost = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0,
  );

  const totalDuration = selectedServices.reduce(
    (sum, service) => sum + service.durationMinutes,
    0,
  );

  const handleServiceToggle = (service: Service) => {
    setSelectedServices((prev) => {
      const exists = prev.find((s) => s.id === service.id);
      if (exists) return prev.filter((s) => s.id !== service.id);
      return [...prev, service];
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!shopStatus.isOpen) {
      notify.error("عذراً، العيادة مغلقة حالياً");
      return;
    }

    if (
      !customerName ||
      !phoneNumber ||
      !selectedTime ||
      selectedServices.length === 0
    ) {
      notify.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    try {
      await addBooking({
        customerName,
        phoneNumber,
        date: selectedDate,
        timeSlot: selectedTime,
        services: selectedServices,
        additionalNotes,
        totalCost,
      });

      notify.success("تم حجز موعدك بنجاح ✅");

      setCustomerName("");
      setPhoneNumber("");
      setSelectedTime("");
      setSelectedServices([]);
      setAdditionalNotes("");
    } catch (error) {
      console.error(error);
      notify.error("فشل إنشاء الحجز، حاول مرة أخرى");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-lg"
    >
      <div className="mb-6">
        <h2 className="mb-1">احجز موعدك الطبي</h2>
        <p className="text-sm text-muted-foreground">
          اختر الخدمة المناسبة والوقت الذي يناسبك
        </p>

        {!shopStatus.isOpen && (
          <div className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 p-3">
            <p className="text-center font-medium text-red-500">
              ⚠️ العيادة مغلقة حالياً
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2">
              <FaUser className="h-4 w-4 text-primary" />
              اسم المريض
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="أدخل اسمك الكامل"
              required
              className="w-full rounded-xl border border-border bg-input-background px-4 py-3 text-gray-900 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2">
              <FaPhone className="h-4 w-4 text-primary" />
              رقم الهاتف
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="^01[0125][0-9]{8}$"
              title="يرجى إدخال رقم هاتف مصري صحيح"
              placeholder="01xxxxxxxxx"
              required
              className="w-full rounded-xl border border-border bg-input-background px-4 py-3 text-gray-900 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="mb-2 flex items-center gap-2">
            <FaCalendar className="h-4 w-4 text-primary" />
            تاريخ الزيارة
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={format(new Date(), "yyyy-MM-dd")}
            required
            className="w-full rounded-xl border border-border bg-input-background px-4 py-3 text-gray-900 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Available Slots */}
        <div>
          <label className="mb-2 flex items-center gap-2">
            <FaClock className="h-4 w-4 text-primary" />
            الوقت المتاح
          </label>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
            {availableSlots.length > 0 ? (
              availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`rounded-lg border px-3 py-2 text-center transition-all duration-300 hover:scale-105 text-sm ${
                    selectedTime === slot
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-input-background text-gray-900 hover:border-primary"
                  }`}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="col-span-full py-4 text-center text-muted-foreground">
                لا توجد مواعيد متاحة في هذا اليوم
              </p>
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <label className="mb-2 flex items-center gap-2">
            <FaNotesMedical className="h-4 w-4 text-primary" />
            اختر الخدمة الطبية
          </label>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`rounded-xl border p-4 text-right transition-all duration-300 ${
                  selectedServices.find((s) => s.id === service.id)
                    ? "scale-105 border-primary bg-primary text-white"
                    : "border-border bg-input-background text-gray-900 hover:scale-[1.02] hover:border-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{service.nameAr}</p>
                    <p className="text-sm opacity-80">
                      {service.durationMinutes} دقيقة
                    </p>
                  </div>
                  <p className="font-bold">{service.price} جنيه</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="mb-2 block">الشكوى / ملاحظات إضافية</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            rows={3}
            placeholder="اذكر الشكوى الرئيسية أو أي ملاحظات تود إضافتها للطبيب..."
            className="w-full resize-none rounded-xl border border-border bg-input-background px-4 py-3 text-gray-900 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Summary */}
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-xl border border-primary/20 bg-primary/5 p-4"
          >
            <h3 className="mb-2">ملخص الحجز</h3>
            <div className="space-y-1 text-sm">
              <p>عدد الخدمات: {selectedServices.length}</p>
              <p>المدة التقديرية: {totalDuration} دقيقة</p>
              <p className="text-lg font-bold text-primary">
                رسوم الكشف: {totalCost} جنيه
              </p>
            </div>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
        >
          تأكيد حجز الموعد
        </button>
      </form>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import doctorImage from "@/assets/Images/doctor.png";

export default function DoctorPhoto() {
  return (
    <div>
      {/* Doctor photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="
                    relative flex shrink-0 items-end justify-center
                    mt-8 lg:mt-0
                    w-55 h-80
                    sm:w-65 sm:h-95
                    md:w-[320px] md:h-112.5
                    lg:w-95 lg:h-130
                    "
      >
        {/* Glow ring behind photo */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Decorative border */}
        <div className="absolute inset-3 sm:inset-4 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] border border-blue-400/20" />

        {/* Photo */}
        <div
          className="
                      relative
                      w-45 h-70
                      sm:w-55 sm:h-85
                      md:w-65 md:h-100
                      lg:w-72 lg:h-115
                      rounded-4xl
                      overflow-hidden
                      border border-white/10
                      shadow-2xl shadow-blue-900/50
                      bg-white/5
                      backdrop-blur-sm
                    "
        >
          <Image
            src={doctorImage}
            alt="د. أحمد محمد"
            fill
            priority
            quality={95}
            className="object-cover object-top scale-105"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#04111f]/80 to-transparent" />
        </div>

        {/* Floating credential card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, type: "spring" }}
          className="
                      absolute top-8 -left-2
                      sm:top-12 sm:-left-4
                      lg:top-16 lg:-left-6
                      hidden sm:block
                      rounded-2xl border border-white/10
                      bg-white/10
                      px-3 py-2
                      lg:px-4 lg:py-3
                      backdrop-blur-xl shadow-xl
                      "
        >
          <p className="text-[10px] lg:text-xs text-blue-200/70">التخصص</p>
          <p className="text-xs lg:text-sm font-bold text-white">علاج طبيعي</p>
        </motion.div>

        {/* Floating availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="
                      absolute bottom-16 -left-1
                      sm:bottom-20 sm:-left-3
                      lg:bottom-28 lg:-left-4
                      hidden sm:block
                      rounded-2xl border border-green-400/20
                      bg-green-500/15
                      px-3 py-2
                      lg:px-4 lg:py-3
                      backdrop-blur-xl shadow-xl
                      "
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            <p className="text-xs lg:text-sm font-semibold text-green-300">
              متاح الآن
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

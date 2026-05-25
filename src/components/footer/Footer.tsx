import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/40 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-primary">
            عيادة د. أحمد محمد
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            رعاية طبية احترافية بأعلى مستويات الجودة والاهتمام بصحتك. نسعى
            لتقديم أفضل خدمة طبية لمرضانا الكرام.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">روابط سريعة</h3>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/" className="transition hover:text-primary">
              الرئيسية
            </Link>
            <Link href="/booking" className="transition hover:text-primary">
              احجز موعد
            </Link>
            <Link href="/services" className="transition hover:text-primary">
              الخدمات الطبية
            </Link>
            <Link href="/gallery" className="transition hover:text-primary">
              العيادة والتجهيزات
            </Link>
          </div>
        </div>

        {/* Developer Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">تواصل مع مطور الموقع</h3>
          <p className="text-sm text-muted-foreground">
            هل تريد موقعًا احترافيًا لعيادتك أو نشاطك التجاري؟
          </p>
          <div className="flex items-center gap-4 text-2xl">
            <Link
              href="tel:01028340399"
              target="_blank"
              className="transition hover:scale-110 hover:text-green-500"
            >
              <FaWhatsapp size={20} />
            </Link>
            <Link
              href="tel:01028340399"
              target="_blank"
              className="transition hover:scale-110 hover:text-primary"
            >
              <FaPhone size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 عيادة د. أحمد محمد - جميع الحقوق محفوظة</p>
          <p>
            تم التصميم والتطوير بواسطة{" "}
            <span className="font-bold text-primary">Elsayed Mohamed</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

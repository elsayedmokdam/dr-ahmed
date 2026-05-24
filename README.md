# عيادة د. أحمد محمد — Doctor Clinic App

A Next.js doctor clinic booking web application (converted from a barber shop system).

## Features
- Online appointment booking for patients
- Service/treatment listing with prices & durations
- Doctor dashboard (owner mode) to manage services and clinic status
- Clinic open/closed status with real-time indicator
- Invoice/receipt generation per booking
- Booking search by name or phone number
- Estimated wait-time calculation
- Responsive RTL Arabic UI with dark mode support
- PostgreSQL database via Prisma

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables
Copy `.env.development` to `.env.local` and set:
```
DATABASE_URL=your_postgres_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Owner Access
Click "دخول الطبيب" in the navbar and enter the owner password to access the doctor dashboard.

"use client";

import HomeSlider from "@/components/home-slider/HomeSlider";
import MainPage from "@/components/main-page/MainPage";
import { useDoctor } from "./_context/DoctorContextProvider";

export default function page() {
  const { isOwner } = useDoctor();
  return (
    <>
      {!isOwner && <HomeSlider />}
      <MainPage isOwner={isOwner} />
    </>
  );
}

import React from "react";
import heroSection from '../../assets/images/heroSection.png';
import { HiArrowDown } from "react-icons/hi2";

function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroSection})` }}
      className="relative bg-cover bg-center h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#134155] to-[#44898F] opacity-75"></div>
      <section className="relative flex flex-col items-center justify-center h-full text-prime-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          find your health specialists
        </h1>
        <p className="text-lg mb-8 max-w-2xl text-prime-white">
          Physiotherapy and home nursing services provided by the best
          specialists, for integrated and regular health care
        </p>
        <div className="flex space-x-4">
          <button className="bg-prime-white text-hover-button font-bold px-6 py-3 rounded-lg hover:bg-zinc-200">
            schedule an appointment
          </button>
        </div>
        <div className="mt-8">
          <HiArrowDown />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
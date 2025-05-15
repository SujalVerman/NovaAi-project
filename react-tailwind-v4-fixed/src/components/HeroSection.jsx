import React from "react";
import { hero } from "../utils/constant/data";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-indigo-50 to-green-50 py-20">
    <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">{hero.title}</h2>
        <p className="text-lg text-gray-600 mb-6">{hero.description}</p>
        <div className="flex justify-center lg:justify-start gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
            {hero.primaryCTA}
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:ring-1">
            {hero.secondaryCTA}
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img src={hero.image} alt="AI Demo" className="w-full max-w-sm drop-shadow-xl rounded-xl" />
      </div>
    </div>
  </section>
);

export default HeroSection;

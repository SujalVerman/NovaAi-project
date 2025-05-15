import React from "react";
import { features } from "../utils/constant/data";

const FeaturesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold text-black mb-8">Why NovaAI?</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-indigo-600 mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

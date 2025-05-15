import React from "react";
import renderComponent from "../utils/constant/renderComponent.jsx"; // ✅ Fixed import path and quote

const sections = [
  { type: "Header", props: {} },
  { type: "HeroSection", props: { title: "Welcome to NovaAI!" } },
  { type: "FeaturesSection", props: {} },
  { type: "TestimonialSection", props: {} },
  { type: "Footer", props: {} },
];

const HomePage = () => {
  return (
    <div className="font-sans bg-white text-blue-300">
      {sections.map((comp, index) => (
        <div key={index}>{renderComponent(comp)}</div>
      ))}
    </div>
  );
};

export default HomePage;

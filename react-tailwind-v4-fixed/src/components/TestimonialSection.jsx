import React from "react";
import { testimonial } from "../utils/constant/data";

const TestimonialSection = () => (
  <section className="py-16 bg-indigo-50">
    <div className="max-w-3xl mx-auto text-center px-6">
      <blockquote className="text-xl italic text-gray-900 font-bold mb-4">“{testimonial.quote}”</blockquote>
      <cite className="block text-sm text-gray-500 font-semibold">— {testimonial.author}</cite>
    </div>
  </section>
);

export default TestimonialSection;

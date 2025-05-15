import React from "react";
import {
  logo,
  nav,
  hero,
  features,
  testimonial,
  footerNote,
} from "../utils/constant/data";

const HomePage = () => {
  return (
    <div className="bg-white text-blue-300 font-sans justify-center min-h-screen overflow-y-scroll hide-scrollbar">
       {/* Navbar */}
     <header className="w-full py-3 shadow-md bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center gap-6">
    {/* Logo */}
    <h1 className="text-3xl font-extrabold text-indigo-600">
      {logo}
    </h1>

    {/* Navigation */}
    <nav className="hidden lg:flex gap-8 text-sm">
      {nav.map((item) => (
        <a
          key={item}
          href="#"
          className="text-indigo-600 hover:text-indigo-400 text-lg font-bold"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* CTA Button */}
    <button className="hidden md:inline-block font-semibold bg-indigo-600 text-white px-5 py-3 rounded-full text-sm hover:bg-indigo-700">
      {hero.primaryCTA}
    </button>
  </div>
</header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              {hero.title}
            </h2>
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
            <img
              src={hero.image}
              alt="AI Demo"
              className="w-full max-w-sm drop-shadow-xl rounded-xl"
            />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-black mb-8">Why NovaAI?</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <blockquote className="text-xl italic text-gray-900 font-bold mb-4">
            “{testimonial.quote}”
          </blockquote>
          <cite className="block text-sm text-gray-500 font-semibold">
            — {testimonial.author}
          </cite>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        {footerNote}
      </footer>
    </div>
  );
};

export default HomePage;

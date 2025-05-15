import React from "react";
import { logo, nav, hero } from "../utils/constant/data";

const Header = () => (
  <header className="w-full py-3 shadow-md bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center gap-6">
      <h1 className="text-3xl font-extrabold text-indigo-600">{logo}</h1>
      <nav className="hidden lg:flex gap-8 text-sm">
        {nav.map((item) => (
          <a key={item} href="#" className="text-indigo-600 hover:text-indigo-400 text-lg font-bold">
            {item}
          </a>
        ))}
      </nav>
      <button className="hidden md:inline-block font-semibold bg-indigo-600 text-white px-5 py-3 rounded-full text-sm hover:bg-indigo-700">
        {hero.primaryCTA}
      </button>
    </div>
  </header>
);

export default Header;

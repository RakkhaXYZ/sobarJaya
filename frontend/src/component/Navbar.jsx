import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-[95%] top-[5%] left-1/2 transform -translate-x-1/2 z-10 flex justify-between items-center p-4 rounded-full h-18 md:flex-row md:p-6">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-12 mr-2" />
        <div className="text-blue-600 text-2xl font-bold"></div>
      </div>

      {/* Menu List */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute md:relative md:flex md:space-x-6 text-[#22467d] text-xl font-semibold font-['Poppins'] top-16 left-0 md:top-0 md:left-0 bg-white w-full md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none rounded-md md:rounded-none`}
      >
        <li>
          <Link to="/" className="text-blue-600 font-semibold hover:text-blue-500">Profile</Link>
        </li>
        <li>
          <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/sejarah" className="text-blue-900 font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/kegiatan" className="text-blue-900 font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/artikel" className="text-blue-900 font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/hubungikami" className="text-blue-900 font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/tentang" className="text-blue-900 font-semibold hover:text-blue-500">Tentang Kami</a>
        </li>
      </ul>

      {/* Responsive Menu Button */}
      <button
        className="block md:hidden text-blue-600 text-xl font-semibold"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Cari..."
          className="w-32 h-[35px] p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="absolute right-0 top-0 mt-2">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"
            />
          </svg>
        </button>
      </div>

      <a href="/login">
        <div className="hidden md:flex items-center justify-center w-[84px] h-[35px] bg-[#22467d] rounded-[10px]">
          <span className="text-white text-base font-semibold font-['Poppins']">Login</span>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;

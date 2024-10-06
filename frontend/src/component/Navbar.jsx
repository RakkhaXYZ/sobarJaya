import React from 'react';
import Logo from '../img/pengeboran.jpg'; // Ganti dengan path logo Anda

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 shadow-md fixed w-full top-[5%] left-0 z-10 flex justify-between items-center p-4 rounded-full h-16">
      <div className="flex items-center">
        <img src={Logo} alt="Logo Perusahaan" className="h-10 mr-2" /> {/* Logo */}
        <div className="text-blue-600 text-2xl font-bold">Nama Perusahaan</div>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#profile" className="text-black font-bold hover:text-blue-600">Profile</a>
        </li>
        <li>
          <a href="#sejarah" className="text-black font-bold hover:text-blue-600">Sejarah</a>
        </li>
        <li>
          <a href="#kegiatan" className="text-black font-bold hover:text-blue-600">Kegiatan</a>
        </li>
        <li>
          <a href="#artikel" className="text-black font-bold hover:text-blue-600">Artikel</a>
        </li>
        <li>
          <a href="#hubungi-kami" className="text-black font-bold hover:text-blue-600">Hubungi Kami</a>
        </li>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari..."
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="absolute right-0 top-0 mt-2 mr-2">
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
    </nav>
  );
}

export default Navbar;

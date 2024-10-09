import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 shadow-md fixed w-full top-[5%] left-0 z-10 flex justify-between items-center p-4 rounded-full h-16">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-10 mr-2" /> 
        <div className="text-blue-600 text-2xl font-bold"></div>
      </div>
      <ul className="flex space-x-8 text-[#22467d] text-xl font-semibold font-['Poppins']">
        <li>
          <a href="/"className="text-gray-700 font-semibold hover:text-blue-500">Profile</a>
        </li>
        <li>
          <a href="/sejarah" target="_blank" className="text-gray-700 font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <a href="/kegiatan" className="text-gray-700 font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <a href="/artikel" className="text-gray-700 font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <a href="/hubungikami" className="text-gray-700 font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <a href="/tentang" className="text-gray-700 font-semibold hover:text-blue-500">Tentang Kami</a>
        </li>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari..."
          className="p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

import React from 'react';

import {Link} from "react-router-dom"
import Home from './home';


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-800 top-[5%] left-3 right-3 z-10 flex justify-between items-center p-4 rounded-full h-18">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-12 mr-2" /> 
        <div className="text-blue-600 text-2xl font-bold"></div>
      </div>
      <ul className="flex space-x-6 text-[#22467d] text-xl font-semibold font-['Poppins']">
        <li>
          <Link to="/" className="text-blue-600 font-semibold hover:text-blue-500">Profile</Link>
        </li>
        <li>
          <a href="" className="text-blue-900 font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/sejarah" className="text-blue-900 font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <a href="" className="text-blue-900 font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/kegiatan" className="text-blue-900 font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <a href="" className="text-blue-900 font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/artikel" className="text-blue-900 font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <a href="" className="text-blue-900 font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/hubungikami" className="text-blue-900 font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <a href="" className="text-blue-900 font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/tentang" className="text-blue-900 font-semibold hover:text-blue-500">Tentang Kami</a>
        </li>
      </ul>
      <div className="relative ">
        <input
          type="text"
          placeholder="Cari..."
          className=" w-32 h-[35px] p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-28"
        />
        <button className="absolute right-0 top-0 mt-2 mr-28">
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
      <a href="/login"><div className="absolute right-16 top-6 w-[84px] h-[35px] bg-[#22467d] rounded-[10px]"><div className=" absolute top-1 right-5 text-white text-base font-semibold font-['Poppins']">Login</div></div></a>

    </nav>
  );
}

export default Navbar;

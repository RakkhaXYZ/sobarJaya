import React from 'react';
import NavigationBar from './Navbar';  // Import Navbar
import Pengeboran from '../img/pengeboran.jpg';

export default function Home() {
  return (
    <>
      <div className="relative">
        <NavigationBar />
        <img
          src={Pengeboran}
          alt="Perusahaan"
          className="w-full h-auto object-cover"  // Membuat gambar memenuhi latar belakang
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Welcome to Nama Perusahaan</h1>
          <p className="text-lg text-white mt-4">We are committed to delivering the best services to our customers.</p>
        </div>
      </div>
    </>
  );
}

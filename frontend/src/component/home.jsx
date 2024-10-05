import React from 'react';
import NavigationBar from './Navbar';  // Import Navbar
import Pengeboran from '../img/pengeboran.jpg';  // Import gambar perusahaan

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Pengeboran})` }}
      >
        {/* Teks di atas gambar */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white">Welcome to Nama Perusahaan</h1>
          <p className="text-xl text-gray-200 mt-4">We are committed to delivering the best services to our customers.</p>
        </div>
      </div>
    </>
  );
}

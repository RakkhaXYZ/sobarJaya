import React from 'react';
import Navigator from './Navbar'; 
import Pengeboran from '../img/pengeboran.jpg';  // Import gambar perusahaan

const Home = ()=> {
  return (
    <>
      <Navigator />
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

export default Home;

import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Sejarah = ({ id = 4 }) => {
  const [sejarahDta, setSejarahDta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSejarah = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/showSejarah/4`);
        setSejarahDta(response.data);
      } catch (err) {
        setError('Data tidak ditemukan atau terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };
    fetchSejarah();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <BackToTop/>
      <header>
        <nav className="bg-blue-900 shadow-md fixed w-800 top-[3%] left-3 right-3 z-10 flex justify-between items-center p-4 rounded-full h-18">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-12 mr-2" />
            <div className="text-white text-2xl font-bold">CV. SOBAR JAYA</div>
          </div>
          <ul className="flex space-x-6 text-[#22467d] text-xl font-semibold font-['Poppins']">
            <li><a href="/" className="text-white font-semibold hover:text-blue-500">Profile</a></li>
            <li><a href="/sejarah" className="text-blue-600 font-semibold hover:text-blue-500">Sejarah</a></li>
            <li><a href="/kegiatan" className="text-white font-semibold hover:text-blue-500">Kegiatan</a></li>
            <li><a href="/artikel" className="text-white font-semibold hover:text-blue-500">Artikel</a></li>
            <li><a href="/hubungikami" className="text-white font-semibold hover:text-blue-500">Hubungi Kami</a></li>
            <li><a href="/tentang" className="text-white font-semibold hover:text-blue-500">Tentang Kami</a></li>
          </ul>
          <div className="relative">
            <input type="text" placeholder="Cari..." className="w-32 h-[35px] p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-28" />
            <button className="absolute right-0 top-0 mt-2 mr-28">
              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z" />
              </svg>
            </button>
          </div>
          <a href="/login">
            <div className="absolute right-16 top-6 w-[84px] h-[35px] bg-white rounded-[10px]">
              <div className="absolute top-1 right-5 text-blue-900 text-base font-semibold">Login</div>
            </div>
          </a>
        </nav>
      </header>
      
      <main className="container mx-auto my-5">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {sejarahDta ? (
            <>
              <img src={sejarahDta.foto} alt="Foto Sejarah" className="w-full" />
              <div className="p-6">
                <div className="text-[#3c3c3c] text-[40px] font-bold text-center">SEJARAH </div>
                <div className="w-[1206px] h-[283px] text-[#3c3c3c] text-[32px] font-medium">{sejarahDta.sejarah}</div>
              </div>
            </>
          ) : (
            <div>Data sejarah tidak tersedia.</div>
          )}
        </div>
      </main>
      
      <footer className="bg-blue-900 text-white p-9">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <img className="w-[77px] h-16" src="logo.png" alt="logo" />
            <div>
              <div className="text-white text-[42px] font-bold">CV. SOBAR JAYA</div>
              <div className="text-white text-xl font-semibold">ALAMAT: JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG, BANDUNG 40191 INDONESIA</div>
              <div className="text-white text-xl font-semibold">PHONE: +0123-4567-8910</div>
              <div className="text-white text-xl font-semibold">EMAIL: E.MAILKAMI@EMAIL.COM</div>
            </div>
          </div>
          <div className="flex-grow border-l border-white mx-8"></div>
          <div className="flex space-x-16">
            <div>
              <div className="text-white text-2xl font-bold">Company</div>
              <div className="text-white text-xl font-normal">Kegiatan</div>
              <div className="text-white text-xl font-normal">Tentang Kami</div>
              <div className="text-white text-xl font-normal">Sejarah</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold">Customer Service</div>
              <div className="text-white text-xl font-normal">Hubungi Kami</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold">Content</div>
              <div className="text-white text-xl font-normal">Artikel</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <p>Follow Us</p>
          <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="w-[1192.02px] h-[0px] border border-white mt-8"></div>
        <div className="mt-8 text-center">
          <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
        </div>
      </footer>
    </>
  );
};

export default Sejarah;

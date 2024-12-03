import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigator from "./Navbar";
import BackToTop from './BackToTop';


const Sejarah = ({ id = 2 }) => {
  const [sejarahDta, setSejarahDta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchSejarah = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/showSejarah/1`);
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
    <Navigator />
      <BackToTop/>
    


      <br />
      <br />
      <br />
      <br />
      <br />

      <main className="container mx-auto px-4 my-5">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {sejarahDta ? (
            <>
              <img src={sejarahDta.foto} alt="Foto Sejarah" className="w-full max-h-64 md:max-h-96 object-cover" />
              <div className="p-4 md:p-6">
                <div className="text-[#3c3c3c] text-xl md:text-[40px] font-bold text-center">
                  SEJARAH
                </div>
                <div className="text-[#3c3c3c] text-sm md:text-[32px] font-medium leading-relaxed md:leading-[1.5]">
  {sejarahDta.sejarah}
</div>

              </div>
            </>
          ) : (
            <div>Data sejarah tidak tersedia.</div>
          )}
        </div>
      </main>

      <footer className="bg-blue-900 text-white p-6 md:p-9">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex items-start">
            <img className="w-12 md:w-[77px] h-10 md:h-16" src="logo.png" alt="logo" />
            <div className="ml-4">
              <div className="text-lg md:text-[42px] font-bold">CV. SOBAR JAYA</div>
              <div className="text-sm md:text-xl font-semibold">
                ALAMAT: JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG, BANDUNG 40191 INDONESIA
              </div>
              <div className="text-sm md:text-xl font-semibold">PHONE: +0123-4567-8910</div>
              <div className="text-sm md:text-xl font-semibold">EMAIL: E.MAILKAMI@EMAIL.COM</div>
            </div>
          </div>
          <div className="flex-grow border-t md:border-l border-white mx-4 my-4 md:my-0"></div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
            <div>
              <div className="text-white text-lg md:text-2xl font-bold">Company</div>
              <div className="text-sm md:text-xl font-normal">Kegiatan</div>
              <div className="text-sm md:text-xl font-normal">Tentang Kami</div>
              <div className="text-sm md:text-xl font-normal">Sejarah</div>
            </div>
            <div>
              <div className="text-white text-lg md:text-2xl font-bold">Customer Service</div>
              <div className="text-sm md:text-xl font-normal">Hubungi Kami</div>
            </div>
            <div>
              <div className="text-white text-lg md:text-2xl font-bold">Content</div>
              <div className="text-sm md:text-xl font-normal">Artikel</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-4 space-x-4">
          <p>Follow Us</p>
          <a href="#" className="text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="w-full border-t border-white mt-4"></div>
        <div className="mt-4 text-center text-sm md:text-base">
          <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
        </div>
      </footer>
    </>
  );
};

export default Sejarah;

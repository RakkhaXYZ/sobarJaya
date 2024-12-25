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
        const response = await axios.get(`http://localhost:8000/api/showSejarah/2`);
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

      <footer>
        <div className="bg-blue-900 text-white p-9">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <img className="w-[77px] h-16" src="logo.png" alt="logo" />
              <div>
                <div className="text-white text-[42px] font-bold font-['Poppins'] ">
                  CV. SOBAR JAYA
                </div>
                <br />
                <div className="text-white text-xl font-semibold font-['Poppins']">
                  ALAMAT :JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                  <br />
                  BANDUNG 40191 INDONESIA
                </div>
                <div className="text-white text-xl font-semibold font-['Poppins']">
                  PHONE :<br />+ 0123-4567-8910
                </div>
                <div className="text-white text-xl font-semibold font-['Poppins']">
                  EMAIL :<br />
                  E.MAILKAMI@EMAIL.COM
                </div>
              </div>
            </div>
            <div className="flex-grow border-l border-white mx-8"></div>
            <div className="flex space-x-16">
              <div>
                <div className="text-white text-2xl font-bold font-['Poppins']">
                  Company
                </div>
                <br />
                <div className="text-white text-xl font-normal font-['Poppins']">
                  Kegiatan
                </div>
                <div className="text-white text-xl font-normal font-['Poppins']">
                  Tentang Kami
                </div>
                <div className="text-white text-xl font-normal font-['Poppins']">
                  Sejarah
                </div>
              </div>
              <div>
                <div className="text-white text-2xl font-bold font-['Poppins']">
                  Costumer Service
                </div>
                <br />
                <div className="text-white text-xl font-normal font-['Poppins']">
                  Hubungi Kami
                </div>
              </div>
              <div>
                <div className="text-white text-2xl font-bold font-['Poppins']">
                  Content
                </div>
                <br />
                <div className="text-white text-xl font-normal font-['Poppins']">
                  Artikel
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="flex items-right justify-end right-50 ">
            <input
              type="text"
              placeholder=" "
              className="p-2 rounded relative top-[-3rem]"
            ></input>
            <button className="bg-blue-700 p-2 rounded relative top-[-3rem] ">
              Cari
            </button>
          </div>
          <div className="flex justify-end mt-4 space-x-4">
            <p>Follow Us</p>
            <a href="#" className="text-white"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-white"><i class="fab fa-twitter"></i></a>
                    <a href="#" className="text-white"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="text-white"><i class="fab fa-youtube"></i></a>
          </div>
          <br></br>
          <div className="w-[1192.02px] h-[0px] border border-white"></div>
          <div className="mt-8 text-center">
            <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Sejarah;

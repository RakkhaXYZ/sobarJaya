import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigator from "./Navbar";
import BackToTop from "./BackToTop";

const Kegiatan = () => {
  const [kegiatanData, setKegiatanData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/kegiatan")
      .then((response) => {
        setKegiatanData(response.data.data);
      })
      .catch((error) => {
        console.log("Terjadi Error Saat Mengambil data kegiatan:", error);
      });
  }, []);

  return (
    <>
    <Navigator/>
      <BackToTop />
      

      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center mt-4">
        KEGIATAN
      </div>

      <div className="p-4">
        {kegiatanData.map((kegiatan) => (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <a href={`/kegiatan1/${kegiatan.id}`}>
              <div className="text-[#3c3c3c] text-4xl font-semibold font-['Poppins']">
                {kegiatan.judul}
              </div>
              <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">
                {kegiatan.deskripsi}
              </div>
            </a>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {kegiatan.fotoUrls.map((url, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={url}
                    alt="kegiatan1"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer>
        <div className="bg-blue-900 text-white p-9">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-start">
              <img className="w-[77px] h-16" src="logo.png" alt="logo" />
              <div>
                <div className="text-white text-[42px] font-bold font-['Poppins']">
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
            <div className="flex-grow border-t md:border-l border-white mt-8 md:mt-0"></div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 mt-8 md:mt-0">
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
          </div>
          <div className="flex justify-end mt-4 space-x-4">
            <p>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Kegiatan;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigator from "./Navbar";
import BackToTop from './BackToTop';

const Artikel = () => {
  const [artikels, setArtikel] = useState([]);
  const [artikel5, setArtikel5] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/Artikel')
      .then((response) => response.json())
      .then((data) => {
        setArtikel(data);
      })
      .catch((error) => {
        console.log('Error Fetching articles:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/api/getArtikel5')
      .then((response) => response.json())
      .then((data) => {
        setArtikel5(data);
      })
      .catch((error) => {
        console.log('Error Fetching articles:', error);
      });
  }, []);

  return (
    <>
      <Navigator />
      <BackToTop />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">ARTIKEL</div>
      <div className="flex flex-col lg:flex-row justify-center p-4">
        <div className="w-full lg:w-3/4">
          {artikels.map((artikel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col lg:flex-row">
              <img className="w-full lg:w-[234px] h-[173px] rounded-[20px] shadow" src={artikel.foto} alt={artikel.judul} />
              <div className="ml-0 lg:ml-4 w-full lg:w-3/4">
                <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">{artikel.judul}</div>
                <div className="w-full lg:w-[491px] text-[#3c3c3c] text-lg font-semibold font-['Poppins']">
                  {artikel.deskripsi}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center text-gray-500">
                    <i className="fas fa-user mr-2"></i>
                    <span>Admin</span>
                    <br />
                    <i className="fas fa-calendar-alt ml-4 mr-2"></i>
                    <span>{artikel.waktu_kegiatan}</span>
                  </div>
                  <Link to={`/artikel1/${artikel.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 font-bold rounded-lg">Selengkapnya</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/4 mt-4 lg:mt-0 lg:ml-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Artikel Lain</h3>
            <ul className="list-disc list-inside text-gray-600">
              {artikel5.map((artikel5, index) => (
                <Link to={`/artikel1/${artikel5.id}`} key={index}>
                  <li>{artikel5.judul}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white p-6 mt-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex items-start mb-6 lg:mb-0">
            <img className="w-[77px] h-16" src="logo.png" alt="logo" />
            <div className="ml-4">
              <div className="text-white text-[42px] font-bold font-['Poppins']">CV. SOBAR JAYA</div>
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
          <div className="flex-grow border-l border-white my-4 lg:mx-8"></div>
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-16">
            <div>
              <div className="text-white text-2xl font-bold font-['Poppins']">Company</div>
              <br />
              <div className="text-white text-xl font-normal font-['Poppins']">Kegiatan</div>
              <div className="text-white text-xl font-normal font-['Poppins']">Tentang Kami</div>
              <div className="text-white text-xl font-normal font-['Poppins']">Sejarah</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold font-['Poppins']">Customer Service</div>
              <br />
              <div className="text-white text-xl font-normal font-['Poppins']">Hubungi Kami</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold font-['Poppins']">Content</div>
              <br />
              <div className="text-white text-xl font-normal font-['Poppins']">Artikel</div>
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
        <br />
        <div className="w-full h-[1px] border border-white"></div>
        <div className="mt-8 text-center">
          <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
        </div>
      </footer>
    </>
  );
}

export default Artikel;

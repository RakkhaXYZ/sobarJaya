import React, { useEffect, useState } from "react";
import axios from "axios";

import Navigator from "./Navbar";
import background from "../img/bg.png";
import BackToTop from './BackToTop';

const Home = () => {
  const [profileData, setProfileData] = useState({});
  const [articles, setArticles] = useState([]);
  const [ourTeam, setOurTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, articlesRes, ourTeamRes] = await Promise.all([
          axios.get("http://localhost:8000/api/Profile/1"),
          axios.get("http://localhost:8000/api/NewArtikel"),
          axios.get("http://localhost:8000/api/newOurteam"),
        ]);
        setProfileData(profileRes.data);
        setArticles(articlesRes.data.data);
        setOurTeam(ourTeamRes.data.data);
      } catch (error) {
        setError("Terjadi kesalahan saat mengambil data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navigator />
      <BackToTop/>
    

      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute top-64 left-28 text-white">
          <h1 className="text-8xl font-bold">CV. SOBAR JAYA</h1>
          <p className="w-[508px] text-2xl font-bold mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.
          </p>
          <a
            href="/hubungikami"
            className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-bold"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="bg-blue-900 text-white py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-white text-[40px] font-bold font-['Poppins']">VISI</h2>
            <p className="w-[545px] text-white text-2xl font-bold font-['Poppins']">{profileData.visi}</p>
            <h2 className="w-[86px] text-white text-[40px] font-bold font-['Poppins']">MISI</h2>
            <p className="w-[560px] text-white text-base font-bold font-['Poppins']">{profileData.misi}</p>
          </div>
          <div>
            <img
              className="w-full h-auto shadow"
              src={profileData.foto_team}
              alt="Team"
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-2">
                    <div className="w-[58px] h-[9px] bg-[#22467d]"></div>
                    <span className="text-[#22467d] text-[32px] font-bold font-['Poppins'] ">ARTIKEL</span>
                </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={article.foto}
                    alt={article.judul}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{article.judul}</h3>
                    <p className="mt-2 text-gray-600">{article.deskripsi}</p>
                    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">
                      Selengkapnya
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>Tidak ada artikel.</p>
            )}
          </div>
        </div>
      </section>
      <br />
      <br />
      <div className="flex justify-start items-center space-x-2 ml-14">
                    <div className="w-[58px] h-[9px] bg-[#22467d]"></div>
                    <span className="text-[#22467d] text-[32px] font-bold font-['Poppins'] ">GALERI</span>
                </div>
                <br />
                <br />
      {/* Team Section */}
      <section className="bg-white py-9 px-4">
      <div className="flex justify-end items-center space-x-2 mr-2" >
                    <div className="w-[58px] h-[9px] bg-[#22467d]"></div>
                    <span className="text-[#22467d] text-[32px] font-bold font-['Poppins'] ">TIM KAMI</span>
                </div>
        <div className="flex justify-center items-center space-x-16 mt-8">
          {ourTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.foto}
                alt={member.nama_anggota}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4"
              />
             
              <h3 className="text-[#3c3c3c] text-[32px] font-bold font-['Poppins']">{member.nama_anggota}</h3>
              <hr className="w-[370px] h-[0px] border-8 border-[#3c3c3c]" />
              <p className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins']">{member.divisi_anggota}</p>
            </div>
          ))}
        </div>        
      </section>
      <br />
      <br />
      <section>
      <div className="flex justify-start items-center space-x-2 ml-14">
                    <div className="w-[58px] h-[9px] bg-[#22467d]"></div>
                    <span className="text-[#22467d] text-[32px] font-bold font-['Poppins'] ">KLIEN KAMI</span>
                </div>
                <div className="flex justify-center items-center bg-white">
                    <div className="flex space-x-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="klien1.png" alt="PLN logo" className="w-[269px] h-[269px]"/>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="klien2.png" alt="Waskita logo" className="w-[269px] h-[269px]"/>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="klien3.png" alt="PP Construction & Investment logo" className="w-[260px] h-[230px]"/>
                        </div>
                    </div>
                </div>
      </section>

      {/* Footer */}
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

export default Home;

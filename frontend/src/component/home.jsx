import React, { useEffect, useState } from "react";
import axios from "axios";

import Navigator from "./Navbar";
import background from "../img/bg.png";
import BackToTop from "./BackToTop";

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
      <BackToTop />

      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="text-white text-center md:text-left md:pl-10 lg:pl-28">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold">
            CV. SOBAR JAYA
          </h1>
          <p className="mt-4 text-md md:text-lg lg:text-2xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            ullamcorper.
          </p>
          <a
            href="/hubungikami"
            className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-bold text-sm md:text-base"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="bg-blue-900 text-white py-12 px-4 md:px-10 mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-white text-2xl md:text-[40px] font-bold font-['Poppins']">
              VISI
            </h2>
            <p className="text-white text-lg md:text-2xl font-bold font-['Poppins']">
              {profileData.visi}
            </p>
            <h2 className="text-white text-2xl md:text-[40px] font-bold font-['Poppins']">
              MISI
            </h2>
            <p className="text-white text-base md:text-lg lg:text-xl font-bold font-['Poppins']">
              {profileData.misi}
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto shadow object-contain"
              src={profileData.foto_team}
              alt="Team"
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-100 py-12 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="flex justify-start items-center space-x-2">
            <div className="w-[58px] h-[9px] bg-[#22467d]"></div>
            <span className="text-[#22467d] text-xl md:text-[32px] font-bold font-['Poppins']">
              ARTIKEL
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={article.foto}
                    alt={article.judul}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{article.judul}</h3>
                    <p className="mt-2 text-gray-600">{article.deskripsi}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-blue-500 hover:underline"
                    >
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
<<<<<<< HEAD
      <br />
      <br />
      <div className="flex justify-start items-center space-x-2 ml-14">
                    
                   
                </div>
                <br />
                <br />
                <section className="bg-white py-6 md:py-9 px-4">
  <h2 className="text-[#22467d] text-2xl md:text-3xl font-bold text-center">TENTANG KAMI</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
    {ourTeam.map((member, index) => (
      <div key={index} className="text-center">
        <img
          src={member.foto}
          alt={member.nama_anggota}
          className="w-20 md:w-48 h-20 md:h-48 rounded-full object-cover mx-auto mb-4"
        />
        <h3 className="text-[#3c3c3c] text-lg md:text-2xl font-bold">{member.nama_anggota}</h3>
        <p className="text-[#3c3c3c] text-sm md:text-xl">{member.divisi_anggota}</p>
      </div>
    ))}
  </div>
</section>
      <br />
      <br />
=======

>>>>>>> 74d8793f62623a0703b9e41c476e89b73e1692fd
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

      {/* Team Section */}
<<<<<<< HEAD
   
=======
      <section className="bg-white py-6 md:py-9 px-4">
        <h2 className="text-[#22467d] text-2xl md:text-3xl font-bold text-center mb-8">
          OUR TEAM
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {ourTeam.map((member, index) => (
            <div
              key={index}
              className="text-center mx-auto w-[180px] sm:w-[200px] md:w-[220px] lg:w-[260px]"
            >
              <img
                src={member.foto}
                alt={member.alt}
                className="rounded-full w-full h-auto object-cover"
              />
              <h3 className="text-[#3c3c3c] text-lg md:text-xl font-bold">
                {member.nama_anggota}
              </h3>
              <p className="text-[#3c3c3c] text-sm md:text-base font-medium">
                {member.divisi_anggota}
              </p>
            </div>
          ))}
        </div>
      </section>
>>>>>>> 74d8793f62623a0703b9e41c476e89b73e1692fd

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 md:p-9 text-sm md:text-base">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-start">
            <img
              className="w-[60px] h-12 md:w-[77px] md:h-16"
              src="logo.png"
              alt="logo"
            />
            <div>
              <h3 className="text-xl md:text-2xl lg:text-[42px] font-bold">
                CV. SOBAR JAYA
              </h3>
              <p>ALAMAT: JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG</p>
              <p>BANDUNG 40191 INDONESIA</p>
              <p>PHONE: + 0123-4567-8910</p>
              <p>EMAIL: E.MAILKAMI@EMAIL.COM</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

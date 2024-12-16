import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigator from "./Navbar";
import BackToTop from "./BackToTop";

const TentangKami = () => {
  const [ourTeams, setOurTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ourteam")
      .then((response) => {
        console.log("Data yang diterima:", response.data.data);
        setOurTeams(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi error saat mengambil data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navigator />
      <BackToTop />

      <br />
      <br />
      <br />
      <br />
      <div className="p-6 justify text-center">
        <div className="text-[#3c3c3c] text-[32px] sm:text-[40px] font-bold font-['Poppins'] text-center">
          TENTANG KAMI
        </div>
        <br />
        <div className="w-full sm:w-[1230px] text-[#3c3c3c] text-[24px] sm:text-[32px] font-medium font-['Poppins'] mx-auto">
          Sobar jaya berdiri sejak tahun 1981 oleh ir. Mukini manan sebagai
          geologist yang berpengalaman di bidangnya. Diawali dari konsultan
          sederhana hingga akhirnya memiliki sarana, prasarana dan tenaga kerja
          yang kompeten. Disahkan pada 7 Desember 2013 oleh notaris dan PPAT di
          Kota Bandung sebagai CV. Sobar Jaya.
        </div>
      </div>

      <br />
      <div>
        <div className="text-[#3c3c3c] text-[32px] sm:text-[40px] font-bold font-['Poppins'] text-center">
          TIM KAMI
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-16 mt-8 gap-8">
        {ourTeams.map((member, index) => (
          <div key={index} className="text-center w-full sm:w-[250px]">
            <div className="w-[200px] h-[200px] mx-auto mb-4">
              <img
                src={member.foto}
                alt={member.nama_anggota || "Team Member"}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="text-[#3c3c3c] text-[20px] sm:text-[32px] font-bold font-['Poppins']">
              {member.nama_anggota}
            </div>
            <div className="w-[374px] h-[0px] border-2 border-[#3c3c3c] mx-auto my-2"></div>
            <div className="text-[#3c3c3c] text-[24px] sm:text-[40px] font-bold font-['Poppins']">
              {member.divisi_anggota}
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
      {ourTeams.map((member, index) =>
        member.our_team2 && member.our_team2.length > 0 ? (
          member.our_team2.map((team2, index2) => (
            <div className="relative" key={team2.id}>
              <img
                src={team2.foto_anggota}
                alt={member.nama_anggota || "Team Member"}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8 bg-black bg-opacity-50">
                <div className="flex justify-end">
                  <div className="w-full sm:w-[653px] text-white text-[20px] sm:text-[3xl] font-bold font-['Poppins']">
                    "{member.quetes || "No quote available"}"
                  </div>
                </div>
                <div className="flex flex-col items-start left-3">
                  <div className="text-white text-[32px] sm:text-[40px] font-bold font-['Poppins']">
                    {member.nama_anggota}
                  </div>
                  <div className="w-[374px] h-[0px] border-8 border-white mx-auto my-2"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No team members available</p>
        )
      )}

      <br />
      <div>
        <img
          src="quotes4.jpg"
          alt="penasihat"
          className="w-full h-auto object-cover"
        />
      </div>
      <br />

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
            <a href="#" className="text-white">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white">
              <i class="fab fa-youtube"></i>
            </a>
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

export default TentangKami;

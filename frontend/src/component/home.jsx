import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackToTop from './BackToTop';
import Navigator from './Navbar';
import background from '../img/bg.png';

const Home = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Profile/1');
        setProfileData(response.data);
      } catch (error) {
        setError('Terjadi Kesalahan saat mengambil data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const teamMembers = [
    { name: "Muhardika, S.T", title: "Direktur", image: "dika.png", alt: "photo" },
    { name: "Muhammad Sobar, S.T", title: "Wakil Direktur", image: "sobar.png", alt: "Photo" },
    { name: "Ir. Mukini Manan, M. Eng", title: "Penasehat", image: "mukini.png", alt: "photo" }
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navigator />
      <BackToTop />
      
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute top-64 left-28 text-white">
          <h1 className="text-8xl font-bold">CV. SOBAR JAYA</h1>
          <p className="w-[508px] text-2xl font-bold mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.</p>
          <a href="/hubungikami" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full">
            <span className="font-bold">CONTACT US</span>
          </a>
        </div>
      </div>

      <section className="bg-blue-900 text-white py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">VISI</h2>
            <p className="w-[545px] text-2xl font-bold mt-2">{profileData.visi}</p>
            <h2 className="text-4xl font-bold mt-6">MISI</h2>
            <p className="w-[560px] font-bold mt-2">{profileData.misi}</p>
          </div>
          <div>
            <img className="w-full h-full shadow" src="visi2.png" alt="Visi Misi Perusahaan" />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 justify-end mb-8">
            <div className="w-20 h-3 bg-blue-900"></div>
            <h2 className="text-2xl font-bold text-[#22467d]">ARTIKEL</h2>
          </div>
         
        </div>
      </section>

      <section className="bg-white py-9 px-4">
        <div className="flex items-center space-x-3">
          <div className="w-20 h-3 bg-blue-900"></div>
          <h2 className="text-2xl font-bold text-[#22467d]">GALERI</h2>
        </div>

      </section>

      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#22467d]">TENTANG KAMI</h2>
        </div>
        <div className="flex justify-center items-center space-x-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-[200px] h-[200px] mx-auto mb-4">
                <img src={member.image} alt={member.alt} className="rounded-full w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#3c3c3c]">{member.name}</h3>
              <hr className="w-[100px] border-2 border-[#3c3c3c] mx-auto my-2" />
              <p className="text-lg font-bold text-[#3c3c3c]">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
                    <div className="bg-blue-900 text-white p-9">
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                        <img className="w-[77px] h-16" src="logo.png" alt="logo"/>                            
                        <div>
                        <div className="text-white text-[42px] font-bold font-['Poppins'] ">CV. SOBAR JAYA</div> 
                        <br />                              
                                <div className="text-white text-xl font-semibold font-['Poppins']">ALAMAT :JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                                <br/>BANDUNG 40191 INDONESIA</div>
                                <div className="text-white text-xl font-semibold font-['Poppins']">PHONE :<br/>+ 0123-4567-8910</div>
                                <div className="text-white text-xl font-semibold font-['Poppins']">EMAIL :<br/>E.MAILKAMI@EMAIL.COM</div>
                            </div>
                        </div>
                        <div className="flex-grow border-l border-white mx-8"></div>
                        <div className="flex space-x-16">
                            <div>
                            <div className="text-white text-2xl font-bold font-['Poppins']">Company</div>
                            <br />
                            <div className="text-white text-xl font-normal font-['Poppins']">Kegiatan</div>
                            <div className="text-white text-xl font-normal font-['Poppins']">Tentang Kami</div>
                            <div className="text-white text-xl font-normal font-['Poppins']">Sejarah</div>
                            </div>
                            <div>
                            <div className="text-white text-2xl font-bold font-['Poppins']">Costumer Service</div>
                            <br />
                            <div className="text-white text-xl font-normal font-['Poppins']">Hubungi Kami</div>
                            </div>
                            <div>
                            <div className="text-white text-2xl font-bold font-['Poppins']">Content</div>
                            <br />
                            <div className="text-white text-xl font-normal font-['Poppins']">Artikel</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                       
                    </div>
                    <div className="flex items-right justify-end right-50 ">
                            <input type="text" placeholder=" " className="p-2 rounded relative top-[-3rem]">
                            </input>
                            <button className="bg-blue-700 p-2 rounded relative top-[-3rem] ">Cari
                           
                            </button>
                        </div>
                    <div className="flex justify-end mt-4 space-x-4">
                        <p>Follow Us</p>
                          <a href="#" className="text-white"><i class="fab fa-facebook-f"></i></a>
                          <a href="#" className="text-white"><i class="fab fa-twitter"></i></a>
                          <a href="#" className="text-white"><i class="fab fa-instagram"></i></a>
                          <a href="#" className="text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                    <br>
                        </br>
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

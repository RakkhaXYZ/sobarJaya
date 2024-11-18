import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackToTop from './BackToTop';
import Navigator from './Navbar';
import background from '../img/bg.png';

const Home = () => {
  const [profileData, setProfileData] = useState({});
  const [articles, setArticles] = useState([]);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [error, setError] = useState(null);

  // Fetch profile data
=======
  const [ourTeam, setOurTeam ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingOurTeam, setLoadingOurTeam] = useState(true);
  const [error, setError] = useState(null);

>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get('http://localhost:8000/api/Profile/1');
        setProfileData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data');
=======
        const profileResponse = await axios.get('http://localhost:8000/api/Profile/1');
        setProfileData(profileResponse.data);
        setLoading(false);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data profil');
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

<<<<<<< HEAD
  // Fetch articles data
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/NewArtikel');
        setArticles(response.data.data);
=======
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesResponse = await axios.get('http://localhost:8000/api/NewArtikel');
        setArticles(articlesResponse.data.data);
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
        setLoadingArticles(false);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data artikel');
        setLoadingArticles(false);
      }
    };
    fetchArticles();
  }, []);

<<<<<<< HEAD
  if (loading || loadingArticles) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const teamMembers = [
    { name: 'Muhardika, S.T', title: 'Direktur', image: 'dika.png', alt: 'photo' },
    { name: 'Muhammad Sobar, S.T', title: 'Wakil Direktur', image: 'sobar.png', alt: 'photo' },
    { name: 'Ir. Mukini Manan, M. Eng', title: 'Penasehat', image: 'mukini.png', alt: 'photo' },
  ];
=======
  useEffect(() => {
    const fetchOurTeam = async () => {
        try {
            const ourTeamResponse = await axios.get('http://localhost:8000/api/newOurteam');
            setOurTeam(ourTeamResponse.data.data);
            setLoadingOurTeam(false);
        
        } catch(error){
            setError('terjadi kesalahan saat mengambil data our team');
            setLoadingOurTeam(false);
        }
    };
    fetchOurTeam();
  }, []);

  if (loading || loadingArticles || loadingOurTeam) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1

  return (
    <>
      <Navigator />
      <BackToTop />

<<<<<<< HEAD
      {/* Background Image Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
=======
      {/* Background and Intro Section */}
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}>
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
        <div className="absolute top-64 left-28 text-white">
          <h1 className="text-8xl font-bold">CV. SOBAR JAYA</h1>
          <p className="w-[508px] text-2xl font-bold mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.
          </p>
<<<<<<< HEAD
          <a href="/hubungikami" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full">
            <span className="font-bold">CONTACT US</span>
=======
          <a href="/hubungikami" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-bold">
            CONTACT US
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {/* Vision & Mission Section */}
=======
      {/* Profile Section */}
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
      <section className="bg-blue-900 text-white py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">VISI</h2>
<<<<<<< HEAD
            <p className="mt-4 text-2xl">{profileData.visi}</p>
            <h2 className="mt-8 text-4xl font-bold">MISI</h2>
            <p className="mt-4">{profileData.misi}</p>
          </div>
          <div>
            <img className="w-[661px] h-[391px] shadow" src={profileData.foto_team} alt="Team" />
=======
            <p className="mt-4 text-2xl font-bold">{profileData.visi}</p>
            <h2 className="text-4xl font-bold mt-6">MISI</h2>
            <p className="mt-4 text-lg font-bold">{profileData.misi}</p>
          </div>
          <div>
            <img className="w-full h-auto shadow" src={profileData.foto_team} alt="Team" />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#22467d] text-3xl font-bold text-right">ARTIKEL</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={article.foto} alt={article.judul} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{article.judul}</h3>
                    <p className="mt-2 text-gray-600">{article.deskripsi}</p>
                    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Selengkapnya</a>
                  </div>
                </div>
              ))
            ) : (
              <p>Tidak ada artikel.</p>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-9 px-4">
        <h2 className="text-[#22467d] text-3xl font-bold text-center">TENTANG KAMI</h2>
        <div className="flex justify-center items-center space-x-16 mt-8">
          {ourTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.foto} alt={`${member.nama_anggota}'s photo`} className="w-48 h-48 rounded-full object-cover mx-auto mb-4" />
              <h3 className="text-[#3c3c3c] text-2xl font-bold">{member.nama_anggota}</h3>
              <p className="text-[#3c3c3c] text-xl">{member.divisi_anggota}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-8">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <img className="w-20 h-20" src="logo.png" alt="logo" />
            <div className="ml-4">
              <h2 className="text-3xl font-bold">CV. SOBAR JAYA</h2>
              <p className="mt-4">Alamat: JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG BANDUNG 40191 INDONESIA</p>
              <p>Phone: +0123-4567-8910</p>
              <p>Email: E.MAILKAMI@EMAIL.COM</p>
            </div>
          </div>
          <div className="flex-grow border-l border-white mx-8"></div>
          <div className="flex space-x-16">
            <div>
              <h3 className="text-xl font-bold">Company</h3>
              <p>Kegiatan</p>
              <p>Tentang Kami</p>
              <p>Sejarah</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Customer Service</h3>
              <p>Hubungi Kami</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Content</h3>
              <p>Artikel</p>
            </div>
>>>>>>> abb1cce8c61f5f8c06687a48195176a7e6b936d1
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 justify-end">
            <div className="w-20 h-3 bg-blue-900"></div>
            <h2 className="text-3xl font-bold text-[#22467d]">ARTIKEL</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={article.foto} alt={article.judul} className="w-full h-48 object-cover" />
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

      {/* Gallery Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 justify-end">
            <div className="w-20 h-3 bg-blue-900"></div>
            <h2 className="text-3xl font-bold text-[#22467d]">GALERI</h2>
          </div>
          <div className="mt-8">
            <img
              className="w-full h-[556px] rounded-[20px] shadow-lg object-cover"
              src="kegiatan3.jpeg"
              alt="Gallery"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 justify-end">
            <div className="w-20 h-3 bg-blue-900"></div>
            <h2 className="text-3xl font-bold text-[#22467d]">TENTANG KAMI</h2>
          </div>
          <div className="flex justify-center items-center space-x-16 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-[200px] h-[200px] mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#3c3c3c]">{member.name}</h3>
                <div className="w-[374px] h-0.5 bg-[#3c3c3c] my-4"></div>
                <p className="text-2xl font-bold text-[#3c3c3c]">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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

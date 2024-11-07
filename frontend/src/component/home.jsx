import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackToTop from './BackToTop';
import Navigator from './Navbar';
import background from '../img/bg.png';

const Home = () => {
  const [profileData, setProfileData] = useState({});
  const [articles, setArticles] = useState([]);
  const [ourTeam, setOurTeam ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArticles, setLoadingArticles] = useState(true);
  const [loadingOurTeam, setLoadingOurTeam] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get('http://localhost:8000/api/Profile/1');
        setProfileData(profileResponse.data);
        setLoading(false);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data profil');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesResponse = await axios.get('http://localhost:8000/api/NewArtikel');
        setArticles(articlesResponse.data.data);
        setLoadingArticles(false);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data artikel');
        setLoadingArticles(false);
      }
    };
    fetchArticles();
  }, []);

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

  

  return (
    <>
      <Navigator />
      <BackToTop />

      {/* Background and Intro Section */}
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute top-64 left-28 text-white">
          <h1 className="text-8xl font-bold">CV. SOBAR JAYA</h1>
          <p className="w-[508px] text-2xl font-bold mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.
          </p>
          <a href="/hubungikami" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-bold">
            CONTACT US
          </a>
        </div>
      </div>

      {/* Profile Section */}
      <section className="bg-blue-900 text-white py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">VISI</h2>
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

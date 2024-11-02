import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BackToTop from './BackToTop';
import Navigator from './Navbar';
import background from '../img/bg.png';

const Home = () => {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

<<<<<<< HEAD
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
=======
const Home = ()=> {
    const [profileData, setProfileData] = useState([]);
    const [articles, setArticles] = useState ([]);
    const [loadingArticles, setLoadingArticles] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
>>>>>>> c5fd7c6ff7ea84571eb263f66c5a850cfa33d68a

  const teamMembers = [
    { name: "Muhardika, S.T", title: "Direktur", image: "dika.png", alt: "photo" },
    { name: "Muhammad Sobar, S.T", title: "Wakil Direktur", image: "sobar.png", alt: "Photo" },
    { name: "Ir. Mukini Manan, M. Eng", title: "Penasehat", image: "mukini.png", alt: "photo" }
  ];

<<<<<<< HEAD
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

=======
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Profile/1');
                setProfileData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Terjadi Kesalahan saat mengambil data');
                setLoading(false);                
            }
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/NewArtikel');
                setArticles(response.data.data);
                setLoadingArticles(false);
            }catch(error){
                setError('Terjadi kesalahan saat mengambil data artikel');
                setLoadingArticles(false);
            }
        };
        fetchArticles();
    }, []);

    if(loading || loadingArticles ){
        return <div>Loading....</div>
    }

    if(error){
        return <div>{error}</div>
    }

    if(!profileData){
        return <div>Data tidak ditemukan</div>
    }
    const teamMembers = [
        {
            name: "Muhardika, S.T",
            title: "Direktur",
            image: "dika.png",
            alt: "photo"
        },
        {
            name: "Muhammad Sobar, S.T",
            title: "Wakil Direktur",
            image: "sobar.png",
            alt: "Photo"
        },
        {
            name: "Ir. Mukini Manan, M. Eng",
            title: "Penasehat",
            image: "mukini.png",
            alt: "photo"
        }
    ];
    
>>>>>>> c5fd7c6ff7ea84571eb263f66c5a850cfa33d68a
  return (
    <>
      <Navigator />
      <BackToTop />
<<<<<<< HEAD
      
      <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${background})` }}></div>
=======
      <div
        className=" h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${baground})` }}
      >
        <br />        
                            <div className="absolute top-64 left-28">
                            <div className="text-white text-8xl font-bold font-['Poppins']">CV. SOBAR JAYA</div>                                
                            <div className="w-[508px] text-white text-2xl font-bold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.</div>                            
                            <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-full flex items-center">
                            <a href="/hubungikami"><span><div className="font-bold">CONTACT US</div></span></a>
                            <a href="/hubungikami"><i className="fas fa-arrow-right ml-2"></i></a>
                        </button>
                            </div>
                     </div>   
                        <section className="bg-blue-900 text-white py-12 px-10 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                <div>
                                    <div className="text-white text-[40px] font-bold font-['Poppins']">VISI</div>
                                    <div className="w-[545px] text-white text-2xl font-bold font-['Poppins']">{profileData.visi}</div>
                                    <div className="w-[86px] text-white text-[40px] font-bold font-['Poppins']">MISI</div>
                                    <div className="w-[560px] text-white text-base font-bold font-['Poppins']">{profileData.misi} </div>
                                    </div>
                                <div>
                                    <img className="w-[661px] h-[391px] shadow" src={profileData.foto_team} />
                                    </div>
                                    
                            </div>
                        </section>
                        <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-4 justify-end">
                    <div className="w-20 h-3 bg-blue-900"></div>
                    <div className="ml-auto text-[#22467d] text-[32px] font-bold font-['Poppins']">ARTIKEL</div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles && articles.length > 0 ? (
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
                <section>
                    <div className="bg-white py-9 px-4">
                    <div className="flex items-center space-x-3">
                    <div className="w-20 h-3 bg-blue-900"></div>
                    <div className="text-[#22467d] text-[32px] font-bold font-['Poppins']">GALERI</div>
                </div>
                    <br />
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-[1206px] h-[556px] rounded-[20px] img-center" src="kegiatan3.jpeg" />
                        </div>
                    </div> <div className="flex items-center space-x-3 justify-end">
                    <div className="w-20 h-3 bg-blue-900"></div>
                    <div className="text-[#22467d] text-[32px] font-bold font-['Poppins']">TENTANG KAMI</div>
                </div>
                </section>
                <section>
               
                    <div className="flex justify-center items-center space-x-16 mt-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="w-[200px] h-[200px] mx-auto mb-4">
                                <img src={member.image} alt={member.alt} className="rounded-full w-full h-full object-cover" />
                            </div>
                            <div className="text-[#3c3c3c] text-[32px] font-bold font-['Poppins']">{member.name}</div>
                            <div className="w-[374px] h-[0px] border-2 border-[#3c3c3c]"></div>
                            <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins']">{member.title}</div>
                        </div>
                    ))}
                    
                </div>
                </section>
                <br />
                <br />
                
                <footer>
        <div class="bg-blue-900 text-white p-8">
            <div class="flex justify-between items-start">
                <div class="flex items-start">
                    <img class="w-[77px] h-16" src="logo.png" alt="logo"/>                            
                    <div>
                        <div class="text-white text-[42px] font-bold font-['Poppins']">CV. SOBAR JAYA</div> 
                        <br />                              
                        <div class="text-white text-xl font-semibold font-['Poppins']">ALAMAT :JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                        <br/>BANDUNG 40191 INDONESIA</div>
                        <div class="text-white text-xl font-semibold font-['Poppins']">PHONE :<br/>+ 0123-4567-8910</div>
                        <div class="text-white text-xl font-semibold font-['Poppins']">EMAIL :<br/>E.MAILKAMI@EMAIL.COM</div>
                    </div>
                </div>
                <div class="flex-grow border-l border-white mx-8"></div>
                <div class="flex space-x-16">
                    <div>
                        <div class="text-white text-2xl font-bold font-['Poppins']">Company</div>
                        <br />
                        <div class="text-white text-xl font-normal font-['Poppins']">Kegiatan</div>
                        <div class="text-white text-xl font-normal font-['Poppins']">Tentang Kami</div>
                        <div class="text-white text-xl font-normal font-['Poppins']">Sejarah</div>
                    </div>
                    <div>
                        <div class="text-white text-2xl font-bold font-['Poppins']">Costumer Service</div>
                        <br />
                        <div class="text-white text-xl font-normal font-['Poppins']">Hubungi Kami</div>
                    </div>
                    <div>
                        <div class="text-white text-2xl font-bold font-['Poppins']">Content</div>
                        <br />
                        <div class="text-white text-xl font-normal font-['Poppins']">Artikel</div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
>>>>>>> c5fd7c6ff7ea84571eb263f66c5a850cfa33d68a

      <div className="absolute top-64 left-28 text-white">
        <h1 className="text-8xl font-bold">CV. SOBAR JAYA</h1>
        <p className="w-[508px] text-2xl font-bold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.
        </p>
        <a href="/hubungikami" className="mt-6 inline-block px-6 py-3 bg-blue-900 text-white rounded-full">
          <span className="font-bold">CONTACT US</span>
        </a>
      </div>

      {}

      <footer>
        <div className="bg-blue-900 text-white p-9">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <img className="w-[77px] h-16" src="logo.png" alt="logo" />
              <div>
                <div className="text-white text-[42px] font-bold font-['Poppins']">CV. SOBAR JAYA</div>
                <br />
                <div className="text-white text-xl font-semibold font-['Poppins']">
                  ALAMAT : JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG <br /> BANDUNG 40191 INDONESIA
                </div>
                <div className="text-white text-xl font-semibold font-['Poppins']">PHONE :<br />+ 0123-4567-8910</div>
                <div className="text-white text-xl font-semibold font-['Poppins']">EMAIL :<br />E.MAILKAMI@EMAIL.COM</div>
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
          <div className="w-full h-[0px] border border-white my-4"></div>
          <div className="mt-8 text-center">
            <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Navigator from './Navbar'; 
import baground from '../img/bg.png';

const Home = ()=> {
    const [profileData, setProfileData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fungsi untuk mengaambil data dari api laravel

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

    if(loading){
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
  return (
    <>
      <Navigator />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${baground})` }}
      >
        <div className="absolute top-0 left-0 w-16 h-16 bg-white"></div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-left">
                            <div className="text-white text-8xl font-bold font-['Poppins']">CV. SOBAR JAYA</div>                                
                            <div className="w-[508px] text-white text-2xl font-bold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ullamcorper.</div>                            
                            </div>
         </div>
         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
                              <a href="ig.png" className="block w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <i className="fab fa-instagram text-black" />
                              </a>
                              <a href="#" className="block w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <i className="fab fa-youtube text-black" />
                              </a>
                              <a href="#" className="block w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                <i className="fab fa-facebook text-black" />
                              </a>
                            </div>
                            
                        
                           
                        <section className="bg-blue-900 text-white py-12 px-10 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                <div>
                                    <div className="text-white text-[40px] font-bold font-['Poppins']">VISI</div>
                                    <div className="w-[545px] text-white text-2xl font-bold font-['Poppins']">{profileData.visi}</div>
                                    <div className="w-[86px] text-white text-[40px] font-bold font-['Poppins']">MISI</div>
                                    <div className="w-[560px] text-white text-base font-bold font-['Poppins']">{profileData.misi}</div>
                                    </div>
                                <div>
                                    <img className="w-[661px] h-[391px] shadow" src="visi2.png" />
                                    </div>
                            </div>
                        </section>
                        <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-right text-blue-900">--ARTIKEL</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://ilmutambang.com/wp-content/uploads/2022/04/Pelajari-Yuk-6-Metode-Pengeboran-di-Industri-Pertambangan.jpg" alt="Article Image" className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                                    <p className="mt-2 text-gray-600">{profileData.team.deskripsi_team}</p>
                                    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://ilmutambang.com/wp-content/uploads/2022/04/Pelajari-Yuk-6-Metode-Pengeboran-di-Industri-Pertambangan.jpg" alt="Article Image" className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam nec.</p>
                                    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Selengkapnya</a>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src="https://ilmutambang.com/wp-content/uploads/2022/04/Pelajari-Yuk-6-Metode-Pengeboran-di-Industri-Pertambangan.jpg" alt="Article Image" className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam nec.</p>
                                    <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Selengkapnya</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-white py-9 px-4">
                    <h2 className="text-2xl font-bold text-left text-blue-900">--GALERI</h2>
                    <br />
                      <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img className="w-[1206px] h-[556px] rounded-[20px] img-center" src="kegiatan3.jpeg" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="bg-white py-4 px-4">
                    <h2 className="text-2xl font-bold text-right text-blue-900">--TENTANG KAMI</h2>
                    </div>
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
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
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
}

export default Home;

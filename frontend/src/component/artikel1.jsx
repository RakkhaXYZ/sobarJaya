import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Artikel1 = ()=> {
  const {artikelId} = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredarticles] = useState([]);
  const [artikel, setArtikel]= useState(null);
  const [artikel5, setArtikel5]= useState([]);
  const [isLoaded, setIsLoaded]= useState(false);
  const [error, setError]= useState(null);

  useEffect (() => {
    if(!isLoaded){
      fetch(`http://localhost:8000/api/artikel/${artikelId}`)
      .then((response)=> {
        if (!response.ok) {
          throw new Error("Data tidak ditemukan");
        }
        return response.json();
      })
      .then((data) => {
        setArtikel(data.data);
        setIsLoaded(true);
       
      })
    .catch((error) => {
      setError(error.message);
      
    });

    }
  

 
  }, [artikelId, isLoaded]);

  useEffect(() => {
    fetch('http://localhost:8000/api/getArtikel5')
    .then((response) => {
      if (!response.ok){
        throw new Error("Data tidak ditemukan");
      }
      return response.json();
    })
    .then((data) =>{
      setArtikel5(data);
    })
    .catch((error) => {
      setError(error.message);
    });
  },[]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 2){
    axios.get(`http://localhost:8000/api/searchArtikel?query=${event.target.value}`)
    .then(response => {
      const articles = response.data;
      setFilteredarticles(articles);
      
      // if(articles.length === 0){
      //   setError('artikel tidak ditemukan');

      // }else{
      //   setError(null);
      // }
    })
    .catch(error => console.error(error));
  } else {
    setFilteredarticles([]);
  
  }
};
  

  if (error) return <p>{error}</p>

  if(!artikel) return <p>Data artikel tidek ditemukan</p>

 

    return (
      <>
        <header>
         <nav className="bg-blue-900 shadow-md fixed w-800 top-[3%] left-3 right-3 z-10 flex justify-between items-center p-4 rounded-full h-18">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-12 mr-2" /> 
        <div className="text-white text-2xl font-bold"></div>
      </div>
      <ul className="flex space-x-6 text-[#22467d] text-xl font-semibold font-['Poppins']">
        <li>
          <a href="/" className="text-white font-semibold hover:text-blue-500">Profile</a>
        </li>
        <li>
          <a href="" className="text-white font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/sejarah" className="text-white font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <a href="" className="text-white font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/kegiatan" className="text-white font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <a href="" className="text-white font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/artikel" className="text-blue-600 font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <a href="" className="text-white font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/hubungikami" className="text-white font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <a href="" className="text-white font-semibold hover:text-blue-500">|</a>
        </li>
        <li>
          <a href="/tentang" className="text-white font-semibold hover:text-blue-500">Tentang Kami</a>
        </li>
      </ul>
      <div className="relative ">
        <input
          type="text"
          placeholder="Cari..."
          className=" w-32 h-[35px] p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-28"
        />
        <button className="absolute right-0 top-0 mt-2 mr-28">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"
            />
          </svg>
        </button>
      </div>
      <a href="/login"><div className="absolute right-16 top-6 w-[84px] h-[35px] bg-white rounded-[10px]"><div className=" absolute top-1 right-5 text-blue-900 text-base font-semibold font-['Poppins']">Login</div></div></a>
    </nav>
    </header>
    <br />
    <br />
    <br />
<br />
            <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        <div className="text-[#3c3c3c] text-xl font-semibold font-['Poppins']">Artikel</div>
                            <div className="text-[#3c3c3c] text-[32px] font-semibold font-['Poppins']">{artikel.judul}</div>
                            <div className="flex items-center text-gray-600 mb-4">
                                <i className="fas fa-user mr-2"></i> Admins
                                <i className="fas fa-calendar-alt ml-4 mr-2"></i>{artikel.waktu_kegiatan}
                                <i className="fas fa-eye ml-4 mr-2"></i> Dibaca {artikel.dibaca} Kali
                            </div>
                            <img src={artikel.foto} alt="Construction workers at a drilling site" className="rounded mb-4"/>
                            <p className="text-gray-700 mb-4">
                               {artikel.deskripsi.toLowerCase()} </p>
                           
                        </div>
                     
                        <div className="w-30 ml-4">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Artikel Lain</h3>
                            <div className="mb-4">
                                <input type="text" placeholder="Cari" value={searchQuery} onChange={handleSearch} className="w-full p-2 border border-gray-300 rounded"/>
                            </div>
                           
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-lg">
                            <ul className="space-y-4">

                            
                               
                              
                            {(filteredArticles.length > 0 ? filteredArticles : artikel5).map((atk5, index)=>(
                               <li key={index} className="flex items-center">
                               <img src={atk5.foto} alt="Thumbnail of another article" className="w-20 h-auto rounded-lg mr-4"/>
                               <div>
                                   <h3 className="text-sm font-bold">{atk5.judul}</h3>
                                   <div className="text-gray-600 text-xs">
                                       <i className="fas fa-user mr-1"></i> Admins
                                       <i className="fas fa-calendar-alt ml-2 mr-1"></i>{atk5.waktu_kegiatan}
                                   </div>
                               </div>
                           </li>
                                 

                                ))}
                                {filteredArticles.length === 0 && searchQuery.length > 2 && (
                                  <p className='text-red-500 text-sm mt-2'>Artikel Tidak Ditemukan</p>
                                )}
                               
                            </ul>
                        </div>
                    </div>
                       
                    </div>
                </div>
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
                            <input type="text" placeholder=" " className="p-2 rounded relative top-[-3rem]" />
                            
                            <button className="bg-blue-700 p-2 rounded relative top-[-3rem] ">Cari</button>
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
  }
  
  
  export default Artikel1;
  
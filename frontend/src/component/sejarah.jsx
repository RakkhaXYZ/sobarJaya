import React, {useState, useEffect} from 'react';
import axios from 'axios';




const Sejarah = ()=> {
  const [sejarahDta, setSejarahDta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSejarah = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/showSejarah/1');
        setSejarahDta(response.data);
      } catch (err) {
        setError('Data tidak ditemukan atau terjadi kesalahan');
      } finally {
        setLoading(false);
      }
    };
    fetchSejarah();
  }, []);

  if (loading){
    return <div>Loading...</div>
  }

  if (error){
    return <div>(error)</div>
  }

  return (
    <>
    <header>
         <nav className="bg-blue-900 shadow-md fixed w-800 top-[3%] left-3 right-3 z-10 flex justify-between items-center p-4 rounded-full h-16">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-12 mr-2" /> 
        <div className="text-white text-2xl font-bold"></div>
      </div>
      <ul className="flex space-x-8 text-[#22467d] text-xl font-semibold font-['Poppins']">
        <li>
          <a href="/" className="text-white font-semibold hover:text-blue-500">Profile</a>
        </li>
        <li>
          <a href="/sejarah" className="text-blue-600 font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <a href="/kegiatan" className="text-white font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <a href="/artikel" className="text-white font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <a href="/hubungikami" className="text-white font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <a href="/tentang" className="text-white font-semibold hover:text-blue-500">Tentang Kami</a>
        </li>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari..."
          className="p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="absolute right-0 top-0 mt-2 mr-2">
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
    </nav>
    </header>
    <br />
    <br />
    <br />
    <br />
                    <main className="container mx-auto my-5">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden ">
                          {sejarahDta && (
                            <>
                           <img src={`http://localhost:8000/storage/sejarah/${sejarahDta.foto}`} alt="Foto Sejarah" className="w-full"/>
                           <div className="p-6">
                                <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">SEJARAH</div>  
                                                        
                                  <div className="w-[1206px] h-[283px] text-[#3c3c3c] text-[32px] font-medium font-['Poppins']">{sejarahDta.sejarah}</div>                            
                                
                                  <div>Data sejarah tidak tersedia.</div>
                              
                                </div>
                            
                            </>
                          )}
                            
                                </div>
                                </main>
                                <footer>

                                </footer>
                                </>
  );
};
                
          

 
export default Sejarah;

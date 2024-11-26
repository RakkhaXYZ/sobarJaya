import React from 'react';
const Kegiatan1 = ()=> {
    return (
      <>
      <header>
         <nav className="bg-blue-900 shadow-md fixed w-800 top-[3%] left-3 right-3 z-10 flex justify-between items-center p-4 rounded-full h-18">
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-12 mr-2" /> 
        <div className="text-white text-2xl font-bold"></div>
      </div>
      <ul className="flex space-x-6 text-[#22467d] text-xl font-semibold font-['Poppins']">
        <li>
          <a href="/" className="text-white font-semibold hover:text-blue-500">Profile</a>
        </li>
        <li>
        <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/sejarah" className="text-white font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
        <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/kegiatan" className="text-blue-600 font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
        <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/artikel" className="text-white font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
        <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
        </li>
        <li>
          <a href="/hubungikami" className="text-white font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
        <div className="text-blue-900 font-semibold hover:text-blue-500">|</div>
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
          <br />
                    <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">KEGIATAN</div>
                    <footer className="bg-blue-900 text-white py-12">
                <div className="text-center mt-4">
                            <div className="flex justify-center space-x-2">
                                <span className="h-8 w-8 bg-white rounded-full inline-block"></span>
                                <span className="h-8 w-8 bg-white rounded-full inline-block"></span>
                                <span className="h-8 w-8 bg-white rounded-full inline-block"></span>
                            </div>
                        </div>
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between">
                            <div>
                                <div className="text-white text-[32px] font-bold font-['Poppins']">CV. SOBAR JAYA</div>                               
                                <div className="text-white text-xl font-semibold font-['Poppins']">ALAMAT :JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                                <br/>BANDUNG 40191 INDONESIA</div>
                                <div className="text-white text-xl font-semibold font-['Poppins']">PHONE :<br/>+ 0123-4567-8910</div>
                                <div className="text-white text-xl font-semibold font-['Poppins']">EMAIL :<br/>E.MAILKAMI@EMAIL.COM</div>
                                    </div>
                            <div>
                                <h3 className="text-white text-xl font-medium font-['Poppins']"></h3>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="/" className="hover:underline">Profile</a></li>
                                    <li><a href="/sejarah" className="hover:underline">Sejarah</a></li>
                                    <li><a href="/kegiatan" className="hover:underline">Kegiatan</a></li>
                                    <li><a href="/artikel" className="hover:underline">Artikel</a></li>
                                    <li><a href="/hubungikami" className="hover:underline">Hubungi Kami</a></li>
                                    <li><a href="/tentang" className="hover:underline">Tentang Kami</a></li>
                                </ul>
                                <br></br>
                                <img className="w-[77px] h-16" src="logo.png" alt="logo"/>                            </div>
                            
                        </div>
                        <br>
                        </br>
                        <div className="w-[1192.02px] h-[0px] border border-white"></div>
                        <div className="mt-8 text-center">
                            <p>Copyright 2024 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </footer>  
      </>
            
  
    );
  }
  
  export default Kegiatan1;
  
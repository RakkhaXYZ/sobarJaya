import React from 'react';

const hubungikami = ()=> {
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
          <a href="/sejarah" className="text-white font-semibold hover:text-blue-500">Sejarah</a>
        </li>
        <li>
          <a href="/kegiatan" className="text-white font-semibold hover:text-blue-500">Kegiatan</a>
        </li>
        <li>
          <a href="/artikel" className="text-white font-semibold hover:text-blue-500">Artikel</a>
        </li>
        <li>
          <a href="/hubungikami" className="text-blue-600 font-semibold hover:text-blue-500">Hubungi Kami</a>
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
    <div className="p-6 justify text-center">
                    <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">LOKASI KAMI</div>
                    <br />
              </div>
              <div>             
              <img className="w-[1376px] h-[465px]" src="denah.jpg" /> 
              </div>
              <br />
              <div className="flex justify-center items-center h-screen">
                    <div className="bg-blue-900 text-white p-8 rounded-lg w-1/2">
                        <h2 className="text-2xl font-bold mb-6">HUBUNGI KAMI</h2>
                        <form>
                            <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded-lg text-black" />
                            <input type="text" placeholder="Subject" className="w-full p-3 mb-4 rounded-lg text-black" />
                            <textarea placeholder="Description" className="w-full p-3 mb-4 rounded-lg text-black h-32"></textarea>
                            <button type="submit" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold">SUBMIT</button>
                        </form>
                    </div>
                    <div className="ml-8 p-8 bg-white rounded-lg shadow-lg w-1/3">
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <i className="fas fa-map-marker-alt text-blue-900 mr-2"></i>
                                <div className="w-[474px] text-[#3c3c3c] text-xl font-semibold font-['Poppins']">JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                                <br/>KOTA BANDUNG 40191, JAWA BARAT INDONESIA</div>                            </div>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-phone-alt text-blue-900 mr-2"></i>
                                <div className="text-[#3c3c3c] text-xl font-semibold font-['Poppins']">+ 0123-4567-8910</div>                            </div>
                            <div className="flex items-center mb-2">
                                <i className="fas fa-envelope text-blue-900 mr-2"></i>
                                <div className="text-[#3c3c3c] text-xl font-semibold font-['Poppins']">SOBARBORJAYA@GMAIL.COM</div>                            </div>
                        </div>
                        <div className="flex mb-4">
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 mr-2">
                                <i className="fab fa-google text-red-500 mr-2"></i>
                                EMAIL KAMI
                            </button>
                            <button className="flex items-center bg-green-500 text-white rounded-lg px-4 py-2">
                                <i className="fab fa-whatsapp mr-2"></i>
                                WHATSAPP KAMI
                            </button>
                        </div>
                        <img src="quotes4.jpg" alt="tim" className="rounded-lg" />
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

export default hubungikami;

import React from 'react';

const Artikel = ()=> {
  return (
    <>
       <header className="bg-blue-900 text-white py-4">
                        <div className="container mx-auto flex justify-between items-center">
                            <img src="logo.png" alt="Company Logo" className="h-10 mr-2"/>
                            <nav>
                                <ul className="flex space-x-6">
                                    <li><a href="/" className="hover:underline">Profile</a></li>
                                    <li><a href="/sejarah" className="hover:underline">Sejarah</a></li>
                                    <li><a href="/kegiatan" className="hover:underline">Kegiatan</a></li>
                                    <li><a href="/artikel" className="hover:underline">Artikel</a></li>
                                    <li><a href="/hubungikami" className="hover:underline">Hubungi Kami</a></li>
                                    <li><a href="/tentang" className="hover:underline">Tentang Kami</a></li>
                                </ul>
                            </nav>
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
                        </div>
                    </header>   
                    <br />
                    <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">ARTIKEL</div>
                    <div className="flex justify-center p-4">
                    <div className="w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
                            <img className="w-[234px] h-[173px] rounded-[20px] shadow" src="kegiatan2.png" />
                                <div className="ml-4 w-3/4">
                                <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">PENGERJAAN BOR INTI PLTA PADANG ARO</div>
                                <div className="w-[491px] text-[#3c3c3c] text-lg font-semibold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante ante, malesuada vel felis in, dapibus dictum est. Donec scelerisque egestas mauris, sit amet aliquet nibh blandit fringilla....</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center text-gray-500">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            <span>Jumat</span>
                                            <i className="fas fa-user ml-4 mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
                            <img className="w-[234px] h-[173px] rounded-[20px] shadow" src="kegiatan2.png" />
                                <div className="ml-4 w-3/4">
                                <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">PENGERJAAN BOR INTI PLTA PADANG ARO</div>
                                <div className="w-[491px] text-[#3c3c3c] text-lg font-semibold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante ante, malesuada vel felis in, dapibus dictum est. Donec scelerisque egestas mauris, sit amet aliquet nibh blandit fringilla....</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center text-gray-500">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            <span>Jumat</span>
                                            <i className="fas fa-user ml-4 mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
                            <img className="w-[234px] h-[173px] rounded-[20px] shadow" src="kegiatan2.png" />
                                <div className="ml-4 w-3/4">
                                <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">PENGERJAAN BOR INTI PLTA PADANG ARO</div>
                                <div className="w-[491px] text-[#3c3c3c] text-lg font-semibold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante ante, malesuada vel felis in, dapibus dictum est. Donec scelerisque egestas mauris, sit amet aliquet nibh blandit fringilla....</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center text-gray-500">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            <span>Jumat</span>
                                            <i className="fas fa-user ml-4 mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">See More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex">
                            <img className="w-[234px] h-[173px] rounded-[20px] shadow" src="kegiatan2.png" />
                                <div className="ml-4 w-3/4">
                                <div className="text-[#3c3c3c] text-2xl font-semibold font-['Poppins']">PENGERJAAN BOR INTI PLTA PADANG ARO</div>
                                <div className="w-[491px] text-[#3c3c3c] text-lg font-semibold font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante ante, malesuada vel felis in, dapibus dictum est. Donec scelerisque egestas mauris, sit amet aliquet nibh blandit fringilla....</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center text-gray-500">
                                            <i className="fas fa-calendar-alt mr-2"></i>
                                            <span>Jumat</span>
                                            <i className="fas fa-user ml-4 mr-2"></i>
                                            <span>Admin</span>
                                        </div>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">See More</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    <div className="w-1/4 ml-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-lg font-bold mb-4">Artikel Lain</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                                <li>Gunung Sari Street Color</li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                                    <li><a href="#" className="hover:underline">Profile</a></li>
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

export default Artikel;

import React from 'react';

const TentangKami = ()=> {
  
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
];return (
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
          <a href="/hubungikami" className="text-white font-semibold hover:text-blue-500">Hubungi Kami</a>
        </li>
        <li>
          <a href="/tentang" className="text-blue-600 font-semibold hover:text-blue-500">Tentang Kami</a>
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
                    <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">TENTANG KAMI</div>
                    <br />

                    <div className="w-[1230px] right-[20px] h-[300px] text-[#3c3c3c] text-[32px] font-medium font-['Poppins']">Sobar jaya berdiri sejak tahun 1981 oleh ir. Mukini manan sebagai geologist yang berpengalaman di bidangnya. Diawali dari konsultan sederhana hingga akhirnya memikili sarana, prasarana dan tenaga kerja yang kompeten. Disahkan pada 7 desember 2013 oleh notaris dan ppat di kota bandung sebagai cv. Sobar Jaya.</div>                            
              </div>
              <br />
              <div>
              <div className="text-[#3c3c3c] text-[40px] font-bold font-['Poppins'] text-center">TIM KAMI</div>
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
                <br />
                <br />
                <div>
                <img className="w-[1400px] h-[800px] shadow" src="quotes1.JPG" />
                <br />
                <img className="w-[1400px] h-[822px]" src="quotes2.JPG" />
                <br />
                <img className="w-[1400px] h-[822px]" src="quotes3.JPG" />
                <br />
                <img className="w-[1400px] h-[822px]" src="quotes4.JPG" />
                <br />
                </div>
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

export default TentangKami;

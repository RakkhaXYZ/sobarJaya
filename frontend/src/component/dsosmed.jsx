import React, { useState } from 'react';

const Dsosmed = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f4f6f9]">
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-4/5 lg:w-1/5 bg-[#22467d] h-screen p-2 transition-transform duration-300 z-50`}
      >
        <a href="/dashboardadmin" className="flex items-center justify-center text-white text-2xl font-semibold font-['Poppins'] mt-4 mb-6">
          DASHBOARD
        </a>
        <nav>
          <ul>
            {[
              { href: '/dartikel', imgSrc: 'Artikel.png', label: 'Artikel' },
              { href: '/dgaleri', imgSrc: 'Gambar.png', label: 'Galeri' },
              { href: '/dkegiatan', imgSrc: 'SKegiatan.png', label: 'Kegiatan' },
              { href: '/dtentangkami', imgSrc: 'Tentang Kami.png', label: 'Tentang Kami' },
              { href: '/dsosmed', imgSrc: 'Sosial Media.png', label: 'Sosial Media' },
              { href: '/dkomentar', imgSrc: 'Skomentar.png', label: 'Komentar' },
            ].map((item, index) => (
              <li
                key={index}
                className="mb-4 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer"
              >
                <a href={item.href} className="flex items-center">
                  <img src={item.imgSrc} alt={item.label} className="w-6 h-6 mr-3" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className="mt-12 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
              <img src="Keluar.png" alt="Keluar" className="w-6 h-6 mr-3" />
              <a href="#">Keluar</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="w-[1090px] h-[107px] bg-white shadow p-2">
        <header className="flex justify-between items-center mb-4 bg-white shadow w-full lg:w-[1350px] h-[100px] px-6 py-2">
          <div className="flex items-center">
            <img src="logo.png" className="w-[87px] h-[72px] mr-3" alt="Logo" />
            <h1 className="text-[#22467d] text-3xl lg:text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
          {/* Tombol Toggle Sidebar untuk layar kecil */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
        </header>
        <section className="bg-[#f4f6f9] p-4 rounded ">
          <div className="flex">
            <div className="w-1/3">
              <div className="bg-[#22467d] text-white text-2xl font-semibold font-['Poppins'] p-2 mb-4 w-[304px] h-[43px]">Media Sosial</div>
              <ul>
                <a href="/dsosmed"><li className="bg-[#22467d] text-[#ffffff] text-xl font-semibold font-['Poppins'] p-2 mb-2 w-[304px] h-[43px]"><i className="fab fa-facebook mr-2"></i>Facebook</li></a>
                <li><div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                <a href="/dsosmed1"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2"><i className="fab fa-twitter mr-2"></i>Twitter X</li></a>
                <li><div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                <a href="/dsosmed2"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2 p-2 mb-2"><i className="fab fa-youtube mr-2"></i>Youtube</li></a>
                <li><div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                <a href="/dsosmed3"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2 p-2 mb-2"><i className="fab fa-instagram mr-2"></i>Instagram</li></a>
                <li><div className="w-[300px] h-[2px] bg-gray-300"></div></li>
              </ul>
            </div>
            <div className="w-2/3 pl-6">
              <div className="text-black text-xl font-semibold font-['Poppins']">Url / Link</div>
              <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-[516px] h-[37px]" />
              <br />
              <br />
              <button className="justify-end bg-[#22467d] text-white p-2 rounded text-[20px] font-semibold font-['Poppins']">Simpan</button>
            </div>
          </div>
        </section>
        <br />

        <footer className="mt-6 text-center text-gray-600">
          <div className="flex justify-start space-x-20 ">
            <div className="w-[1300px] h-[2px] bg-gray-300"></div>
          </div>
          <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
        </footer>
      </main>
    </div>
  );
};

export default Dsosmed;

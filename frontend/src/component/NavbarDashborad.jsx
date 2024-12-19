import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navItems = [
    { to: '/dartikel', imgSrc: '/Artikel.png', label: 'Artikel' },
    { to: '/dgaleri', imgSrc: '/Gambar.png', label: 'Galeri' },
    { to: '/dkegiatan', imgSrc: '/SKegiatan.png', label: 'Kegiatan' },
    { to: '/dtentangkami', imgSrc: '/Tentang%20Kami.png', label: 'Tentang Kami' },
    { to: '/dsosmed', imgSrc: '/Sosial%20Media.png', label: 'Sosial Media' },
    { to: '/dkomentar', imgSrc: '/Skomentar.png', label: 'Komentar' },
  ];

  return (
    <aside
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed left-0 top-0 w-4/5 lg:w-1/5 bg-[#22467d] h-full p-4 transition-transform duration-300 z-50`}
    >
     <a href="/dashboardadmin">
          <div className="flex items-center text-white text-xl font-semibold font-['Poppins']">
            <div className="w-[380px] h-[102px] bg-[#22467d] shadow">
              <div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">
                DASHBOARD
              </div>
            </div>
          </div>
        </a>
<br />
<br />
<br />
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="mb-6 flex items-center px-4 text-white text-xl font-['Poppins'] hover:bg-blue-700 cursor-pointer"
            >
              <Link to={item.to} className="flex items-center">
                <img src={item.imgSrc} alt={item.label} className="w-6 h-6 mr-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          
          ))}
          <br />
          <br />
          <li className="mt-12 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
            <img src="/Keluar.png" alt="Keluar" className="w-6 h-6 mr-5" />
            <a href="#">Keluar</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

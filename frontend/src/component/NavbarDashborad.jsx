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
      <div className="flex items-center justify-center text-white text-3xl font-semibold font-['Poppins'] mt-4 mb-6">
        DASHBOARD
      </div>

      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="mb-4 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer"
            >
              <Link to={item.to} className="flex items-center">
                <img src={item.imgSrc} alt={item.label} className="w-6 h-6 mr-3" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li className="mt-12 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
            <img src="/Keluar.png" alt="Keluar" className="w-6 h-6 mr-3" />
            <a href="#">Keluar</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

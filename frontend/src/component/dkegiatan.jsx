import React, { useState } from 'react';

const Dkegiatan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex bg-[#f4f6f9]">
    {/* Sidebar */}
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

    <main className="flex-grow ml-[20%] h-screen w-screen p-2"> 
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
      <br />

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <a href="/dtambahkegiatan">
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-plus mr-2"></i> Tambah Kegiatan
              </button>
            </a>
            <a href="/dhapusartikel">
              <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-start space-x-10 ">
          <div className="w-[1300px] h-[1px] bg-black"></div>
        </div>
        <br />
        <div className="flex justify-between mb-4">
          <select className="border p-2 rounded">
            <option>Semua</option>
            {/* Add other options as needed */}
          </select>
          <div className="flex items-center border rounded px-2">
            <input type="text" placeholder="Cari" className="p-2 outline-none" />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div>
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2"><input type="checkbox" /></th>
                <th className="border p-2">No</th>
                <th className="border p-2">Aksi</th>
                <th className="border p-2">Judul</th>
                <th className="border p-2">Dilihat</th>
                <th className="border p-2">Tanggal posting</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2"><input type="checkbox" /></td>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-6">
                      <a href=""><img src="edit.png" alt="" /></a>
                      <a href=""><img src="hapus.png" alt="" /></a>
                      <a href=""><img src="tutup komentar.png" alt="" /></a>
                      <a href=""><img src="favorit.png" alt="" /></a>
                      <a href=""><img src="pratinjau.png" alt="" /></a>
                    </div>
                  </td>
                  <td className="border p-2">Pengembangan Bisnis PTA Padang Aro</td>
                  <td className="border p-2">1029 Kali Dilihat</td>
                  <td className="border p-2">01 Januari 2024 12:03:12</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div>
            Tampilkan 
            <select className="border ml-2 p-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            Dari 25 total data
          </div>
          <div className="flex space-x-1">
            <button className="border px-2 py-1">Awal</button>
            <button className="border px-2 py-1">1</button>
            <button className="border px-2 py- 1">2</button>
            <button className="border px-2 py-1">3</button>
            <button className="border px-2 py-1">Akhir</button>
          </div>
        </div>
      </div>
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

export default Dkegiatan;

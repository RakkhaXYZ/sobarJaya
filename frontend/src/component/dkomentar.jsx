import React, { useState } from 'react';

const Dkomentar = () => {
    
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f4f6f9]">
<<<<<<< HEAD
    <aside className="w-1/5 bg-[#22467d] h-screen p-2 fixed">
      <a href="/dashboardadmin">
        <div className="flex items-center text-white text-xl font-semibold font-['Poppins'] ">
          <div className="w-[380px] h-[102px] bg-[#22467d] shadow">
            <div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">DASHBOARD</div>
          </div>
        </div>
      </a>
      <br />
      <nav>
        <ul>
        <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
           <a href="/dartikel"><img src="Artikel.png" className="mr-4"/></a>
           <a href="/dartikel"><span>Artikel</span></a>
         </li>
     <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins'] ">
           <a href="/dgaleri"><img src="Gambar.png" className="mr-4" /></a>
           <a href="/dgaleri"><span>Galeri</span></a>
         </li>
         <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
           <a href="/dkegiatan"><img src="SKegiatan.png" className="mr-3" /></a>
           <a href="/dkegiatan"><span>Kegiatan</span></a>
         </li>
         <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
           <a href="/dtentangkami"><img src="Tentang Kami.png" className="mr-4" /></a>
           <a href="/dtentangkami"><span>Tentang Kami</span></a>
         </li>
         <li className="mb-6 flex items-center justify-start text-white text-xl  font-['Poppins']">
           <a href="/dsosmed"><img src="Sosial Media.png" className="mr-7" /></a>
           <a href="/dsosmed"><span>Sosial Media</span></a>
         </li>
         <li className="mb-6 flex items-center justify-start  text-[#22467d] font-bold text-xl  font-['Poppins'] bg-white w-[261px] h-[72px]">
           <a href="/dkomentar"><img src="Komentar biru.png" className="mr-5" /></a>
           <a href="/dkomentar"><span>Komentar</span></a>
         </li>
         <li className="mt-24 flex items-center justify-start text-white text-xl  font-['Poppins']">
           <img src="Keluar.png" className="mr-6" />
           <a href=""><span>Keluar</span></a>
         </li>
        </ul>
      </nav>
    </aside>
    <main className="flex-grow ml-[20%] h-screen w-screen p-2">
    <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
          <div className="flex items-center ">
            <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]" />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
          <a href="/profilMasterAdmin"><div className="w-[58px] h-[58px] relative">
            <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
            <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
            <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
          </div></a>
=======
    <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-4/5 lg:w-1/5 bg-[#22467d] h-screen p-4 transition-transform duration-300 z-50`}
      >
        {/* Header untuk Sidebar */}
        <div className="flex items-center justify-center text-white text-3xl font-semibold font-['Poppins'] mt-4 mb-6">
          DASHBOARD
        </div>

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
              <li key={index} className="mb-4 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
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
            <h1 className="text-[#22467d] text-2xl lg:text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>

          {/* Tombol Toggle untuk Sidebar pada layar kecil */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
>>>>>>> 3d209bac89e70b89eed63619fc1b4bc621519689
        </header>
        
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <a href="">
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
                  <th className="border p-2">Pengirim</th>
                  <th className="border p-2">Isi Komentar</th>
                  <th className="border p-2">Email Pengirim</th>
                  <th className="border p-2">Judul Artikel</th>
                  <th className="border p-2">Aktif</th>
                  <th className="border p-2">Tanggal Posting</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2"><input type="checkbox" /></td>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">
                      <div className="flex justify-center space-x-1">
                        <a href=""><img src="hapus.png" alt="" /></a>
                        <a href=""><img src="tutup komentar.png" alt="" /></a>
                      </div>
                    </td>
                    <td className="border p-2">Fulan bin Fulan</td>
                    <td className="border p-2">Wow sangat mengesankan</td>
                    <td className="border p-2">fulanbinfulan@gmail.com</td>
                    <td className="border p-2">Pengerjaan Bor Inti PLTA Padang Aro</td>
                    <td className="border p-2">YA</td>
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
        <div className="flex justify-start  space-x-20 ">
                    <div className="w-[1300px] h-[2px] bg-gray-300"></div>
                </div>
            <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
        </footer>
    </main>
</div>
  );
};

export default Dkomentar;

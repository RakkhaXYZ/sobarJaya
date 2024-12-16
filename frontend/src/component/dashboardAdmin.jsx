import React, { useState } from 'react';
import Sidebar from './NavbarDashborad.jsx';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

<<<<<<< HEAD
       <br />
       <nav>
         <ul>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl font-['Poppins'] ">
             <a href="/dartikel"><img src="Artikel.png" className="mr-4"/></a>
             <a href="/dartikel"><span>Artikel</span></a>
           </li>
       <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl font-['Poppins']  ">
             <a href="/dgaleri"><img src="Gambar.png" className="mr-4" /></a>
             <a href="/dgaleri"><span>Galeri</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dkegiatan"><img src="SKegiatan.png" className="mr-3" /></a>
             <a href="/dkegiatan"><span>Kegiatan</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-7 text-white text-xl  font-['Poppins']">
             <a href="/dtentangkami"><img src="Tentang Kami.png" className="mr-4" /></a>
             <a href="/dtentangkami"><span>Tentang Kami</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dsosmed"><img src="Sosial Media.png" className="mr-7" /></a>
             <a href="/dsosmed"><span>Sosial Media</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dkomentar"><img src="Skomentar.png" className="mr-5" /></a>
             <a href="/dkomentar"><span>Komentar</span></a>
           </li>
           <li className="mt-24 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <img src="Keluar.png" className="mr-6" />
             <a href="/"><span>Keluar</span></a>
           </li>
         </ul>
       </nav>
     </aside>
     <main className="flex-grow ml-[20%] h-screen w-screen p-2 "> 
       <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
         <div className="flex items-center ">
           <img src="logo.png" className="mr-2 w-[87px] h-[72px]" />
           <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
         </div>
         <a href="/profilMasterAdmin"><div className="w-[58px] h-[58px] relative">
           <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
           <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
           <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
         </div></a>
       </header>
    
                  
       <br />
       <footer className="mt-6 text-center text-gray-600">
         <div className="flex justify-start space-x-20 ">
           <div className="w-[1300px] h-[2px] bg-gray-300"></div>
         </div>
         <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
       </footer>
     </main>
</div>
=======
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f4f6f9] min-h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Konten Utama */}
      <main
        className={`flex-grow transition-all duration-300 h-screen bg-white p-6 ${
          isSidebarOpen ? 'ml-[20%]' : 'ml-[0%]'
        }`}
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-4 bg-white shadow w-full h-[100px] px-6 py-2">
          <div className="flex items-center">
            <img src="logo.png" className="w-[87px] h-[72px] mr-3" alt="Logo" />
            <h1 className="text-[#22467d] text-2xl lg:text-3xl font-semibold font-['Poppins']">
              CV. SOBAR JAYA
            </h1>
          </div>

          {/* Tombol Toggle untuk Sidebar pada layar kecil */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
        </header>

        {/* Bagian Konten Dinamis */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Selamat Datang di Dashboard!</h2>
          <p className="text-gray-700 mb-4">
            Gunakan panel di sisi kiri untuk mengakses fitur dan informasi terkait.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#f1f5f9] p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Statistik Pengguna</h3>
              <p className="text-sm text-gray-600 mt-2">
                Total pengguna: <span className="font-bold">1,234</span>
              </p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Artikel Baru</h3>
              <p className="text-sm text-gray-600 mt-2">
                Total artikel: <span className="font-bold">56</span>
              </p>
            </div>
            <div className="bg-[#f1f5f9] p-6 rounded shadow">
              <h3 className="text-lg font-semibold">Aktivitas Terbaru</h3>
              <p className="text-sm text-gray-600 mt-2">Lihat aktivitas pengguna terkini.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-600 text-sm py-4 border-t border-gray-200">
          Copyright &copy; 2023 CV. SOBAR JAYA Bandung
        </footer>
      </main>
    </div>
>>>>>>> 3d209bac89e70b89eed63619fc1b4bc621519689
  );
};

export default Dashboard;

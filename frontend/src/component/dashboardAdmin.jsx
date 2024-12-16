import React, { useState } from 'react';
import Sidebar from './NavbarDashborad.jsx';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dkomentar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [komentar, setKomentar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getPesan")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setKomentar(response.data.data);
        } else {
          throw new Error("Data yang diterima tidak valid.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Gagal memuat data komentar.");
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="flex bg-[#f4f6f9] min-h-screen">
      {/* Sidebar with responsiveness */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main
        className={`flex-grow transition-all duration-300 h-screen bg-white p-6 lg:ml-[20%] ${
          isSidebarOpen ? "ml-[20%]" : "ml-0"
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

          {/* Toggle Button for Mobile Sidebar */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </header>
        {/* Table or other content */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">box</th>
                <th className="border p-2">NO</th>
                <th className="border p-2">Aksi</th>
                <th className="border p-2">Email Pengirim</th>
                <th className="border p-2">Subject </th>
                <th className="border p-2">Deskripsi</th>
                <th className="border p-2">Tanggal Posting</th>
              </tr>
            </thead>
            <tbody>
                {komentar.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">
                      <div className="flex justify-center space-x-1">
                        <a href={`/hapuskomentar/${item.id}`}>
                          <img
                            src="hapus.png"
                            alt="Hapus"
                            title="Hapus Komentar"
                          />
                        </a>
                        <a href={`/kirim pesan/${item.id}`}>
                          <img
                            src="kirim.png"
                            alt="Kirim Pesan"
                            title="Kirim Pesan"
                            width={30} height={30}
                          />
                        </a>
                      </div>
                    </td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.subject}</td>
                    <td className="border p-2">{item.description}</td>
                    <td className="border p-2">
                      {item.tanggal
                        ? new Date(item.tanggal).toLocaleString()
                        : "Tidak tersedia"}
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-600 text-sm py-4 border-t border-gray-200">
          Copyright &copy; 2023 CV. Sobar Jaya Bandung
        </footer>
      </main>
    </div>
  );
};

export default Dkomentar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dtentangkami = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tentangkami, setTentangkami] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ourteam") // Ganti dengan endpoint Anda
      .then((response) => {
        setTentangkami(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Gagal memuat data 'Tentang Kami'.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex bg-[#f4f6f9]">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Konten Utama */}
      <main
        className={`flex-grow transition-all duration-300 h-screen bg-white p-6 lg:ml-[20%] ${
          isSidebarOpen ? "ml-[20%]" : "ml-0"
        }`}
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-6 bg-white shadow w-full h-[100px] px-6 py-2">
          <div className="flex items-center">
            <img src="logo.png" className="w-[87px] h-[72px] mr-3" alt="Logo" />
            <h1 className="text-[#22467d] text-2xl lg:text-3xl font-semibold font-['Poppins']">
              CV. SOBAR JAYA
            </h1>
          </div>
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </header>

        <div className="flex space-x-2">
              <a href="#">
                <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-plus mr-2"></i> Tambah Tentang Kami
                </button>
              </a>
              <a href="#">
                <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
                </button>
              </a>
            </div>
            <br />
            <div className="border-t border-black-200"></div>
        {/* Konten Data */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">No</th>
                <th className="border p-2">Aksi</th>
                <th className="border p-2">Nama Anggota</th>
                <th className="border p-2">Divisi</th>
                <th className="border p-2">Quotes</th>
                <th className="border p-2">Foto</th>
                <th className="border p-2">Terakhir Diperbarui</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    Memuat data...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="5" className="text-center text-red-500 p-4">
                    {error}
                  </td>
                </tr>
              ) : (
                tentangkami.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">
                      <div className="flex justify-center space-x-1">
                        <a href="#">
                          <img
                            src="hapus.png"
                            alt="Hapus"
                            title="Hapus Tentang Kami"
                          />
                        </a>
                        <a href={`/editourteam/${item.id}`}>
                          <img
                            src="edit.png"
                            alt="Edit"
                            title="Edit"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="border p-2">{item.nama_anggota}</td>
                    <td className="border p-2">{item.divisi_anggota}</td>
                    <td className="border p-2">{item.quetes}</td>
                    <td className="border p-2">
                      <img src={item.foto} alt="foto " />
                    </td>
                    <td className="border p-2">
                      {item.updated_at
                        ? new Date(item.updated_at).toLocaleString()
                        : "Tidak tersedia"}
                    </td>
                  </tr>
                ))
              )}
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

export default Dtentangkami;

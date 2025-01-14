import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dgaleri = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [galeri, setGaleri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Galeri")
      .then((response) => {
        setGaleri(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Gagal memuat data galeri.");
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
        <div className="flex space-x-2">
              <a href="/dtambahgaleri">
                <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-plus mr-2"></i> Tambah Galeri
                </button>
              </a>
              <a href="/dhapusgaleri">
                <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
                </button>
              </a>
            </div>
            <br />
            <div className="border-t border-black-200"></div>
        {/* Table or other content */}
        <div className="p-4 overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">box</th>
                <th className="border p-2">NO</th>
                <th className="border p-2">Aksi</th>
                <th className="border p-2">Foto Kegiatan</th>
                <th className="border p-2">Judul</th>
                <th className="border p-2">Deskripsi</th>
                <th className="border p-2">Tanggal posting</th>
              </tr>
            </thead>
            <tbody>
              {galeri.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-1">
                      <a href={`/editgaleri/${item.id}`}>
                        <img src="edit.png" alt="Edit" title="Edit Galeri" />
                      </a>
                      <a href="#">
                        <img src="hapus.png" alt="Hapus" title="Hapus Galeri" />
                      </a>
                      <a href="#">
                        <img
                          src="pratinjau.png"
                          alt="Pratinjau"
                          title="Pratinjau Galeri"
                        />
                      </a>
                    </div>
                  </td>
                  <td className="border p-2">{item.foto}</td>
                  <td className="border p-2">{item.judul}</td>
                  <td className="border p-2">{item.deskripsi}</td>
                  <td className="border p-2">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleString()
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
export default Dgaleri;

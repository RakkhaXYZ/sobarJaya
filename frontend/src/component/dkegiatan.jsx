import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dkegiatan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [kegiatan, setKegiatan] = useState([]); // Keep it as 'artikel' to avoid changing API calls.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/kegiatan") // Keep API call as is (no change).
      .then((response) => {
        setKegiatan(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Gagal memuat data kegiatan.");
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
          <a href="/dtambahkegiatan">
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <i className="fas fa-plus mr-2"></i> Tambah Kegiatan
            </button>
          </a>
          <a href="/dhapuskegiatan">
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
                <th className="border p-2">Judul Kegiatan</th> {/* Still uses 'Artikel' text */}
                <th className="border p-2">Foto Kegiatan</th>
                <th className="border p-2">Dilihat</th>
                <th className="border p-2">Terakhir Diperbarui</th>
              </tr>
            </thead>
            <tbody>
              {kegiatan.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-1">
                      <a href={`/editkegiatan/${item.id}`}>
                        <img src="edit.png" alt="Edit" title="Edit Kegiatan" />
                      </a>
                      <a href="#">
                        <img src="hapus.png" alt="Hapus" title="Hapus Kegiatan" />
                      </a>
                      <a href="#">
                        <img src="tutup komentar.png" alt="Tutup Komentar" title="Tutup Komentar" />
                      </a>
                      <a href="#">
                        <img src="favorit.png" alt="Favoritkan" title="Favoritkan Artikel" />
                      </a>
                      <a href="#">
                        <img src="ubah kategori.png" alt="Ubah Kategori" title="Ubah Kategori" />
                      </a>
                      <a href="#">
                        <img src="pratinjau.png" alt="Pratinjau" title="Pratinjau Artikel" />
                      </a>
                    </div>
                  </td>
                  <td className="border p-2">{item.judul}</td>
                  <td className="border p-2">
                    {item.dibaca || 0} Kali Dilihat
                  </td>
                  <td className="border p-2">
                    <img
                      src={item.foto}
                      alt={item.judul}
                      width={100}
                      height={100}
                    />
                  </td>
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

export default Dkegiatan;

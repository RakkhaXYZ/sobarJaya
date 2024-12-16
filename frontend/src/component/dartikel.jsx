import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dartikel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Artikel")
      .then((response) => {
        setArtikel(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data artikel.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex bg-[#f4f6f9] min-h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main
        className={`flex-grow transition-all duration-300 bg-white p-6 ${
          isSidebarOpen ? "ml-[20%]" : "ml-[0%]"
        }`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Dynamic Content */}
        <div className="p-4">
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Select</th>
                  <th className="border p-2">No</th>
                  <th className="border p-2">Aksi</th>
                  <th className="border p-2">Judul Artikel</th>
                  <th className="border p-2">Foto</th>
                  <th className="border p-2">Dilihat</th>
                  <th className="border p-2">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {artikel.map((item, index) => (
                  <tr key={item.id} className="text-center">
                    <td className="border p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">
                      <div className="flex justify-center space-x-1">
                        <a href={`/editArtikel/${item.id}`}>
                          <img src="edit.png" alt="Edit" title="Edit Artikel" />
                        </a>
                        <a href={`/hapusArtikel/${item.id}`}>
                          <img
                            src="hapus.png"
                            alt="Hapus"
                            title="Hapus Artikel"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="border p-2">{item.judul}</td>
                    <td className="border p-2">
                      <img
                        src={item.foto || "placeholder.png"}
                        alt={item.judul}
                        className="w-20 h-20 object-cover"
                      />
                    </td>
                    <td className="border p-2">{item.dibaca || 0} Kali</td>
                    <td className="border p-2">
                      {new Date(item.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

const Header = ({ toggleSidebar, isSidebarOpen }) => (
  <header className="flex justify-between items-center mb-4 bg-white shadow px-6 py-2">
    <div className="flex items-center">
      <img src="logo.png" className="w-[87px] h-[72px] mr-3" alt="Logo" />
      <h1 className="text-[#22467d] text-2xl font-semibold">CV. SOBAR JAYA</h1>
    </div>
    <button
      onClick={toggleSidebar}
      className="lg:hidden bg-[#22467d] text-white p-2 rounded"
    >
      {isSidebarOpen ? "Close" : "Menu"}
    </button>
  </header>
);

const Footer = () => (
  <footer className="mt-6 text-center text-gray-600 text-sm py-4 border-t border-gray-200">
    Copyright &copy; 2023 CV. Sobar Jaya Bandung
  </footer>
);

export default Dartikel;

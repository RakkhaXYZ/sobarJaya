import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dsejarah = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sejarahData, setSejarahData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data sejarah
  useEffect(() => {
    const fetchSejarah = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/showSejarah/4");
        console.log("Data diterima:", response.data); // Debug respons
        setSejarahData(response.data);
      } catch (err) {
        setError("Data tidak ditemukan atau terjadi kesalahan.");
      } finally {
        setLoading(false);
      }
    };
    fetchSejarah();
  }, []);
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-[#22467d] text-white p-2 rounded focus:outline-none"
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
        </header>

        {/* Buttons */}
        <div className="flex space-x-2 mb-4">
          <a href="/dtambahsejarah">
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <i className="fas fa-plus mr-2"></i> Tambah Sejarah
            </button>
          </a>
          <a href="/dhapussejarah">
            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
              <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
            </button>
          </a>
        </div>

        <div className="border-t border-black-200 mb-4"></div>

        {/* Table */}
        <div className="p-4 overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Box</th>
              <th className="border p-2">No</th>
              <th className="border p-2">Aksi</th>
              <th className="border p-2">Sejarah</th>
              <th className="border p-2">Foto Sejarah</th>
              <th className="border p-2">Tanggal Posting</th>
            </tr>
          </thead>
          <tbody>
            {sejarahData ? (
              <tr>
                <td className="border p-2">
                  <input type="checkbox" />
                </td>
                <td className="border p-2">1</td>
                <td className="border p-2">
                  <div className="flex justify-center space-x-2">
                    <a href={`/editgaleri/${sejarahData.id}`}>
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
                <td className="border p-2">
                  {sejarahData.sejarah || "Deskripsi tidak tersedia"}
                </td>
                <td className="border p-2">
                  {sejarahData.foto ? (
                    <img
                      src={sejarahData.foto}
                      alt="Foto Galeri"
                      className="h-24 w-24 object-cover mx-auto"
                    />
                  ) : (
                    <span>Foto tidak tersedia</span>
                  )}
                </td>
                <td className="border p-2">
                  {sejarahData.created_at
                    ? new Date(sejarahData.created_at).toLocaleString()
                    : "Tidak tersedia"}
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Data tidak tersedia
                </td>
              </tr>
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
export default Dsejarah;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./NavbarDashborad.jsx";

const Dsosmed3 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sosmed, setSosmed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Sosmed") // Ganti dengan endpoint Anda
      .then((response) => {
        setSosmed(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Gagal memuat data 'Sosial Media'.");
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

        <section className="bg-[#f4f6f9] p-4 rounded ">
          <div className="flex">
              <div className="w-1/3">
                  <div className="bg-[#22467d] text-white text-2xl font-semibold font-['Poppins'] p-2 mb-4 w-[304px] h-[43px]">Media Sosial</div>
                  <ul>
                      <a href="/dsosmed"><li className="bg-[#22467d] text-[#ffffff] text-xl font-semibold font-['Poppins'] p-2 mb-2 w-[304px] h-[43px]"><i className="fab fa-facebook mr-2"></i>Facebook</li></a>
                      <li> <div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                      <a href="/dsosmed1"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2 p-2 mb-2"><i className="fab fa-twitter mr-2"></i>Twitter</li></a>
                      <li> <div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                      <a href="/dsosmed2"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2 p-2 mb-2"><i className="fab fa-youtube mr-2"></i>Youtube</li></a>
                      <li> <div className="w-[300px] h-[2px] bg-gray-300"></div></li>
                      <a href="/dsosmed3"><li className="text-[#3c3c3c] text-xl font-semibold font-['Poppins'] p-2 mb-2 p-2 mb-2"><i className="fab fa-instagram mr-2"></i>Instagram</li></a>
                      <li> <div className="w-[300px] h-[2px] bg-gray-300"></div></li>

                  </ul>
              </div>
              <div className="w-2/3 pl-6">
                  <div className="text-black text-xl font-semibold font-['Poppins']">Url / Link</div>
                  <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-[516px] h-[37px]"/>
                  <br />
                  <br />
                  <button className=" justify-end bg-[#22467d] text-white p-2 rounded  text-xl font-semibold font-['Poppins']">Simpan</button>
              </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-600 text-sm py-4 border-t border-gray-200">
          Copyright &copy; 2023 CV. Sobar Jaya Bandung
        </footer>
      </main>
    </div>
  );
};

export default Dsosmed3;
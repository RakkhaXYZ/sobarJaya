import React, { useState, useEffect } from "react";
import axios from "axios";

const Dgaleri = () => {
  const [artikel, setGaleri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Galeri")
      .then((response) => {
        console.log(response.data); // Debug
        setGaleri(response.data); // Pastikan nilai default
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data galeri.");
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex bg-[#f4f6f9]">
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
     <li className="mb-6 flex items-center justify-start text-[#22467d] font-bold text-xl font-['Poppins'] bg-white w-[261px] h-[72px] ">
           <a href="/dgaleri"><img src="Gambar biru.png" className="mr-4" /></a>
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
         <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
           <a href="/dsosmed"><img src="Sosial Media.png" className="mr-7" /></a>
           <a href="/dsosmed"><span>Sosial Media</span></a>
         </li>
         <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
           <a href="/dkomentar"><img src="Skomentar.png" className="mr-5" /></a>
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
      </header>
      <br />

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <a href="/dtambahgaleri">
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-plus mr-2"></i> Tambah Galeri
              </button>
            </a>
            
            <a href="/dhapusartikel">
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
                <th className="border p-2">Nama Galeri</th>
                <th className="border p-2">Aktif</th>
                <th className="border p-2">Tanggal posting</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(2)].map((_, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2"><input type="checkbox" /></td>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">
                    <div className="flex justify-center space-x-5">
                      <a href=""><img src="edit.png" alt="" /></a>
                      <a href=""><img src="hapus.png" alt="" /></a>
                      <a href=""><img src="tutup komentar.png" alt="" /></a>
                      <a href=""><img src="favorit.png" alt="" /></a>
                      <a href=""><img src="pratinjau.png" alt="" /></a>
                    </div>
                  </td>
                  <td className="border p-2">Galeri Tentang Kami</td>
                  <td className="border p-2">1029 Kali Dilihat</td>
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
      <br />
      <br />
      <footer className="mt-6 text-center text-gray-600">
        <div className="flex justify-start space-x-20 ">
          <div className="w-[1300px] h-[2px] bg-gray-300"></div>
        </div>
        <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
      </footer>
    </main>
  </div>
  );
};

export default Dgaleri;

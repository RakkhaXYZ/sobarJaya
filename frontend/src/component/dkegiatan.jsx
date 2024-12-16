import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dkegiatan = () => {
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/kegiatan')
      .then((response) => {
        console.log(response.data.data); // Debug
        setKegiatan(response.data.data); // Pastikan nilai default
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Gagal memuat data kegiatan.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex bg-[#f4f6f9]">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-4/5 lg:w-1/5 bg-[#22467d] h-screen p-2 transition-transform duration-300 z-50`}
      >
        <a href="/dashboardadmin" className="flex items-center justify-center text-white text-2xl font-semibold font-['Poppins'] mt-4 mb-6">
          DASHBOARD
        </a>
        <nav>
          <ul>
            {[
              { href: '/dartikel', imgSrc: 'Artikel.png', label: 'Artikel' },
              { href: '/dgaleri', imgSrc: 'Gambar.png', label: 'Galeri' },
              { href: '/dkegiatan', imgSrc: 'SKegiatan.png', label: 'Kegiatan' },
              { href: '/dtentangkami', imgSrc: 'Tentang Kami.png', label: 'Tentang Kami' },
              { href: '/dsosmed', imgSrc: 'Sosial Media.png', label: 'Sosial Media' },
              { href: '/dkomentar', imgSrc: 'Skomentar.png', label: 'Komentar' },
            ].map((item, index) => (
              <li key={index} className="mb-4 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
                <a href={item.href} className="flex items-center">
                  <img src={item.imgSrc} alt={item.label} className="w-6 h-6 mr-3" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className="mt-12 flex items-center px-4 text-white text-lg font-['Poppins'] hover:bg-blue-700 cursor-pointer">
              <img src="Keluar.png" alt="Keluar" className="w-6 h-6 mr-3" />
              <a href="#">Keluar</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-grow ml-[20%] h-screen w-screen p-2">
        <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
          <div className="flex items-center">
            <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]" />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
          <a href="/profilMasterAdmin">
            <div className="w-[58px] h-[58px] relative">
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
              <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
              <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
            </div>
          </a>
        </header>

        <br />

        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <a href="/dtambahkegiatan">
                <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-plus mr-2"></i> Tambah Kegiatan
                </button>
              </a>
              <a href="/dhapusartikel">
                <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                  <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
                </button>
              </a>
            </div>
          </div>

          <div className="flex justify-start space-x-10">
            <div className="w-[1300px] h-[1px] bg-black"></div>
          </div>
          
          <br />

          <div className="flex justify-between mb-4">
            <select className="border p-2 rounded">
              <option>Semua</option>
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
                  <th className="border p-2">Judul</th>
                  <th className="border p-2">Deskripsi Kegiatan</th>
                  <th className="border p-2">Foto Kegiatan</th>
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
                        <a href="#">
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
                    <td className="border p-2">{item.judul} </td>
                    <td className="border p-2">{item.deskripsi} </td>
                    <td className="border p-2">
                      <div className="flex flex-col items-center">
                        <img
                          src={item.foto || 'placeholder.png'} // Gunakan placeholder jika tidak ada foto
                          alt={item.judul}
                          className="w-20 h-20 object-cover mb-2"
                        />
                        <span>{item.judul}</span>
                      </div>
                    </td>
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

        <footer className="mt-6 text-center text-gray-600">
          <div className="flex justify-start space-x-20">
            <div className="w-[1300px] h-[2px] bg-gray-300"></div>
          </div>
          <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
        </footer>
      </main>
    </div>
  );
};

export default Dkegiatan;

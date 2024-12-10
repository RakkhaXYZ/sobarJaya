import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dartikel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/Artikel')
      .then((response) => {
        console.log(response.data);
        setArtikel(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Gagal memuat data artikel.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex bg-[#f4f6f9] min-h-screen">
      {/* Sidebar dengan responsivitas */}
     <aside
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative w-4/5 lg:w-1/5 bg-[#22467d] h-screen p-4 transition-transform duration-300 z-50`}
      >
        {/* Header untuk Sidebar */}
        <div className="flex items-center justify-center text-white text-3xl font-semibold font-['Poppins'] mt-4 mb-6">
          DASHBOARD
        </div>

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

      {/* Konten Utama */}
      <main
  className={`flex-grow transition-all duration-300 h-screen bg-white p-6 ${isSidebarOpen ? 'ml-[20%]' : 'ml-[0%]'}`}
>
  {/* Header */}
  <header className="flex justify-between items-center mb-4 bg-white shadow w-full h-[100px] px-6 py-2">
    <div className="flex items-center">
      <img src="logo.png" className="w-[87px] h-[72px] mr-3" alt="Logo" />
      <h1 className="text-[#22467d] text-2xl lg:text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
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
    <table className="min-w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">box</th>
          <th className="border p-2">NO</th>
          <th className="border p-2">Aksi</th>
          <th className="border p-2">Judul Artikel</th>
          <th className="border p-2">Foto Kegiatan</th>
          <th className="border p-2">Dilihat</th>
          <th className="border p-2">Terakhir Diperparui</th>
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
                <a href={`/editartikel/${item.id}`}>
                  <img src="edit.png" alt="Edit" title="Edit Artikel" />
                </a>
                <a href={`/hapusArtikel/${item.id}`}>
                  <img src="hapus.png" alt="Hapus" title="Hapus Artikel" />
                </a>
                <a href={`/tutupKomentar/${item.id}`}>
                  <img src="tutup komentar.png" alt="Tutup Komentar" title="Tutup Komentar" />
                </a>
                <a href={`/favoritkanArtikel/${item.id}`}>
                  <img src="favorit.png" alt="Favoritkan" title="Favoritkan Artikel" />
                </a>
                <a href={`/ubahKategori/${item.id}`}>
                  <img src="ubah kategori.png" alt="Ubah Kategori" title="Ubah Kategori" />
                </a>
                <a href={`/pratinjau/${item.id}`}>
                  <img src="pratinjau.png" alt="Pratinjau" title="Pratinjau Artikel" />
                </a>
              </div>
            </td>
            <td className="border p-2">{item.judul}</td>
            <td className="border p-2">{item.dibaca || 0} Kali Dilihat</td>
            <td className="border p-2"><img src={item.foto} alt={item.judul} width={100} height={100} /></td>
            <td className="border p-2">{new Date(item.created_at).toLocaleString()}</td>
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

export default Dartikel;

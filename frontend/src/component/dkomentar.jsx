import React, { useState } from 'react';

const Dkomentar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f4f6f9]">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#22467d] h-screen p-2 fixed">
        <a href="/dashboardadmin">
          <div className="flex items-center text-white text-xl font-semibold font-['Poppins']">
            <div className="w-[380px] h-[102px] bg-[#22467d] shadow">
              <div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">
                DASHBOARD
              </div>
            </div>
          </div>
        </a>
        <br />
        <nav>
          <ul>
            {[
              { href: '/dartikel', imgSrc: 'Artikel.png', label: 'Artikel' },
              { href: '/dgaleri', imgSrc: 'Gambar.png', label: 'Galeri' },
              { href: '/dkegiatan', imgSrc: 'SKegiatan.png', label: 'Kegiatan' },
              { href: '/dtentangkami', imgSrc: 'Tentang Kami.png', label: 'Tentang Kami' },
              { href: '/dsosmed', imgSrc: 'Sosial Media.png', label: 'Sosial Media' },
              { href: '/dkomentar', imgSrc: 'Komentar biru.png', label: 'Komentar', isActive: true }
            ].map((item, index) => (
              <li
                key={index}
                className={`mb-6 flex items-center justify-start text-xl font-['Poppins'] ${
                  item.isActive ? 'text-[#22467d] font-bold bg-white' : 'text-white'
                }`}
              >
                <a href={item.href} className="flex items-center">
                  <img src={item.imgSrc} alt={item.label} className="mr-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className="mt-24 flex items-center justify-start text-white text-xl font-['Poppins']">
              <img src="Keluar.png" className="mr-6" />
              <a href="#">
                <span>Keluar</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-[20%] h-screen w-screen p-2">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 bg-white shadow w-full h-[102px] px-6 py-2">
          <div className="flex items-center">
            <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]" />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
          <a href="/profilMasterAdmin">
            <div className="w-[58px] h-[58px] relative">
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
              <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
              <div className="w-[33.7px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
            </div>
          </a>
        </header>

        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
              </button>
            </div>
          </div>

          <div className="flex justify-start space-x-10">
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

          {/* Table */}
          <div>
            <table className="min-w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2"><input type="checkbox" /></th>
                  <th className="border p-2">No</th>
                  <th className="border p-2">Aksi</th>
                  <th className="border p-2">Pengirim</th>
                  <th className="border p-2">Isi Komentar</th>
                  <th className="border p-2">Email Pengirim</th>
                  <th className="border p-2">Judul Artikel</th>
                  <th className="border p-2">Aktif</th>
                  <th className="border p-2">Tanggal Posting</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2"><input type="checkbox" /></td>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">
                      <div className="flex justify-center space-x-1">
                        <a href=""><img src="hapus.png" alt="" /></a>
                        <a href=""><img src="tutup komentar.png" alt="" /></a>
                      </div>
                    </td>
                    <td className="border p-2">Fulan bin Fulan</td>
                    <td className="border p-2">Wow sangat mengesankan</td>
                    <td className="border p-2">fulanbinfulan@gmail.com</td>
                    <td className="border p-2">Pengerjaan Bor Inti PLTA Padang Aro</td>
                    <td className="border p-2">YA</td>
                    <td className="border p-2">01 Januari 2024 12:03:12</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
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
              <button className="border px-2 py-1">2</button>
              <button className="border px-2 py-1">3</button>
              <button className="border px-2 py-1">Akhir</button>
            </div>
          </div>
        </div>

        {/* Footer */}
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

export default Dkomentar;

import React from 'react';

const Dartikel = () => {
  return (
    <div className="flex bg-[#f4f6f9]">
    <aside className="w-1/5 bg-[#22467d] text-white h-screen p-2">
    <a href="/dashboardadmin"><div className="flex items-center text-white text-xl font-semibold font-['Poppins']">
        <div className="w-[310px] h-[102px] bg-[#22467d] shadow"><div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">DASHBOARD
        </div>
        
        </div> 
        </div>
        </a>
        <br />
        <br />
        <nav>
            <ul>
                <li className="mb-4 flex items-center mr-2">
                    <a href="/dartikel"><i className="fas fa-file-alt mr-2"></i></a>
                    <a href="/dartikel"><span>Artikel</span></a>
                </li>
                <br />
  
                <li className="mb-4 flex items-center">
                    <a href="/dgaleri"><i className="fas fa-images mr-2"></i></a>
                    <a href="/dgaleri"><span>Galeri</span></a>
                </li>
                <br />
                <li className="mb-4 flex items-center">
                    <a href="/dkegiatan"><i className="fas fa-calendar-alt mr-2"></i></a>
                    <a href="/dkegiatan"><span>Kegiatan</span></a>
                </li>
                <br />
                <li className="mb-4 flex items-center">
                    <a href="/dtentangkami"><i className="fas fa-info-circle mr-2"></i></a>
                    <a href="/dtentangkami"><span>Tentang Kami</span></a>
                </li>
                <br />
                <li className="mb-4 flex items-center">
                    <a href="/dsosmed"><i className="fas fa-share-alt mr-2"></i></a>
                    <a href="/dsosmed"><span>Sosial Media</span></a>
                </li>
                <br />
                <li className="mb-4 flex items-center">
                    <a href="/dkomentar"><i className="fas fa-comments mr-2"></i></a>
                    <a href="/dkomentar"><span>Komentar</span></a>
                </li>
                <br />
                <br />
    
                <li className="mt-6 flex items-center">
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    <a href=""><span>Keluar</span></a>
                </li>
            </ul>
        </nav>
    </aside>
    <main className="w-[1090px] h-[107px] bg-white shadow p-2">
       <header className="flex justify-between items-center mb-6">
            <div className="flex items-center">
                <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]"/>
                <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
            </div>
            <div className="w-[58px] h-[58px] relative">
    <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
    <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
    <div className="w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
</div>
        </header>
<br />

        <div className="p-4">
                    <div className="flex justify-between mb-4">
                        <div className="flex space-x-2">
                            <a href="/dtambahartikel"><button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                                <i className="fas fa-plus mr-2"></i> Tambah Artikel
                            </button></a>
                            <a href="/dtambahkategori"><button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                                <i className="fas fa-folder-plus mr-2"></i> Tambah Kategori
                            </button></a>
                            <a href="/dhapusartikel"><button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                                <i className="fas fa-trash-alt mr-2"></i> Hapus data terpilih
                            </button></a>
                        </div>
        
                       
                      
                    </div>
                    <div className="flex justify-start  space-x-20 ">
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
                                <th className="border p-2">Judul</th>
                                <th className="border p-2">Dilihat</th>
                                <th className="border p-2">Tanggal posting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((_, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border p-2"><input type="checkbox" /></td>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">
                                        <div className="flex justify-center space-x-1">
                                            <a href=""><img src="edit.png" alt="" /></a>
                                            <a href=""><img src="hapus.png" alt="" /></a>
                                            <a href=""><img src="komentar.png" alt="" /></a>
                                            <a href=""><img src="tutup komentar.png" alt="" /></a>
                                            <a href=""><img src="favorit.png" alt="" /></a>
                                            <a href=""><img src="ubah kategori.png" alt="" /></a>
                                            <a href=""><img src="pratinjau.png" alt="" /></a>
                                        </div>
                                    </td>
                                    <td className="border p-2">Pengembangan Bisnis PTA Padang Aro</td>
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
                            <button className="border px-2 py-1">2</button>
                            <button className="border px-2 py-1">3</button>
                            <button className="border px-2 py-1">Akhir</button>
                        </div>
                    </div>
                </div>        
        <br />
        <footer className="mt-6 text-center text-gray-600">
        <div className="flex justify-start  space-x-20 ">
                    <div className="w-[1300px] h-[2px] bg-gray-300"></div>
                </div>
            <p>Copyright &copy; 2023 CV. Sobar Jaya Bandung</p>
        </footer>
    </main>
</div>
  );
};

export default Dartikel;

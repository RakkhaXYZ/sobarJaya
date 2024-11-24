import React from 'react';

const Dtambahartikel = () => {
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
        <div className="flex flex-col md:flex-row p-4">
                    <div className="w-full md:w-2/3 p-4">
                        <div className="flex justify-between mb-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                <i className="fas fa-arrow-left"></i> Kembali
                            </button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                                <i className="fas fa-eye"></i> Pratinjau
                            </button>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Judul Artikel</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Isi Artikel</label>
                            <div className="border border-gray-300 rounded">
                                <div className="flex items-center bg-gray-100 p-2 border-b border-gray-300">
                                    <button className="p-2"><i className="fas fa-save"></i></button>
                                    <button className="p-2"><i className="fas fa-folder-open"></i></button>
                                    <button className="p-2"><i className="fas fa-print"></i></button>
                                    <button className="p-2"><i className="fas fa-undo"></i></button>
                                    <button className="p-2"><i className="fas fa-redo"></i></button>
                                    <button className="p-2"><i className="fas fa-cut"></i></button>
                                    <button className="p-2"><i className="fas fa-copy"></i></button>
                                    <button className="p-2"><i className="fas fa-paste"></i></button>
                                    <button className="p-2"><i className="fas fa-bold"></i></button>
                                    <button className="p-2"><i className="fas fa-italic"></i></button>
                                    <button className="p-2"><i className="fas fa-underline"></i></button>
                                    <button className="p-2"><i className="fas fa-strikethrough"></i></button>
                                    <button className="p-2"><i className="fas fa-align-left"></i></button>
                                    <button className="p-2"><i className="fas fa-align-center"></i></button>
                                    <button className="p-2"><i className="fas fa-align-right"></i></button>
                                    <button className="p-2"><i className="fas fa-align-justify"></i></button>
                                    <button className="p-2"><i className="fas fa-list-ul"></i></button>
                                    <button className="p-2"><i className="fas fa-list-ol"></i></button>
                                    <button className="p-2"><i className="fas fa-indent"></i></button>
                                    <button className="p-2"><i className="fas fa-outdent"></i></button>
                                    <button className="p-2"><i className="fas fa-table"></i></button>
                                    <button className="p-2"><i className="fas fa-image"></i></button>
                                    <button className="p-2"><i className="fas fa-link"></i></button>
                                    <button className="p-2"><i className="fas fa-unlink"></i></button>
                                    <button className="p-2"><i className="fas fa-code"></i></button>
                                </div>
                                <textarea className="w-full h-64 p-2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 bg-gray-100">
                        <h2 className="text-white bg-blue-800 p-2 rounded">Unggah Gambar</h2>
                        <div className="mt-4">
                            <div className="flex items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Placeholder for Gambar Utama" className="w-16 h-16 mr-4" />
                                <div>
                                    <label className="block text-gray-700">Gambar Utama</label>
                                    <input type="file" className="border border-gray-300 p-2 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Placeholder for Gambar Tambahan" className="w-16 h-16 mr-4" />
                                <div>
                                    <label className="block text-gray-700">Gambar Tambahan</label>
                                    <input type="file" className="border border-gray-300 p-2 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Placeholder for Gambar Tambahan" className="w-16 h-16 mr-4" />
                                <div>
                                    <label className="block text-gray-700">Gambar Tambahan</label>
                                    <input type="file" className="border border-gray-300 p-2 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Placeholder for Gambar Tambahan" className="w-16 h-16 mr-4" />
                                <div>
                                    <label className="block text-gray-700">Gambar Tambahan</label>
                                    <input type="file" className="border border-gray-300 p-2 rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded">Batal</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
                        </div>
                    </div>
                </div>

     <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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

export default Dtambahartikel;

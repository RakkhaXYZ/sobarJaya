import React from 'react';

const Dtambahsejarah = () => {
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
      
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
          <a href="/dgaleri"><button className="bg-blue-500 text-white px-4 py-2 rounded">
                                <i className="fas fa-arrow-left"></i> Kembali
                            </button></a>
          </div>
        </div>
        <div className="flex justify-start space-x-10 ">
            <div className="w-[1300px] h-[1px] bg-black"></div>
          </div>
          <div className="flex justify-start items-center bg-[#f4f6f9]">
                    <div className="bg-[#f4f6f9] p-8  w-[800px]">
                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2">Nama Album</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black font-bold mb-2">Unggah Album</label>
                            <div className="w-32 h-32 border border-gray-300 flex justify-center items-center">
                                <span className="text-gray-400 text-4xl">+
                                  </span> 
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
                        </div>
                    </div>
                </div>
        </div>
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

export default Dtambahsejarah;

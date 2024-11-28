import React from 'react';

const Profilmasteradmin = () => {
  return (
    <div className="flex bg-[#f4f6f9] ">
    <aside className="w-1/5 bg-[#22467d] h-screen p-2 fixed">
    
        <div className="flex items-center text-white text-xl font-semibold font-['Poppins'] ">
           <div className="w-[380px] h-[102px] bg-[#22467d] shadow">
             <div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">DASHBOARD</div>
           </div>
         </div>

       <br />
       <nav>
         <ul>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl font-['Poppins'] ">
             <a href="/dartikel"><img src="Artikel.png" className="mr-4"/></a>
             <a href="/dartikel"><span>Artikel</span></a>
           </li>
       <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl font-['Poppins']  ">
             <a href="/dgaleri"><img src="Gambar.png" className="mr-4" /></a>
             <a href="/dgaleri"><span>Galeri</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dkegiatan"><img src="SKegiatan.png" className="mr-3" /></a>
             <a href="/dkegiatan"><span>Kegiatan</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-7 text-white text-xl  font-['Poppins']">
             <a href="/dtentangkami"><img src="Tentang Kami.png" className="mr-4" /></a>
             <a href="/dtentangkami"><span>Tentang Kami</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dsosmed"><img src="Sosial Media.png" className="mr-7" /></a>
             <a href="/dsosmed"><span>Sosial Media</span></a>
           </li>
           <li className="mb-8 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <a href="/dkomentar"><img src="Skomentar.png" className="mr-5" /></a>
             <a href="/dkomentar"><span>Komentar</span></a>
           </li>
           <li className="mt-24 flex items-center justify-start ml-8 text-white text-xl  font-['Poppins']">
             <img src="Keluar.png" className="mr-6" />
             <a href=""><span>Keluar</span></a>
           </li>
         </ul>
       </nav>
     </aside>
     <main className="flex-grow ml-[20%] h-screen w-screen p-2"> 
       <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
         <div className="flex items-center ">
           <img src="logo.png" className="mr-2 w-[87px] h-[72px]" />
           <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
         </div>
         <a href=""><div className="w-[58px] h-[58px] relative">
           <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
           <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
           <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
         </div></a>
       </header>          
       <div className="flex justify-start items-center ">
                    <div className="bg-[#f4f6f9] p-6 rounded-lg  flex w-[1300px]">
                        <div className="flex flex-col items-center mr-8">
                        <div className="w-[154.19px] h-[154.19px] relative">
                        <div className="w-[154.19px] h-[154.19px] left-0 top-0 absolute bg-[#f4f2f2] rounded-full" />
                            <div className="w-[63.14px] h-[63.14px] left-[45.52px] top-[14.69px] absolute bg-[#22467d] rounded-full" />
                            <div className="w-[89.57px] h-[63.14px] left-[32.31px] top-[83.70px] absolute bg-[#22467d] rounded-full" />
                        </div>
                            <div className="w-[174px] h-[30px] text-black text-2xl font-semibold font-['Poppins']">Master Admin</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="mb-4">
                            <div className="w-[131px] h-[29px] text-[#22467d] text-xl font-semibold font-['Poppins']">Identitas Diri</div>
                            <div className="mt-2">
                                <div className="w-[184px] h-[29px] text-black text-xl font-semibold font-['Poppins']">Nama</div>
                                    <input type="text" className="mt-1 p-2 border border-gray-300 rounded w-[516px] h-[37px] bg-[#f4f2f2]" />
                                </div>
                            </div>
                            <br />
                            <hr className="my-4" />
                            <div>
                            <div className="w-[171px] h-[29px] text-[#22467d] text-xl font-semibold font-['Poppins']">Ganti Kata sandi</div>
                                <div className="mt-2">
                                <div className="w-[184px] h-[29px] text-black text-xl font-semibold font-['Poppins']">Kata Sandi Lama</div>
                                    <input type="password" className="mt-1 p-2 border border-gray-300 rounded w-[516px] h-[37px] bg-[#f4f2f2]" />
                                </div>
                                <div className="mt-2">
                                <div className="w-[184px] h-[29px] text-black text-xl font-semibold font-['Poppins']">Kata Sandi Baru</div>
                                    <input type="password" className="mt-1 p-2 border border-gray-300 rounded w-full" />
                                </div>
                                <div className="mt-2">
                                <div className="w-[184px] h-[29px] text-black text-xl font-semibold font-['Poppins']">Ulangi Kata Sandi</div>
                                    <input type="password" className="mt-1 p-2 border border-gray-300 rounded w-full" />
                                </div>
                                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Profilmasteradmin;

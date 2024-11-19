import React from 'react';

const Dkomentar = () => {
  return (
    <div className="flex">
    <aside className="w-1/5 bg-blue-900 text-white h-screen p-4">
        <div className="flex items-center mt-6 text-white text-xl font-semibold font-['Poppins']">
            <div className="text-white text-3xl font-semibold font-['Poppins']">DASHBOARD
            <div className="flex items-center justify-start space-x-20 mt-11 mr-6">
                    <div className="w-[800px] h-[2px] bg-gray-300"></div>
                </div>
            </div>
            
        </div>
        <br />
        <br />
        <nav>
            <ul>
            <li className="mb-4 flex items-center">
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
    <main className="w-4/5 p-6">
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
        <div className="flex items-center space-x-20 ">
                    <div className="w-[1146px] h-[2px] bg-gray-300"></div>
                </div>
        <div className="text-blue-900 text-3xl font-semibold font-['Poppins'] text-center"> Welcome to Komentar</div>
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

export default Dkomentar;

import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex bg-[#f4f6f9]">
    <aside className="w-1/5 bg-[#22467d] text-white w-[294px] h-[1024px] p-2">
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
    <main className="w-4/5 p-2">
        <header className="flex justify-between items-center ">
        <div className="w-[1045px] h-[102px] bg-white shadow" > 
          <div className="flex items-center">
                <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]"/>
                <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
            </div>
            </div>
       
           
        </header>
        
        <div className="text-blue-900 text-3xl font-semibold font-['Poppins'] text-center"> Welcome to Dashboard </div>
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

export default Dashboard;

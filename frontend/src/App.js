// App.js
import React from "react";
import "./App.css"; // Import file CSS Tailwind

function App() {
  return (
    <div className="bg-blue-900 text-white font-sans">
      <header className="py-4 px-6 flex justify-between items-center">
        <img
          src="logo.png" // Ganti dengan path logo Anda
          alt="Logo"
          className="h-8"
        />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sejarah
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Kegiatan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Artikel
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Tentang Kami
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari..."
            className="pl-8 pr-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </header>
      <section
        className="bg-cover bg-center py-20"
        style={{ backgroundImage: "url('hero.jpg')" }} // Ganti dengan path gambar hero Anda
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">CV. SOBAR JAYA</h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
            ullamcorper.
          </p>
          <a
            href="#"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">VISI</h2>
              <p className="text-lg">
                SEBAGAI KONSULTAN DAN JASA DALAM BIDANG GEOTEKNIK YANG TERARAH
                DAN AMANAH
              </p>
            </div>
            <div>
              <img
                src="gambar-visi.jpg" // Ganti dengan path gambar visi Anda
                alt="Visi"
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb"></h2>
          <h2 className="text-3xl font-bold text-center mb-4">MISI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="gambar-misi.jpg" // Ganti dengan path gambar misi Anda
                alt="Misi"
                className="rounded-md shadow-md"
              />
            </div>
            <div>
              <p className="text-lg">
                Meningkatkan kualitas dan kuantitas jasa geoteknik yang
                profesional dan berintegritas, serta meningkatkan kepercayaan
                masyarakat terhadap jasa geoteknik.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">KEGIATAN</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="gambar-kegiatan1.jpg" // Ganti dengan path gambar kegiatan 1 Anda
                alt="Kegiatan 1"
                className="rounded-md shadow-md"
              />
              <h3 className="text-lg font-bold mt-4">Kegiatan 1</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget ullamcorper.
              </p>
            </div>
            <div>
              <img
                src="gambar-kegiatan2.jpg" // Ganti dengan path gambar kegiatan 2 Anda
                alt="Kegiatan 2"
                className="rounded-md shadow-md"
              />
              <h3 className="text-lg font-bold mt-4">Kegiatan 2</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget ullamcorper.
              </p>
            </div>
            <div>
              <img
                src="gambar-kegiatan3.jpg" // Ganti dengan path gambar kegiatan 3 Anda
                alt="Kegiatan 3"
                className="rounded-md shadow-md"
              />
              <h3 className="text-lg font-bold mt-4">Kegiatan 3</h3>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 bg-gray-100 text-center">
        <p className="text-lg">
          &copy; 2023 CV. SOBAR JAYA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

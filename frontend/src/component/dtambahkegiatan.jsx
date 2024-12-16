import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Untuk navigasi

const Dtambahkegiatan = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState([]); // Mengelola banyak file
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const navigate = useNavigate();
  const textareaRef = useRef(null);

  const handleFileChange = (event) => {
    setFoto(event.target.files); // Tangkap file saat dipilih
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);

    Array.from(foto).forEach((file, index) => {
      formData.append(`foto[${index}]`, file);
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/storeKegiatan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setAlertMessage("Data kegiatan berhasil disimpan!");
      setAlertType("success");
      console.log("Response:", response.data);

      setTimeout(() => navigate("/dkegiatan"), 1000); // Redirect ke halaman kegiatan
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Terjadi kesalahan saat menyimpan data!";
      setAlertMessage(errorMessage);
      setAlertType("error");
    }
  };
  return (
    <div className="flex bg-[#f4f6f9]">
      <aside className="w-1/5 bg-[#22467d] h-screen p-2 fixed">
        <a href="/dashboard">
          <div className="flex items-center text-white text-xl font-semibold font-['Poppins'] ">
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
            <li className="mb-6 flex items-center justify-start  text-white text-xl font-['Poppins'] ">
              <a href="/dartikel">
                <img src="Artikel.png" className="mr-4" />
              </a>
              <a href="/dartikel">
                <span>Artikel</span>
              </a>
            </li>
            <li className="mb-6 flex items-center justify-start  text-white text-xl font-['Poppins']  ">
              <a href="/dgaleri">
                <img src="Gambar.png" className="mr-4" />
              </a>
              <a href="/dgaleri">
                <span>Galeri</span>
              </a>
            </li>
            <li className="mb-6 flex items-center justify-start  text-[#22467d] font-bold  text-xl  font-['Poppins'] bg-white w-[261px] h-[72px]">
              <a href="/dkegiatan">
                <img src="Kegiatan biru.png" className="mr-3" />
              </a>
              <a href="/dkegiatan">
                <span>Kegiatan</span>
              </a>
            </li>
            <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
              <a href="/dtentangkami">
                <img src="Tentang Kami.png" className="mr-4" />
              </a>
              <a href="/dtentangkami">
                <span>Tentang Kami</span>
              </a>
            </li>
            <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
              <a href="/dsosmed">
                <img src="Sosial Media.png" className="mr-7" />
              </a>
              <a href="/dsosmed">
                <span>Sosial Media</span>
              </a>
            </li>
            <li className="mb-6 flex items-center justify-start  text-white text-xl  font-['Poppins']">
              <a href="/dkomentar">
                <img src="Skomentar.png" className="mr-5" />
              </a>
              <a href="/dkomentar">
                <span>Komentar</span>
              </a>
            </li>
            <li className="mt-24 flex items-center justify-start text-white text-xl  font-['Poppins']">
              <img src="Keluar.png" className="mr-6" />
              <a href="">
                <span>Keluar</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow ml-[20%] h-screen w-screen p-2">
        <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
          <div className="flex items-center ">
            <img
              src="logo.png"
              alt="Company Logo"
              className="mr-2 w-[87px] h-[72px]"
            />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">
              CV. SOBAR JAYA
            </h1>
          </div>
          <a href="/profilMasterAdmin">
            <div className="w-[58px] h-[58px] relative">
              <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
              <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
              <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
            </div>
          </a>
        </header>
        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-2/3 p-4">
            <div className="flex justify-between mb-4">
              <a href="/dkegiatan">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <i className="fas fa-arrow-left"></i> Kembali
                </button>
              </a>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                <i className="fas fa-eye"></i> Pratinjau
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {alertMessage && (
                <div
                  className={`p-4 mb-4 text-white rounded ${
                    alertType === "success" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {alertMessage}
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700">Judul Kegiatan</label>
                <input
                  type="text"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Deskripsi</label>
                <textarea
                  ref={textareaRef}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="w-full h-64 p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Unggah Gambar</label>
                <input
                  type="file"
                  multiple // Mendukung multi gambar
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  accept="image/*"
                  required
                />
              </div>

              {foto.length > 0 && (
                <div className="mt-4 grid grid-cols-4 gap-4">
                  {Array.from(foto).map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className="w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Simpan
                </button>
              </div>
            </form>
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

export default Dtambahkegiatan;

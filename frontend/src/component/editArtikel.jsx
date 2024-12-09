import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const EditArtikel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judul: '',
    deskripsi: '',
    waktu_kegiatan: '',
    foto: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/artikel/${id}`)
      .then(response => {
        const { judul, deskripsi, waktu_kegiatan } = response.data.data;
        setFormData({ judul, deskripsi, waktu_kegiatan, foto: null });
      })
      .catch(error => {
        console.error('Error fetching artikel data: ', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({ ...prevState, foto: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('judul', formData.judul);
    data.append('deskripsi', formData.deskripsi);
    data.append('waktu_kegiatan', formData.waktu_kegiatan);

    if (formData.foto) {
      data.append('foto', formData.foto);
    }

    try {
      await axios.put(`http://localhost:8000/api/updateArtikel/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Artikel berhasil diperbarui');
      setTimeout(() => {
        navigate('/dartikel');
      }, 200);
    } catch (error) {
      console.error('Error updating artikel: ', error);
      setMessage('Terjadi kesalahan saat memperbarui artikel');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex bg-[#f4f6f9]">
     <aside className="w-1/5 bg-[#22467d] h-screen p-2 fixed">
          <a href="/dashboard"><div className="flex items-center text-white text-xl font-semibold font-['Poppins'] ">
            <div className="w-[380px] h-[102px] bg-[#22467d] shadow">
              <div className="mt-6 text-white text-3xl text-center font-semibold font-['Poppins']">DASHBOARD</div>
            </div>
          </div></a>
       
        <br />
        <nav>
          <ul>
          <li className="mb-6 flex items-center justify-start  text-[#22467d] font-bold text-xl font-['Poppins'] bg-white w-[261px] h-[72px]">
             <a href="/dartikel"><img src="Artikel biru.png" className="mr-4"/></a>
             <a href="/dartikel"><span>Artikel</span></a>
           </li>
       <li className="mb-6 flex items-center justify-start  text-white text-xl font-['Poppins']  ">
             <a href="/dgaleri"><img src="Gambar.png" className="mr-4" /></a>
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
          <div className="w-[58px] h-[58px] relative">
            <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
            <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
            <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
          </div>
        </header>
        <div className="flex flex-col md:flex-row p-4">
                    <div className="w-full md:w-2/3 p-4">
                     <div className="flex justify-between mb-4">
                            <a href="/dartikel"><button className="bg-blue-500 text-white px-4 py-2 rounded">
                                <i className="fas fa-arrow-left"></i> Kembali
                            </button></a>
                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                                <i className="fas fa-eye"></i> Pratinjau
                            </button>
                        </div>

                        {message && (
              <div className="bg-yellow-300 text-black p-2 mb-4">{message}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Judul Artikel</label>
                <input
                  type="text"
                  name="judul"
                  value={formData.judul}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Isi Artikel</label>
                <textarea
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  className="w-full h-64 p-2 border border-gray-300 rounded"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Waktu Kegiatan</label>
                <input
                  type="date"
                  name="waktu_kegiatan"
                  value={formData.waktu_kegiatan}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Unggah Gambar</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  accept="image/*"
                />
              </div>

              <div className="flex justify-between mt-4">
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                  Batal
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
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

export default EditArtikel;

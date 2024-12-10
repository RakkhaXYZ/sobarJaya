import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditArtikel = () => {
  const { id } = useParams();  // Mengambil id dari URL
  const navigate = useNavigate();  // Untuk redirect ke halaman lain
  const [artikel, setArtikel] = useState({
    judul: '',
    deskripsi: '',
    waktu_kegiatan: '',
    foto: ''
  });
  const [loading, setLoading] = useState(false);

  // Ambil data artikel berdasarkan ID saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchArtikel = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/getArtikel/${id}`);
        setArtikel(response.data.data);
      } catch (error) {
        console.error("Error fetching artikel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtikel();
  }, [id]);

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtikel({
      ...artikel,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validasi input di frontend
    if (!artikel.judul || !artikel.deskripsi || !artikel.waktu_kegiatan) {
      alert("Semua field harus diisi!");
      setLoading(false);
      return;
    }
  
    const formData = new FormData();
    formData.append('judul', artikel.judul);
    formData.append('deskripsi', artikel.deskripsi);
    formData.append('waktu_kegiatan', artikel.waktu_kegiatan);
  
    // Jika ada foto baru, kirimkan foto baru, jika tidak kirimkan foto lama
    if (artikel.foto instanceof File) {
      formData.append('foto', artikel.foto);
    } else {
      formData.append('foto', artikel.fotoLama); // Mengirimkan foto lama jika tidak ada foto baru
    }
  
    try {
      // Ambil token dari localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        alert("Token tidak ditemukan. Silakan login terlebih dahulu.");
        setLoading(false);
        return;
      }
  
      const response = await axios.post(
        `http://localhost:8000/api/updateArtikel/${id}`, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
  
      alert('Artikel berhasil diperbarui');
      navigate('/dartikel');
    } catch (error) {
      console.error("Error updating artikel:", error.response ? error.response.data : error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  return (
    <div className="flex bg-[#f4f6f9]">
      <main className="flex-grow ml-[20%] h-screen w-screen p-2">
        <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
          <div className="flex items-center ">
            <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]" />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
        </header>

        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-2/3 p-4">
            <div className="flex justify-between mb-4">
              <a href="/dartikel">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <i className="fas fa-arrow-left"></i> Kembali
                </button>
              </a>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                <i className="fas fa-eye"></i> Pratinjau
              </button>
            </div>

            {loading ? (
              <div>Loading...</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Judul Artikel</label>
                  <input
                    type="text"
                    name="judul"
                    value={artikel.judul}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Isi Artikel</label>
                  <textarea
                    name="deskripsi"
                    value={artikel.deskripsi}
                    onChange={handleChange}
                    className="w-full h-64 p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Waktu Kegiatan</label>
                  <input
                    type="text"
                    name="waktu_kegiatan"
                    value={artikel.waktu_kegiatan}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700">Unggah Gambar</label>
                  <input
                    type="file"
                    name="foto"
                    onChange={(e) => setArtikel({ ...artikel, foto: e.target.files[0] })}
                    className="w-full border border-gray-300 p-2 rounded"
                    accept="image/*"
                  />
                  {artikel.foto && (
                    <div>
                      <img
                        src={typeof artikel.foto === 'string' ? artikel.foto : URL.createObjectURL(artikel.foto)}
                        alt="Preview"
                        className="mt-2"
                        style={{ maxWidth: '100px' }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-4">
                  <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
                    Batal
                  </button>
                  <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>
                    {loading ? 'Memproses...' : 'Perbarui Artikel'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditArtikel;

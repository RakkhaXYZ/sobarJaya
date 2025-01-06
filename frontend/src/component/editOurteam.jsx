import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditOurteam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama_anggota: "",
    divisi_anggota: "",
    quetes: "",
    foto: null,
    foto_anggota: null,
    foto_anggota_lama: "",  // Untuk menyimpan foto anggota lama
  });

  const [fotoAnggota, setFotoAnggota] = useState([]);  // Untuk menyimpan foto anggota dari API
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    const fetchOurteam = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getOurteam/${id}`);
        const data = response.data.data;

        // Memasukkan data yang diterima ke dalam formData
        setFormData({
          nama_anggota: data.ourteam.nama_anggota,
          divisi_anggota: data.ourteam.divisi_anggota,
          quetes: data.ourteam.quetes,
          foto: null, // Untuk unggah foto baru
          foto_anggota_lama: data.ourteam.foto, // Foto anggota lama
        });

        // Menyimpan foto anggota dalam state
        setFotoAnggota(data.foto);

        setLoading(false); // Selesai mengambil data
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
  
    fetchOurteam();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        updateData.append(key, formData[key]);
      }
    });

    try {
      await axios.post(`http://localhost:8000/api/updateOurteam/${id}`, updateData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAlert("Data Berhasil diperbarui");
      setTimeout(() => {
        navigate("/dtentangkami");
      }, 2000);
    } catch (error) {
      console.error("Failed to update data:", error);
      setAlert("Gagal Memperbarui data");
    }
  };

  if (loading) {
    return <div className="text-center mt-5">Loading....</div>;
  }

  return (
    <div className="flex bg-[#f4f6f9]">
      <main className="flex-grow ml-[20%] h-screen w-screen p-2">
        <header className="flex justify-between items-center mb-6 bg-white shadow w-[1350px] h-[102px]">
          <div className="flex items-center">
            <img src="logo.png" alt="Company Logo" className="mr-2 w-[87px] h-[72px]" />
            <h1 className="text-[#22467d] text-3xl font-semibold font-['Poppins']">CV. SOBAR JAYA</h1>
          </div>
        </header>

        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-2/3 p-4">
            <div className="flex justify-between mb-4">
              <a href="/dourteam">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  <i className="fas fa-arrow-left"></i> Kembali
                </button>
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Nama Anggota</label>
                <input
                  type="text"
                  name="nama_anggota"
                  value={formData.nama_anggota}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Divisi Anggota</label>
                <input
                  type="text"
                  name="divisi_anggota"
                  value={formData.divisi_anggota}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Quetes</label>
                <textarea
                  name="quetes"
                  value={formData.quetes}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Unggah Foto</label>
                <input
                  type="file"
                  name="foto"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  accept="image/*"
                />
                {formData.foto && (
                  <img
                    src={URL.createObjectURL(formData.foto)}
                    alt="Pratinjau Foto Baru"
                    className="mt-2"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Foto Anggota (Opsional)</label>
                <input
                  type="file"
                  name="foto_anggota"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  accept="image/*"
                />
                {fotoAnggota.length > 0 && (
                  <div>
                    {fotoAnggota.map((foto, index) => (
                      <div key={index} className="mt-2">
                        <img
                          src={foto.url}
                          alt={`Foto Anggota ${index + 1}`}
                          style={{ maxWidth: "100px" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {formData.foto_anggota && (
                  <img
                    src={URL.createObjectURL(formData.foto_anggota)}
                    alt="Pratinjau Foto Anggota Baru"
                    className="mt-2"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => navigate("/dourteam")}>
                  Batal
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>
                  {loading ? "Memproses..." : "Perbarui"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditOurteam;

import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ArtikelDetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const [artikel, setArtikel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(()=> {
    axios .get(`http://localhost:8000/api/getArtikel/${id}`)
    .then((response)=> {
      setArtikel(response.data.data);
      setLoading(false);
    })
    .catch((error)=> {
      const errorMessage = 
      error.response?.data?.message || "terjadik kesalahan saat memuat data";
      setError(errorMessage);
      setLoading(false);
    });
    
  }, [id]);

  const handleBack = ()=> {
    navigate("/dartikel");

  }

  if (loading){
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Memuat Artikel....</p>
  
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-red-500">
          {error}
        </p>
      </div>
    )
    
  }


return (
  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
    <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Tombol Kembali */}

      <button onClick={handleBack} className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Kembali Ke Menu
      </button>

      <img src={artikel.foto} alt={artikel.judul} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">{artikel.judul}</h1>
        <p className="mt-2 text-gray-600">
          {artikel.deskripsi}
        </p>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <p>Dilihat: {artikel.dibaca || 0} kali dilihat</p>
          <p>
            Waktu Dilaksanakan Kegiatan : {" "}
            {artikel.updated_at
            ? new Date(artikel.waktu_kegiatan).toLocaleString() : "Tidak Tersedia"
            }
          </p><br/>
          <p>
            Terakhir diperbarui : {" "}
            {artikel.updated_at
            ? new Date(artikel.updated_at).toLocaleString() : "Tidak Tersedia"
            }
          </p>
        </div>
      </div>

    </div>
  </div>
);
};

export default ArtikelDetail;
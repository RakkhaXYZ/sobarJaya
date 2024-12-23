import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditArtikel = () => {
  const { id } = useParams();  // Mengambil id dari URL
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fotos, setFotos] = useState([]);
  const [newFotos, setNewFotos] = useState([]);
  const [deleteFotos, setDeleteFotos]= useState([]);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  useEffect(()=> {
    axios
    .get(`http://localhost:8000/api/showKegiatan/${id}`)
    .then((response) => {
      console.log("Fetched Data:", response.data);
      const {foto} = response.data.data;
      const {kegiatan} = response.data.data;
      const {judul, deskripsi} = kegiatan;
      setJudul(judul);
      setDeskripsi(deskripsi);
      setFotos(foto);
    })
    .catch((error)=> console.error(error));

  }, [id]);

  console.log("judul state", judul);
  console.log("deskripsi state", deskripsi);


  const handleFileChange = (e)=> {
    setNewFotos([...newFotos,...e.target.files]);
  }

  const handleDeleteFoto = (fotoId)=>{
    setDeleteFotos([...deleteFotos, fotoId]);
    setFotos(fotos.filter((foto)=> foto.id !== fotoId))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    deleteFotos.forEach((id) => formData.append("deleted_foto[]",id));
    newFotos.forEach((file)=> formData.append("foto[]", file));

    axios
    .post(`http://localhost:8000/api/updateKegiatan/${id}`, formData)
    .then((response)=> {
      setAlert("Data Kegiatan Berhasil diperbarui");
      setTimeout(()=> {
        setAlert("");
        navigate("/dkegiatan");
      }, 2000);
      

    })

    .catch((error) => console.error(error));
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

            {alert && <div className='alert alert-success'>{alert}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Judul Artikel</label>
                  <input
                    type="text"
                    value={judul}
                    onChange={(e)=> setJudul(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700">Isi Artikel</label>
                  <textarea
                    name="deskripsi"
                    value={deskripsi}
                    onChange={(e)=> setDeskripsi(e.target.value)}
                    className="w-full h-64 p-2 border border-gray-300 rounded"
                    required
                  ></textarea>
                </div>

            

                <div className="mb-4">
                  <label className="block text-gray-700">Update Gambar</label>
                  {fotos.map((foto)=>(
                    <div key={foto.id} className="d-inline-block position-relative m-2">
                      <img src={foto.url} alt="Foto Kegiatan" className='img-thumbail' style={{ width: "100px", height: "100px", objectFit: "cover" }} />

                      <button type='button' className='btn btn-danger btn-sm position-absolute top-0 end-0' onClick={()=> handleDeleteFoto(foto.id)}>
                        &times;
                      </button>
                    </div>
                  ))}
                  <input
                    type="file"
                    name="foto"
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
                    Update Kegiatan
                  </button>
                </div>
              </form>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditArtikel;

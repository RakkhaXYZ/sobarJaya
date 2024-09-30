import { useState } from "react";

import {useNavigate} from 'react-router-dom';

import axios from 'axios';


export default function PostCreate(){

  // define state

  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');

  const [errors, setErrors] = useState([]);

  const navigate  = useNavigate();
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  }

  const storePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('harga', harga);
    formData.append('status', status);
    formData.append('image', image);

    await axios.post('http://127.0.0.1:8000/api/addAlat', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(() => {

      navigate('/posts');
    })
    .catch(error => {

      setErrors(error.response.data);
    })
  }


  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card boder-0 rounded shadow">
            <div className="card-body">
             <form onSubmit={storePost}>
              <div className="mb-3">
                <label className="form-label fw-bold">Nama Produk </label>
                <input type="text" className="form-control" onChange={(e) => setNama(e.target.value)} placeholder="Nama Produk"/>
                {
                  errors.nama && (
                    <div className="alert alert-danger mt-2">
                      {errors.nama[0]}
                    </div>
                  )
                }
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Harga Produk </label>
                <input type="number" className="form-control" onChange={(e) => setHarga(e.target.value)} placeholder="Harga Produk"/>
                {
                  errors.harga && (
                    <div className="alert alert-danger mt-2">
                      {errors.harga[0]}
                    </div>
                  )
                }
              </div>
              <div className="mb-3">
                  <label className="form-label fw-bold">Status Produk</label>
                  <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="baik">Baik</option>
                    <option value="bagus banget">Bagus Banget</option>
                    <option value="rusak">Rusak</option>
                    <option value="perlu direnovasi">Perlu Direnovasi</option>
                  </select>
                  {errors.status && (
                    <div className="alert alert-danger mt-2">
                      {errors.status[0]}
                    </div>
                  )}
                </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Foto Produk</label>
                <input type="file" className="form-control" onChange={handleFileChange} />
                {
                  errors.image && (
                    <div className="alert alert-danger mt-2">
                      {errors.image[0]}
                    </div>
                  )
                }
              </div>
              
              <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
             </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
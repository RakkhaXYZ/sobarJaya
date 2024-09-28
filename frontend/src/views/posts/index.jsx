import { useState, useEffect } from "react";

import api from '../../api';

import {Link} from 'react-router-dom';
import axios from "axios";

export default function PostIndex(){

  const [posts, setPosts] = useState([]);


  //define method

  const fetchDataPosts = async () => {
    try {
        // Fetch data from API with axios
        const response = await axios.get('http://127.0.0.1:8000/api/alat', { withCredentials: true }); // Tambahkan withCredentials jika perlu
        // Assign response data to state "posts"
        setPosts(response.data); // Sesuaikan jika struktur data berbeda
    } catch (error) {
        console.error("Error fetching data:", error); // Tangkap dan tampilkan error
    }
};


  // run hook useEffect
  useEffect(() => {
    //call method "fetchDataPosts"

    fetchDataPosts();
  }, []);

  return(

    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <Link to="/posts/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</Link>
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <div className="table table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Nama</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Status</th>
                    <th scope="col" style={{  'width': '15%' }}>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    posts.length > 0 
                    ? posts.map((post, index)=> (
                      <tr key={index}>
                        <td>{ post.nama}</td>
                        <td>{ post.harga}</td>
                        <td>{ post.status}</td>

                        <td className="text-center">
                          <Link to={`posts/edit/${post.id}`} className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">Edit</Link>
                          <Link to={"btn btn-sm btn-danger rounded-sm shadow border-0"}>Delete</Link>
                        </td>
                      </tr>
                    )) 

                    : <tr>
                      <td colSpan="4" className="text-center">
                        <div className="alert alert-danger mb-0">
                          Data Belum Tersedia
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
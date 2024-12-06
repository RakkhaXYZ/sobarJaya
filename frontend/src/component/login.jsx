import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import background from '../img/bg.png';

const Login = ()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/admin/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'aplication/json',
                },
            
            body: JSON.stringify({email, password}),
            });

            const data  = await response.json();

            if(response.ok){
                setMessage('Login Successfull');
                localStorage.setItem('token', data.token);

                setTimeout(() => {
                    navigate('/dashboardAdmin');
                }, 2000);
            }else{
                setMessage(data.message || 'Invalid Credencial');
            }



    }catch(error){
        setMessage('Error Loggin in, Please try Again');

    }
};
    return (
      <>
  <div
  className="h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
    <div className="text-center mb-8">
    <img
          src="logo.png"
          alt="Company Logo"
          className="w-24 h-24 mx-auto"
        />
      <h2 className="text-blue-900 text-lg font-bold">SELAMAT DATANG DI</h2>
      <h2 className="text-blue-900 text-lg font-bold">
        CONTENT MANAGEMENT SYSTEM
      </h2>
      <h2 className="text-blue-900 text-lg font-bold">CV. SOBAR JAYA</h2>
    </div>
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-700">Remember Me</span>
        </label>
        <a href="#" className="text-blue-700">
          Forgot Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-900 text-white p-2 rounded"
      >
        LOGIN
      </button>
    </form>
    {message && (
      <div className="text-center mt-4">
        <span className="text-red-500">{message}</span>
      </div>
    )}
  </div>
</div>

   
      </>
            
  
    );
};
   

  
  export default Login;
  
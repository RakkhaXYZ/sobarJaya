import React from 'react';
import background from '../img/bg.png';

const Login = ()=> {
    return (
      <>
     <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >

<div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
                        <div className="text-center mb-8">
                            <div className="bg-blue-900 p-4 rounded-full inline-block mb-4">
                                <img src="https://placehold.co/100x100?text=Logo" alt="Company Logo" className="w-24 h-24 mx-auto"/>
                            </div>
                            <h2 className="text-blue-900 text-lg font-bold">SELAMAT DATANG DI</h2>
                            <h2 className="text-blue-900 text-lg font-bold">CONTENT MANAGEMENT SYSTEM</h2>
                            <h2 className="text-blue-900 text-lg font-bold">CV. SOBARIJAYA</h2>
                        </div>
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded"/>
                            </div>
                            <div className="mb-4">
                                <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded"/>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2"/>
                                    <span className="text-gray-700">Remember Me</span>
                                </label>
                                <a href="#" className="text-blue-700">Forgot Password?</a>
                            </div>
                            <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded">LOGIN</button>
                        </form>
                    </div>
      </div>
   
      </>
            
  
    );
  }
  
  export default Login;
  
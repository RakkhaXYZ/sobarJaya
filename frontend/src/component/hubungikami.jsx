import React, {useState} from "react";
import axios from "axios";
import Navigator from "./Navbar";
import BackToTop from './BackToTop';

const HubungiKami = () => {

  const [formData, setFormData]= useState({
    email: "",
    subject: "",
    description:"",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/addPesan", formData);
      setMessage(response.data.message);
      setError("");
      setFormData({
        email: "",
        subject: "",
        description: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage("");
      
    }finally{
      setIsLoading(false);
    }
  };
  return (

    <>
    <Navigator />
    <BackToTop/>
      
      <br />
      <br />
      <br />
      <br />
      <div className="p-6 text-center">
        <div className="text-[#3c3c3c] text-[32px] md:text-[40px] font-bold font-['Poppins']">
          LOKASI KAMI
        </div>
        <br />
      </div>
      <div className="flex justify-center">
        <img className="w-full max-w-[1376px] h-auto" src="denah.jpg" />
      </div>
      <br />
      <div className="flex flex-wrap justify-center items-center gap-8 p-4">
        <div className="bg-blue-900 text-white p-8 rounded-lg w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mb-6">HUBUNGI KAMI</h2>
          {message && <div style={{ color: "green", marginBottom: "10px" }}>{message}</div>}
          {error && <div style={{ color: "red", merginBottom: "10px" }}>{error }</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg text-black"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg text-black"
            />
            <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
              placeholder="Description"
              className="w-full p-3 mb-4 rounded-lg text-black h-32"
            ></textarea>
           <button
  type="submit"
  disabled={isLoading}
  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold"
>
  SUBMIT
</button>

          </form>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-lg w-full md:w-1/3">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt text-blue-900 mr-2"></i>
              <div className="text-[#3c3c3c] text-lg md:text-xl font-semibold font-['Poppins']">
                JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                <br />
                KOTA BANDUNG 40191, JAWA BARAT INDONESIA
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-phone-alt text-blue-900 mr-2"></i>
              <div className="text-[#3c3c3c] text-lg md:text-xl font-semibold font-['Poppins']">
                + 0123-4567-8910
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope text-blue-900 mr-2"></i>
              <div className="text-[#3c3c3c] text-lg md:text-xl font-semibold font-['Poppins']">
                SOBARBORJAYA@GMAIL.COM
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2">
              <i className="fab fa-google text-red-500 mr-2"></i>
              EMAIL KAMI
            </button>
            <button className="flex items-center bg-green-500 text-white rounded-lg px-4 py-2">
              <i className="fab fa-whatsapp mr-2"></i>
              WHATSAPP KAMI
            </button>
          </div>
          <img src="quotes4.jpg" alt="tim" className="rounded-lg" />
        </div>
      </div>
      <br />
      <footer>
        <div className="bg-blue-900 text-white p-9">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-start">
              <img className="w-[77px] h-16" src="logo.png" alt="logo" />
              <div>
                <div className="text-white text-2xl md:text-[42px] font-bold font-['Poppins']">
                  CV. SOBAR JAYA
                </div>
                <br />
                <div className="text-white text-base md:text-xl font-semibold font-['Poppins']">
                  ALAMAT : JLN. CIBEUNYING PERMAI V NO. 7 CIGADUNG
                  <br />
                  BANDUNG 40191 INDONESIA
                </div>
                <div className="text-white text-base md:text-xl font-semibold font-['Poppins']">
                  PHONE :
                  <br />+ 0123-4567-8910
                </div>
                <div className="text-white text-base md:text-xl font-semibold font-['Poppins']">
                  EMAIL :
                  <br />
                  E.MAILKAMI@EMAIL.COM
                </div>
              </div>
            </div>
            <div className="flex-grow border-t md:border-l border-white mx-8"></div>
            <div className="flex flex-wrap justify-around gap-8">
              <div>
                <div className="text-white text-lg md:text-2xl font-bold font-['Poppins']">
                  Company
                </div>
                <br />
                <div className="text-white text-base md:text-xl font-normal font-['Poppins']">
                  Kegiatan
                </div>
                <div className="text-white text-base md:text-xl font-normal font-['Poppins']">
                  Tentang Kami
                </div>
                <div className="text-white text-base md:text-xl font-normal font-['Poppins']">
                  Sejarah
                </div>
              </div>
              <div>
                <div className="text-white text-lg md:text-2xl font-bold font-['Poppins']">
                  Costumer Service
                </div>
                <br />
                <div className="text-white text-base md:text-xl font-normal font-['Poppins']">
                  Hubungi Kami
                </div>
              </div>
              <div>
                <div className="text-white text-lg md:text-2xl font-bold font-['Poppins']">
                  Content
                </div>
                <br />
                <div className="text-white text-base md:text-xl font-normal font-['Poppins']">
                  Artikel
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-8">
            <div className="flex items-center">
              <p>Follow Us:</p>
              <a href="#" className="ml-4 text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="ml-4 text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="ml-4 text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="ml-4 text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="text-center w-full md:w-auto">
              <p>Copyright 2024 © CV. Sobar Jaya Kota Bandung</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HubungiKami;

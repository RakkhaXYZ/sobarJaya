import React, {useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";
const Dtambahartikel = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [waktuKegiatan, setWaktuKegiatan] = useState('');
  const [foto, setFoto] = useState(null);

  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");

  

  const textareaRef = useRef(null);

  const formatText = (tag) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
  
      let formattedText = "";
  
      // Menentukan format berdasarkan tag
      if (tag === "bold") {
        formattedText = `**${selectedText}**`;
      } else if (tag === "italic") {
        formattedText = `*${selectedText}*`;
      } else if (tag === "underline") {
        formattedText = `<u>${selectedText}</u>`;
      }
  
      // Gabungkan teks yang baru diformat
      const newText =
        textarea.value.substring(0, start) +
        formattedText +
        textarea.value.substring(end);
  
      // Update nilai dalam textarea dan state
      textarea.value = newText;
      setDeskripsi(newText);
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);
    formData.append('waktu_kegiatan', waktuKegiatan);
    formData.append('foto', foto);

    try{
      const response = await fetch('http://localhost:8000/api/storeArtikel', {
        method: 'POST',
        body: formData,
      });

      if (response.ok){
        const result = await response.json();
        setAlertMessage(result.message);
        setAlertType("success")

        // reset form
        setJudul("");
        setDeskripsi("");
        setWaktuKegiatan("");
        setFoto(null);

        setTimeout(()=> {
          navigate("/dartikel");
        }, 2000)
      } else {
        const errorData = await response.json();
        setAlertMessage(`Error: ${errorData.message}`);
        setAlertType("error");
      }
    } catch (error) {
      console.error('error submitting artikel:', error);
      setAlertMessage("Terjadi Kesalahan saat mengirim data");
      setAlertType("error");
    }

  };
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
          <a href="/profilMasterAdmin"><div className="w-[58px] h-[58px] relative">
            <div className="w-[58px] h-[58px] left-0 top-0 absolute bg-[#22467d] rounded-full" />
            <div className="w-[23.75px] h-[23.75px] left-[17.12px] top-[5.52px] absolute bg-white rounded-full" />
            <div className=" w-[33.70px] h-[23.75px] left-[12.15px] top-[31.49px] absolute bg-white rounded-full" />
          </div></a>
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
      
                    <form onSubmit={handleSubmit}>
  {alertMessage && (
    <div
      className={`p-4 mb-4 text-white rounded ${
        alertType === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {alertMessage}
    </div>
  )}

  <div className="mb-4">
    <label className="block text-gray-700">Judul Artikel</label>
    <input
      type="text"
      value={judul}
      onChange={(e) => setJudul(e.target.value)}
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700">Isi Artikel</label>
    <textarea
      ref={textareaRef}
      value={deskripsi}
      onChange={(e) => setDeskripsi(e.target.value)}
      className="w-full h-64 p-2 border border-gray-300 rounded"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700">Waktu Kegiatan</label>
    <input
      type="date"
      value={waktuKegiatan}
      onChange={(e) => setWaktuKegiatan(e.target.value)}
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>

  <div className="mb-4">
    <label className="block text-gray-700">Unggah Gambar</label>
    <input
      type="file"
      onChange={(e) => setFoto(e.target.files[0])}
      className="w-full border border-gray-300 p-2 rounded"
      accept="image/*"
      required
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

export default Dtambahartikel;

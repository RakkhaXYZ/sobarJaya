import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Sejarah from "./component/sejarah";
import Artikel from "./component/artikel";
import Kegiatan from "./component/kegiatan";
import HubungiKami from "./component/hubungikami";
import TentangKami from "./component/tentang";
import Kegiatan1 from "./component/kegiatan1";
import Artikel1 from "./component/artikel1";
import Dashboard from "./component/dashboardAdmin";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from "./component/login";
import Dartikel from "./component/dartikel.jsx";
import Dgaleri from "./component/dgaleri.jsx";
import Dkegiatan from "./component/dkegiatan.jsx";
import Dtentangkami from "./component/dtentangkami.jsx";
import Dsosmed from "./component/dsosmed.jsx";
import Dsosmed1 from "./component/dsosmed1.jsx";
import Dsosmed2 from "./component/dsosmed2.jsx";
import Dsosmed3 from "./component/dsosmed3.jsx";
import Dkomentar from "./component/dkomentar.jsx";
import Dtambahartikel from "./component/dtambahartikel.jsx";
import Dtambahkategori from "./component/dtambahkategori.jsx";
import Dtambahgaleri from "./component/dtambahgaleri.jsx";
import Dtambahkegiatan from "./component/dtambahkegiatan.jsx";

import Profilmasteradmin from "./component/profilMasterAdmin.jsx";



import EditArtikel from "./component/editArtikel.jsx";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboardAdmin" element={<Dashboard />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/hubungikami" element={<HubungiKami />} />
      <Route path="/tentang" element={<TentangKami />} />
      <Route path="/kegiatan1" element={<Kegiatan1/>} />
      <Route path="/artikel1/:artikelId" element={<Artikel1/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dartikel" element={<Dartikel/>} />
      <Route path="/dgaleri" element={<Dgaleri/>} />
      <Route path="/dkegiatan" element={<Dkegiatan/>} />
      <Route path="/dtentangkami" element={<Dtentangkami/>} />
      <Route path="/dsosmed" element={<Dsosmed/>} />
      <Route path="/dsosmed1" element={<Dsosmed1/>} />
      <Route path="/dsosmed2" element={<Dsosmed2/>} />
      <Route path="/dsosmed3" element={<Dsosmed3/>} />
      <Route path="/dkomentar" element={<Dkomentar/>} />
      <Route path="/dtambahartikel" element={<Dtambahartikel/>} />
      <Route path="/dtambahkategori" element={<Dtambahkategori/>} />
      
      <Route path="/dtambahgaleri" element={<Dtambahgaleri/>} />
      <Route path="/dtambahkegiatan" element={<Dtambahkegiatan/>} />

      <Route path="/profilmasteradmin" element={<Profilmasteradmin/>} />

      <Route path="/editartikel/:id" element={<EditArtikel/>} />

    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

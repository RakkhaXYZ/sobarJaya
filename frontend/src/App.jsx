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

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/hubungikami" element={<HubungiKami />} />
      <Route path="/tentang" element={<TentangKami />} />
      <Route path="/kegiatan1" element={<Kegiatan1/>} />
      <Route path="/artikel1/:artikelId" element={<Artikel1/>} />
      <Route path="/login" element={<Login/>} />
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

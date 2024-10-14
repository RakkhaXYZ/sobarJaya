import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Sejarah from "./component/sejarah";
import Artikel from "./component/artikel";
import Kegiatan from "./component/kegiatan";
import HubungiKami from "./component/hubungikami";
import TentangKami from "./component/tentang";
import Kegiatan1 from "./component/kegiatan1";

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sejarah" element={<Sejarah />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/hubungikami" element={<HubungiKami />} />
      <Route path="/tentang" element={<TentangKami />} />
      <Route path="/kegiatan1" element={<Kegiatan1/>} />

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

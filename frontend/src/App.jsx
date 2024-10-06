import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './component/home'; // Import komponen Home

const AppContent = () => {

  return(
    <Routes>
    <Route path='/' element={<Home />}/>
  </Routes>

  );
 


}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};


export default App;

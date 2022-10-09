import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainContent from "./component/MainContent";
import CariMobilPage from "./component/CariMobilPage";
import Cars from "./component/Cars";
// import Cars from "./component/Cars";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route exact path="/CariMobilPage" element={<CariMobilPage />} />
          <Route exact path="/Cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
      {/* <Cars/> */}
    </div>
  );
};

export default App;

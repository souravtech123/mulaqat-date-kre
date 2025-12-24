import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Proposal from "./Components/Proposal";


const App = () => {
  return (
    <>
  
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>

      <Footer />

    </>

  );
};

export default App;

import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import NavBar from "./pages/NavBar";
import Success from "./components/Success/Success";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Pyq from "./components/Pyq/Pyq";
import Programme from "./pages/Programme";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import NavBar from "./pages/NavBar";


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Router> */}
      <Routes>
         <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Pyq" element={<Pyq />} />
          <Route path="Success" element={<Success/>} />
          <Route path="Programme" element={<Programme/>} />
        </Route>
        </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </>
  );
}

export default App;

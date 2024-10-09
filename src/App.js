import React from "react";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Home/components/Header";
import Footer from "./Pages/Home/components/Footer";
import Nav2 from "./Pages/Home/components/Nav2";
import Cottages from "./Pages/Cottage/Cottages";
import Cafeee from "./Pages/Cafe/Cafeee";
import Exp from "./Pages/Experience/Experience";
import Gal from "./Pages/Gallery/Gallery";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [sec, setSec] = useState("overview");
  return (
    <Router>
      <Header />
      <Nav2
        sec={sec}
        setSec={setSec}
      />
      <Routes>
        {" "}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/rooms"
          element={<Cottages />}
        />
        <Route
          path="/dining"
          element={<Cafeee />}
        />
        <Route
          path="/experience"
          element={<Exp />}
        />
        <Route
          path="/gallery"
          element={<Gal />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

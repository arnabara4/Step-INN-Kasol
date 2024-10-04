import React from "react";
import { useState } from "react";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Home/components/Header";
import Footer from "./Pages/Home/components/Footer";
import Nav2 from "./Pages/Home/components/Nav2";
import Cottages from "./Pages/Cottage/Cottages";
import Cafeee from "./Pages/Cafe/Cafeee";

const App = () => {
  const [sec, setSec] = useState("overview");
  return (
    <div>
      <Header />
      <Nav2
        sec={sec}
        setSec={setSec}
      />
      {sec === "overview" ? <Home /> : <div></div>}
      {sec === "rooms" ? <Cottages /> : <div></div>}
      {sec === "dining" ? <Cafeee /> : <div></div>}
      <Footer />
    </div>
  );
};

export default App;

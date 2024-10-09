import React from "react";
import Interior from "./components/Interior";
import Cottagae from "./components/Cottagae";
import Tent from "./components/Tent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cottages = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      <Interior />
      <Cottagae />
      <Tent />
    </div>
  );
};

export default Cottages;

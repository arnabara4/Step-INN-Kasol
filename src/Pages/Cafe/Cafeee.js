import React from "react";
import Text2 from "./components/Text2";
import Cafe from "./components/Cafe";
import Menu from "./components/Menu";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Cafeee = () => {
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
      <Text2 />
      <Cafe />
      <Menu />
    </div>
  );
};

export default Cafeee;

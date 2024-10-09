import React from "react";
import Text from "./components/Text/Text";
import Text2 from "./components/Text/Text2";
import HotelInfo from "./components/HotelInfo";
import Location from "./components/Location";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
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
    <div className="Home">
      <Text />
      <Text2 />
      <HotelInfo />
      <Location />
    </div>
  );
};

export default Home;

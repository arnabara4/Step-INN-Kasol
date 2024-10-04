import React from "react";
import Text from "./components/Text/Text";
import Text2 from "./components/Text/Text2";
import HotelInfo from "./components/HotelInfo";
import Location from "./components/Location";

const Home = () => {
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

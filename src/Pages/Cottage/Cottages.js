import React from "react";
import Interior from "./components/Interior";
import Cottagae from "./components/Cottagae"
import Tent from "./components/Tent"

const Cottages = () => {
  return (
    <div>
      <Interior />
      <Cottagae/>
      <Tent/>
    </div>
  );
};

export default Cottages;

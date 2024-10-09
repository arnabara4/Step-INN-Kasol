import React from "react";
import styless from "../styles/bookbox.module.css";

const BookBox = ({ setView }) => {
  return (
    <div className={styless.container}>
      <span
        className="material-icons"
        onClick={() => setView("no")}>
        close
      </span>
      <div className={styless.links}>
        <a href="https://www.goibibo.com/hotels/step-inn-kasol-hotel-in-kasol-1738408278095984389/?hquery={%22ci%22:%2220241015%22,%22co%22:%2220241016%22,%22r%22:%221-2-0%22,%22ibp%22:%22%22}&cc=IN&vcid=1738408278095984389&locusId=CTKSL&locusType=city&cityCode=CTKSL&mmtId=202409232027035086&FS=GSU&city=Kasol">
          {" "}
          GOIBIBO{" "}
        </a>
        <a href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=202409232027035086&_uCurrency=INR&checkin=10092024&checkout=10102024&city=CTKSL&country=IN&lat=32.00904&lng=77.30986&locusId=CTKSL&locusType=city&rank=1&reference=hotel&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Kasol&topHtlId=202409232027035086&type=city&mtkeys=-8597062505066035163">
          {" "}
          MAKE MY TRIP{" "}
        </a>
      </div>
    </div>
  );
};

export default BookBox;

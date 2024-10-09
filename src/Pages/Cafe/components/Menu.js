import React from "react";
import styles from "../styles/menu.module.css";
import pic1 from "../assets/menu1.webp";
import pic2 from "../assets/menu2.webp";
import pic3 from "../assets/menu3.webp";
import pic4 from "../assets/menu4.webp";

const Menu = () => {
  return (
    <div className={styles.container}>
      <span>-MENU</span>
      <div className={styles.menu}>
        <div className={styles.comp}>
          <span>INDIAN CUISINE</span>
          <div className={styles.info}>
            <img
              src={pic1}
              alt="pic"
            />
            <p>
              Stepinkasol Cafe is proud to offer a delicious selection of Indian
              cuisine. Our chefs use only the freshest ingredients to create
              authentic dishes that are sure to satisfy your cravings. From
              spicy curries to savory samosas, we have something for everyone to
              enjoy. Come visit us experience the flavors of India right here in
              our cafe.
              <br />
              <br />
              <a href="https://www.google.com/maps/place/Step-In,+Kasol/@32.0090377,77.3072871,17z/data=!3m1!4b1!4m9!3m8!1s0x39045d68fbb80669:0x61e72d3410979567!5m2!4m1!1i2!8m2!3d32.0090377!4d77.309862!16s%2Fg%2F11vt1ywjky?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
                MORE INFO
              </a>
            </p>
          </div>
        </div>
        <div className={styles.comp}>
          <span>ITALIAN CUISINE</span>
          <div className={styles.info}>
            <img
              src={pic2}
              alt="pic"
            />
            <p>
              StepinKasol Cafe offers a delightful selection of Italian cuisine,
              from classic pasta dishes like Alfredo and Bolognese to
              mouth-watering stone-baked pizzas. Set in a cozy, relaxed
              atmosphere, it’s the perfect spot to enjoy authentic Italian
              flavors, whether you're dining with friends or savoring a quiet
              meal in the heart of Kasol.
              <br />
              <br />
              <a href="https://www.google.com/maps/place/Step-In,+Kasol/@32.0090377,77.3072871,17z/data=!3m1!4b1!4m9!3m8!1s0x39045d68fbb80669:0x61e72d3410979567!5m2!4m1!1i2!8m2!3d32.0090377!4d77.309862!16s%2Fg%2F11vt1ywjky?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
                MORE INFO
              </a>
            </p>
          </div>
        </div>
        <div className={styles.comp}>
          <span>ISRAELI CUISINE</span>
          <div className={styles.info}>
            <img
              src={pic3}
              alt="pic"
            />
            <p>
              Experience the authentic taste of Israel at StepinKasol with a
              selection of traditional dishes crafted from fresh ingredients.
              From crispy falafel and creamy hummus to warm pita and vibrant
              salads, our menu brings the rich flavors of Israeli cuisine to
              life. Enjoy a warm, inviting atmosphere as you savor the unique
              and wholesome flavors of Israel right here in the heart of Kasol.
              <br />
              <br />
              <a href="https://www.google.com/maps/place/Step-In,+Kasol/@32.0090377,77.3072871,17z/data=!3m1!4b1!4m9!3m8!1s0x39045d68fbb80669:0x61e72d3410979567!5m2!4m1!1i2!8m2!3d32.0090377!4d77.309862!16s%2Fg%2F11vt1ywjky?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
                MORE INFO
              </a>
            </p>
          </div>
        </div>
        <div className={styles.comp}>
          <span>CHINESE CUISINE</span>
          <div className={styles.info}>
            <img
              src={pic4}
              alt="pic"
            />
            <p>
              Come and enjoy delicious Chinese cuisine at StepinKasol! Our menu
              offers flavorful stir-fries, savory noodles, and classic
              dumplings, all prepared by talented chefs using the freshest
              ingredients. Each dish is crafted to deliver an authentic taste,
              ensuring a memorable dining experience that will keep you coming
              back for more. Every bite is a journey through the rich flavors of
              China!
              <br />
              <br />
              <a href="https://www.google.com/maps/place/Step-In,+Kasol/@32.0090377,77.3072871,17z/data=!3m1!4b1!4m9!3m8!1s0x39045d68fbb80669:0x61e72d3410979567!5m2!4m1!1i2!8m2!3d32.0090377!4d77.309862!16s%2Fg%2F11vt1ywjky?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
                MORE INFO
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

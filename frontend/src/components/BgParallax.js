import React from "react";
import { Parallax } from "react-parallax";
import logo from "../Resources/img/placeholder.png";
import "./style.css";


const style = {
  backgroundImage: `url(${require("../Resources/img/bannerHead.jpg").default})`,
  width: "100%",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  height: "95%",
  // height: "500",
  position: "absolute",
  top: "0px",
  zIndex: "-1",
  textAlign: "center",
  color: "white",
};

const BgParallax = () => {
  return (
    <div style={style}>
      <img
        className="shadow"
        src={logo}
        width="40%"
        height="70%"
        style={{ marginTop: "80px" }}
      />
      <p
        style={{
          margin: "10px auto",
          padding: "0 10px 10px 10px",
          fontSize: "30px",
          fontFamily: "'Open Sans', sans-serif",
          textShadow: "0 0 15px rgb(0 0 0), 0 0 15px rgb(0 0 0)"
        }}
      >
        An Advanced API that Automatically Detects Hatred Messages 
      </p>
    </div>
  );
};

export default BgParallax;

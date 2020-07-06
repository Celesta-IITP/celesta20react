import React from "react";
import Gallery from "react-photo-gallery";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import { photos } from "./images";
import Images from "./Photos";
import "./gallery.css";

/* popout the browser and maximize to see more rows! -> */
const Photos = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div style={({ padding: "10px" }, { marginTop: "30px" })}>
          <h1 style={{ textAlign: "center", fontSize: "20px" }}>
            Some stunning Memories!
          </h1>
          <div className="zoom">
            <Images />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Photos;

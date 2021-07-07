import React from "react";
import "./MediaAd.css";
import  img1 from "./grahan.jpg"

const MediaAd = () => {
  return (
    <div className="mediaAd">
      <div className="text">
        <span>Grahan</span>
        <p>Hotstar Specials · Drama</p>
        <h6>
        It's 1984-a tender love story succumbs to the anti-Sikh riots. 
        It's 2016-IPS officer Amrita Singh uncovers a secret connecting that past to her present.
        </h6>
      </div>
      <div className="mediaImage">
        <img
          src={img1}
          alt=" "
        />
      </div>
    </div>
  );
};

export default MediaAd;

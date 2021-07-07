import React from "react";
import "./MediaAd.css";
import  imgg1 from "./image/grahan-d.jpg"

function Details() {
    return (
    <div className="mediaAd">
      <div className="text">
        <span>Grahan</span>
        <p>1 Season - 8 Episodes - Drama - Hotstar Specials</p>
        <h6>
        It's 1984-a tender love story succumbs to the anti-Sikh riots. 
        It's 2016-IPS officer Amrita Singh uncovers a secret connecting that past to her present.
        </h6>
      </div>
      <div className="mediaDetails">
       <span className="span">Episodes</span>
        <img
          src={imgg1}
          alt=" "
        />
      </div>
    </div>
      );
    };
    
export default Details;
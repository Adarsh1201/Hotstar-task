import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaAd from "./MediaAd";
import  img1 from "./image/1.jpg";
import  img2 from "./image/2.jpg";
import  img3 from "./image/3.jpg";
import  img5 from "./image/5.jpg";
import  img6 from "./image/6.jpg";
import  img7 from "./image/7.jpg";
import  img8 from "./image/8.jpg";
import  img9 from "./image/9.jpg";


function App() {
  return (
    <div className="App">
      <Header />
      <MediaAd />
      <div className="watch">
        <span className="span">Latest & Trending</span>
      </div>
      <div className="media-row">
      <a href="/Details">
        <Media img= {img1} />
      </a>
        <Media img= {img2} />
        <Media img= {img3} />
      </div>
      <div className="watch">
        <span className="span">Shows Recommended For You</span>
      </div>
      <div className="media-row">
      <a href="/Details">
        <Media img= {img5} />
      </a>
        <Media img= {img6} />
        <Media img= {img7} />
      
      </div>
      <div className="watch">
        <span className="span">Popular Movies</span>
      </div>
      <div className="media-row">
        <Media img= {img7} />
        <Media img= {img8} />
        <Media img= {img9} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

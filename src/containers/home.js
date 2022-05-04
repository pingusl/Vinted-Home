import bannerImg from "../img/banner-hero.jpeg";
//import { useEffect, useState } from "react";

export default function Home(props) {
  return (
    <div className="home-container">
      <div className="banner">
        <div>
          <div className="pop">Prêts à faire du tri dans vos placards?</div>
          <button className="selling-bt">Vends maintenant</button>
          <p className="pop-text">découvrez comment ça marche</p>
        </div>

        <img className="banner" src={bannerImg} alt="hero" />
      </div>
      {console.log(props.data)}
      <div>
        <h2>Articles populaires</h2>
      </div>
    </div>
  );
}

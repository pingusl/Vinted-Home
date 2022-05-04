import bannerImg from "../img/banner-hero.jpeg";
export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <div>
          <div className="pop">Prêts à faire du tri dans vos placards?</div>
          <button className="pop-button">Vends maintenant</button>
          <p className="pop-text">découvrez comment ça marche</p>
        </div>

        <img src={bannerImg} alt="hero" />
      </div>
    </div>
  );
}

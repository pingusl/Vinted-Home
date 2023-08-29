import { Link, useNavigate } from "react-router-dom";
import bannerImg from "../../img/banner-hero.jpeg";
import tornImg from "../../img/effet-déchiré.png";
import { RotatingLines } from "react-loader-spinner";

import "./home.scss";

function Home({ data, isLoading }) {
  //----Create states for manage data----//
  // console.log(token);
  // const [data, setData] = useState(); //To record the data
  const navigate = useNavigate();

  // console.log(isLoading);
  return isLoading === true ? (
    <RotatingLines
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <div className="home-container">
      <div className="banner">
        <div className="selling-now">
          <h1>Prêts à faire du tri dans vos placards?</h1>
          <button
            className="green-bt selling-bt"
            onClick={() => {
              navigate("/publish");
            }}
          >
            Vends maintenant
          </button>
          <p className="pop-text">Découvrir comment ça marche</p>
        </div>
        <div className="wrapper">
          <div className="banner">
            <img className="banner" src={bannerImg} alt="hero" />
          </div>
          <div className="tornImg">
            <img className="tornImg" src={tornImg} alt="torn" />
          </div>
        </div>
      </div>

      <div>
        <h2>Articles populaires</h2>
      </div>
      <section className="offers">
        {data.offers
          ? data.offers.map((offer, index) => {
              return (
                <div className="offer" key={index}>
                  <Link to={`offer/${offer._id}`}>
                    <img
                      className="offer-img"
                      src={offer.product_image.secure_url}
                      alt={offer._id}
                    />
                  </Link>
                  <div className="offer-details">
                    <span className="offer-article-details"></span>
                    <div className="article-price">
                      {offer.product_price}&nbsp;€
                    </div>
                    <div className="article-size"></div>
                    <div className="article-brand">
                      {offer.product_details[0].MARQUE}
                    </div>
                    <span className="offer-like"></span>
                  </div>
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import bannerImg from "../img/banner-hero.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  //----Create states for manage data----//
  const [isLoading, setIsLoading] = useState(true); //To be sur data will be loading
  const [data, setData] = useState(); //To record the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data.offers[0]._id);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement 🥁</h1>
  ) : (
    <div className="home-container">
      <div className="banner">
        <div>
          <div className="pop">Prêts à faire du tri dans vos placards?</div>
          <button className="selling-bt">Vends maintenant</button>
          <p className="pop-text">découvrez comment ça marche</p>
        </div>

        <img className="banner" src={bannerImg} alt="hero" />
      </div>

      <div>
        <h2>Articles populaires</h2>
      </div>
      <section className="offers">
        {data.offers.map((offer, index) => {
          return (
            <div className="offer" key={index}>
              <Link to={`offer/${offer._id}`}>
                <img
                  className="offer-img"
                  src={offer.product_image.secure_url}
                  alt={offer._id}
                />
              </Link>
              {/* {console.log(offer)} */}
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;

import { useNavigate } from "react-router-dom";
import tear from "../../img/tear.svg";
import { RotatingLines } from "react-loader-spinner";
import Card from "../../components/cards";

import "../../assets/styles/home.css";

function Home({ data, isLoading }) {
  const navigate = useNavigate();

  return isLoading === true ? (
    <RotatingLines
      className="home-loader"
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <>
      <div className="home-hero-bg-img">
        <img src={tear} alt="forme" className="home-hero-forme" />
        <div>
          <div className="home-hero-ready">
            Prêts à faire du tri dans vos placards?
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              Vends maintenant
            </button>
          </div>
        </div>
      </div>
      <div className="home-card-wrapper">
        {data.offers &&
          data.offers.map((card, index) => {
            return <Card key={index} data={card} />;
          })}
      </div>
    </>
  );
}

export default Home;

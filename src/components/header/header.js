//----Loading Module----//

import { Link, useNavigate, useLocation } from "react-router-dom";

import Cookies from "js-cookie";
import PriceRange from "../priceRange/priceRange";

//----Loading logo----//
import logo from "../../logo.svg";

//---Loading picture----//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//----Loading scss file----//
import "./header.scss";

//----Looking for cookie userToken----//
const token = Cookies.get("userToken");
const removeToken = () => {
  Cookies.remove("userToken");
};

//----App.js State use----//
const Header = ({
  sortPrice,
  setSortPrice,
  setSearchInput,
  setFetchRangeValues,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  //----Show the header with authentification button management (trigger switch by token)----//
  return (
    <header className="header">
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <FontAwesomeIcon icon="search" className="search-input-icon" />
        {location.pathname === "/" ? (
          <div>
            <div
              style={{
                marginTop: 25,
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: 10 }}>Trier par prix : </span>
              <span className="checkbox">
                <input
                  type="checkbox"
                  checked={sortPrice}
                  onChange={() => {}}
                  name="price"
                />
                <div
                  className="wrapper"
                  onClick={() => {
                    setSortPrice(!sortPrice);
                  }}
                >
                  <div className="knob">
                    <span>{sortPrice ? "⇣" : "⇡"}</span>
                  </div>
                </div>
              </span>
              <span style={{ marginRight: 10 }}>Prix entre : </span>
              <PriceRange setFetchRangeValues={setFetchRangeValues} />
            </div>
          </div>
        ) : null}
      </div>

      <span className="button-group">
        {
          //Without token---show connexion & inscription button
          !token ? (
            <>
              <Link className="sign-bt" to="/signup">
                <span>S'inscrire</span>
              </Link>
              <Link className="sign-bt" to="/signin">
                <span>Se connecter</span>
              </Link>
            </>
          ) : (
            //With token---show deconnexion button
            <span
              className="sign-bt"
              onClick={() => {
                removeToken();
                navigate("/");
              }}
            >
              Se déconnecter
            </span>
          )
        }

        <span
          className="green-bt"
          onClick={() => {
            navigate("/publish");
          }}
        >
          Vends tes articles
        </span>
      </span>
    </header>
  );
};
export default Header;

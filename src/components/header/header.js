//----Loading Module----//

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//----Loading logo----//
import logo from "../../logo.svg";

//---Loading picture----//
import magnifyingGlass from "../../img/loupe.svg";

//----Loading scss file----//
import "./header.scss";

//----Looking for cookie userToken----//
const token = Cookies.get("userToken");
const removeToken = () => {
  Cookies.remove("userToken");
};

//----App.js State use----//
const Header = ({
  searchInput,
  setSearchInput,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  setSort,
}) => {
  const navigate = useNavigate();

  //----Show the header with authentification button management (trigger switch by token)----//
  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>

      <span className="search">
        <form className="search-form" id="#search-bar">
          <div className="search-bar">
            <div className="search-img">
              <img className="search-img" src={magnifyingGlass} alt="search" />
            </div>
            <div className="search-input">
              <input
                className="search-input"
                type="text"
                onClick={(event) => {
                  setSearchInput("");
                }}
                onChange={(event) => {
                  setSearchInput(event.target.value);
                  // handleSearch();
                }}
                value={searchInput}
              />
            </div>
          </div>
          <div className="search-range"></div>
          <div className="search-result">
            <div
              className={
                searchInput !== ""
                  ? "search-result-componant show"
                  : "search-result-componant hide"
              }
            ></div>
            <div className="filter">
              <select
                name=""
                className="sort"
                onChange={(event) => {
                  setSort(event.target.value);
                }}
              >
                <option value="price-asc" defaultValue>
                  min max
                </option>
                <option value="price-desc">max min</option>
              </select>

              <input
                type="text"
                className="price"
                placeholder=" prix mini"
                onChange={(event) => {
                  setPriceMin(event.target.value);
                }}
                value={priceMin}
              />
              <input
                type="text"
                className="price"
                placeholder=" prix maxi"
                onChange={(event) => {
                  setPriceMax(event.target.value);
                }}
                value={priceMax}
              />
            </div>
          </div>
        </form>
      </span>

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

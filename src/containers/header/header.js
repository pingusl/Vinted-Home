//----Loading Module----//

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//----Loading logo----//
import logo from "../../logo.svg";

//---Loading component----//
import Filter from "../filter/filter";

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
  data,
  setData,
  setDataFilter,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();

  //----Show the header with authentification button management (trigger switch by token)----//
  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sort={setSort}
        data={data}
        setData={setData}
        dataFilter={setDataFilter}
        IsLoading={isLoading}
        setIsLoading={setIsLoading}
      />

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

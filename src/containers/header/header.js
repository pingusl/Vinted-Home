import { Link, useNavigate } from "react-router-dom";
//import { useState } from "react";
import logo from "../../logo.svg";
import Filter from "../filter/filter";
import Cookies from "js-cookie";
import "./header.scss";
const token = Cookies.get("userToken");
const removeToken = () => {
  Cookies.remove("userToken");
};
const Header = ({
  setToken,
  setUser,
  searchInput,
  setSearchInput,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sort,
  setSort,
  data,
  setData,
  dataFilter,
  setDataFilter,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  console.log(token);
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
          //Si il n'y a pas de token---affichage des boutons de connexion ou inscription
          token === null ? (
            <>
              <Link className="sign-bt" to="/signup">
                <span>S'inscrire</span>
              </Link>
              <Link className="sign-bt" to="/signin">
                <span>Se connecter</span>
              </Link>
            </>
          ) : (
            //sinon affichage du bouton se déconnecter.
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

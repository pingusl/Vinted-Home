import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../logo.svg";
import magnifyingGlass from "../../img/loupe.svg";
import "./header.scss";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>
      <span className="search">
        <form className="search-bar" id="#search-bar">
          <div className="search-img">
            <img className="search-img" src={magnifyingGlass} alt="search" />
          </div>
          <div className="search-input">
            <input
              className="search-input"
              type="text"
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
              value={searchInput}
            />
          </div>
          <div className="search-clear">
            <button className="clear-bt" type="button">
              X
            </button>
          </div>
        </form>
      </span>
      <span className="button-group">
        <Link className="sign-bt" to="/signup">
          <span>S'inscrire</span>
        </Link>
        <Link className="sign-bt" to="/signin">
          <span>Se connecter</span>
        </Link>
        <span className="green-bt">Vends tes articles</span>
      </span>
    </header>
  );
};
export default Header;

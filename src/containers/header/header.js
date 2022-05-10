import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import Filter from "../filter/filter";

import "./header.scss";

const Header = ({ token, setUser, searchInput, setSearchInput }) => {
  const navigate = useNavigate();
  console.log(token);
  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>
      <Filter />

      <span className="button-group">
        {
          //Si il n'y a pas de token--->affichage des boutons de connexion ou inscription
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
                setUser(null);
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

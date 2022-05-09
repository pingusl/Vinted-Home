import { Link, useNavigate } from "react-router-dom";
import logo from "../../logo.svg";
import Filter from "../filter/filter";

import "./header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>
      <Filter />

      <span className="button-group">
        <Link className="sign-bt" to="/signup">
          <span>S'inscrire</span>
        </Link>
        <Link className="sign-bt" to="/signin">
          <span>Se connecter</span>
        </Link>
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

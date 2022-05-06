import { Link } from "react-router-dom";
import logo from "../../logo.svg";
const Header = () => {
  return (
    <header className="header">
      <span className="logo">
        <img src={logo} className="logo-img" alt="logo-vinted" />
      </span>
      <span className="search">
        <input className="search" type="search" />
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

import logo from "../logo.svg";
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
        <span className="signup-bt">S'inscrire|Se connecter</span>
        <span className="selling-bt">Vends tes articles</span>
      </span>
    </header>
  );
};
export default Header;

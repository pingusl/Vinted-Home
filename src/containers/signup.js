import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup-container">
      {" "}
      <form className="form-contact">
        <h1>S'inscrire</h1>
        <input
          type="text"
          placeholder="Nom utilisateur"
          name="username"
          id="username"
        />

        <input type="email" placeholder="Email" name="email" id="email" />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          id="password"
        />

        <div>
          <input type="checkbox" />
          <label className="checkbox-text">S'inscrire à notre newsletter</label>
        </div>

        <button type="submit" value="signup">
          S'inscrire
        </button>
        <Link to="/signin">
          <p className="signup-text">Tu as déjà un compte? Connecte-toi!</p>
        </Link>
      </form>
    </div>
  );
};
export default Signup;

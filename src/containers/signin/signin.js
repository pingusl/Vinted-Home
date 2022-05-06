import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const objectRequest = () => {
    console.log("le bouton fonctionne");
  };
  return (
    <div className="signin-container">
      <form className="form-contact" id="#log-in-form" onSubmit={objectRequest}>
        <h1>Se connecter</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />

        <button className="green-bt" type="submit">
          Se connecter
        </button>
        <p className="error-message">{message}</p>
        <Link to="/signup">
          <p className="signup-text">Pas encore de compte? Inscris-toi!</p>
        </Link>
      </form>
    </div>
  );
};
export default Signin;

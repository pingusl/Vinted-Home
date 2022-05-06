import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const objectRequest = async (event) => {
    try {
      event.preventDefault();
      //console.log("le bouton fonctionne");
      const data = { email: email, password: password };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        data
      );
      if (response.status === 200) {
        //  console.log("access granted!");
        navigate("/");
      }
    } catch (error) {
      console.log("access refused");
      setMessage("Paramêtres de connexion incorrect...");
    }

    // const token = Cookies.get("token");
    // console.log(data);
    // console.log(response.data.token);
    // console.log(response.status);
    // console.log(token);
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

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const urlServer = "https://lereacteur-vinted-api.herokuapp.com";
//const urlServer = "http://localhost:4000";
//const urlServer = "https://vinted-api-sebastien-lefebvre.herokuapp.com";

const Signin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //console.log("le bouton fonctionne");
      setIsLoading(true);
      const data = { email: email, password: password };
      //      console.log(data);
      const response = await axios.post(`${urlServer}/user/login`, data);
      console.log(response.data.token);
      if (response.data.token !== null) {
        setIsLoading(false);
        setUser(response.data.token);
        //  console.log("access granted!");
        navigate("/");
      } else {
        alert("Une erreur est survenue, veuillez réssayer.");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401 || error.response.status === 400) {
        setErrorMessage("Mauvais email et/ou mot de passe");
        setIsLoading(false);
      }
      setErrorMessage("Paramêtres de connexion incorrect...");
    }
  };
  return (
    <div className="sign-container">
      <form className="sign-form" id="#log-in-form" onSubmit={handleSubmit}>
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
        <span className="sign-login-error-message">{errorMessage}</span>
        {isLoading ? (
          <RotatingLines
            className="home-loader"
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        ) : (
          <button disabled={isLoading ? true : false} type="submit">
            Se connecter
          </button>
        )}

        <Link to="/signup">
          <p className="sign-text">Pas encore de compte? Inscris-toi!</p>
        </Link>
      </form>
    </div>
  );
};
export default Signin;

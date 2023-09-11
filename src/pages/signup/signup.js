import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "cookies-js";

const urlServer = process.env.REACT_APP_LOCAL_BASE_URL;
//const urlServer = "http://localhost:4000";
//const urlServer = "https://vinted-api-sebastien-lefebvre.herokuapp.com";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const objectRequest = async (event) => {
    try {
      event.preventDefault(); //il me manquait ça!! Ainsi que supprimer le useEffect...

      const data = {
        email: email,
        username: username,
        password: password,
        newsletter: newsletter,
      };

      //console.log(data); //Sans stringify reponse serveur > erreur 409 > Response dans inspecteur Cet email existe déjà
      //console.log(JSON.stringify(data)); //Avec stringify reponse serveur > erreur 400
      const response = await axios.post(`${urlServer}/user/signup`, data);
      if (response.data) {
        //console.log("compte créé avec succès!");
        setUser(response.data.token);
        Cookies.set("userToken", response.data.token);

        //----rediriger vers page principal----//
        navigate("/");
        //console.log("redirection de la page réalisée");
      }

      //console.log(response);
    } catch (error) {
      console.log(error.response.status);

      if (error.response.status === 409) {
        //  console.log("le mail est déjà pris");
        setErrorMessage("Cet email à déjà un compte !");
      }
    }
  };

  return (
    <div className="sign-container">
      <form className="sign-form" id="#contactForm" onSubmit={objectRequest}>
        <h1>S'inscrire</h1>
        <input
          type="text"
          placeholder="Nom utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />

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

        <div>
          <input
            type="checkbox"
            id="#newsletter"
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
          <label className="checkbox-text">S'inscrire à notre newsletter</label>
        </div>

        <button className="green-bt" type="submit">
          S'inscrire
        </button>
        <span className="sign-login-error-message">{errorMessage}</span>
        <Link to="/signin">
          <p className="signup-text">Tu as déjà un compte? Connecte-toi!</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

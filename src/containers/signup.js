import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@lereacteur.io");
  const [password, setPassword] = useState("azerty");
  const [newsletter, setNewsletter] = useState(false);
  //const [requestData, setRequestData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //const formSubmit = use(useEffect());
  const ObjectRequest = () => {
    return console.log("ObjectRequest activé");
  };
  useEffect(() => {
    const data = {
      email: email,
      username: username,
      password: password,
      newsletter: newsletter,
    };
    console.log(email);
    console.log(password);
    console.log(data); //Sans stringify reponse serveur > erreur 409
    console.log(JSON.stringify(data)); //Avec stringify reponse serveur > erreur 400

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          JSON.stringify(data)
        );
        setIsLoading(false);

        //setRequestData = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading === true ? (
    <h1>En chargement 🥁</h1>
  ) : (
    <div className="signup-container">
      <form className="form-contact" id="#contactForm" onSubmit={ObjectRequest}>
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
          <input type="checkbox" id="#newsletter" />
          <label className="checkbox-text">S'inscrire à notre newsletter</label>
        </div>

        <button className="green-bt" type="submit">
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

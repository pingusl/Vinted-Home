import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@lereacteur.io");
  const [password, setPassword] = useState("azerty");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //const Navigate = useNavigate();

  const ObjectRequest = async (event) => {
    try {
      event.preventDefault(); //il me manquait ça!! et de supprimer le useEffect
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        JSON.stringify(data)
      );
      if (response.data) {
        console.log("compte créé avec succès!");
        // setToken(response.data.token);
        // Cookies.set("token", response.data.token);

        //rediriger vers page principal
        // Navigate("/");
      }
      // setIsLoading(false);
      console.log(response);
      //setRequestData = response.data;
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      if (error.response.status === 409) {
        //  console.log("le mail est déjà pris");
        setErrorMessage("Cet email à déjà un compte !");
      }
    }
  };

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

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://lereacteur-vinted-api.herokuapp.com/user/signup",
  //       JSON.stringify(data)
  //     );
  //     // setIsLoading(false);
  //     console.log(response);
  //     //setRequestData = response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchData();

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
      <p>{errorMessage}</p>
      <Link to="/signin">
        <p className="signup-text">Tu as déjà un compte? Connecte-toi!</p>
      </Link>
    </form>
  </div>;
};

export default Signup;

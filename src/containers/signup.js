import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [requestData, setRequestData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //const formSubmit = use(useEffect());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          requestData
        );
        console.log(username);
        console.log(email);
        console.log(password);
        //setRequestData = response.data;
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="signup-container">
      <form className="form-contact" id="#contactForm">
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

        <button
          className="green-bt"
          type="submit"
          onClick={() => {
            setRequestData({
              email: `"${email}"`,
              username: `"${username}"`,
              password: `"${password}"`,
              newsletter: true,
            });
          }}
        >
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

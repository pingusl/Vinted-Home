import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const formSubmit = () => {
    const $ = document;
    $.addEventListener("DOMContentLoaded", () => {
      console.log("document loaded");
      $.querySelector("#contactForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = {
          email: $.querySelector("#email").value,
          username: $.querySelector("#username").value,
          password: $.querySelector("#password").value,
          newsletter: $.querySelector("#newsletter").value,
        };
        /* console.log(data); */
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          data
        );
        console.log(response);
      });
    });
  };

  return (
    <div className="signup-container">
      {" "}
      <form className="form-contact" id="#contactForm">
        <h1>S'inscrire</h1>
        <input
          type="text"
          placeholder="Nom utilisateur"
          name="username"
          id="#username"
        />

        <input type="email" placeholder="Email" name="email" id="#email" />
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          id="password"
        />

        <div>
          <input type="checkbox" id="#newsletter" />
          <label className="checkbox-text">S'inscrire à notre newsletter</label>
        </div>

        <button
          className="green-bt"
          type="submit"
          onClick={() => {
            formSubmit();
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

import { Navigate } from "react-router-dom";
import Cookies from "cookies-js";
import axios from "axios";

const Publish = () => {
  try {
    console.log("publish");
    //aller chercher le token dans le cookie--> ok
    const token = Cookies.get("token");
    //si pas de token, rediriger vers authentification-->ok
    //Charger les données à envoyer dans params a l'aide de formData.append
    //envoyer une requête au serveur pour enregistrer une nouvelle offre
    const params = {
      title: "Air Max 90",
      description: "Toutes neuves",
      price: 120,
      condition: "Neuf",
      city: "Paris",
      brand: "Nike",
      size: 44,
      color: "blue",
      picture: "", // le fichier image sélectionné par l'utilisateur
    };
    console.log(params);
    const formData = new FormData();
    formData.append({ params });
    // const response = await axios.post(
    //   "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
    //   params,
    //   { headers: { authorization: "Bearer " + token } }
    // );
    return !Cookies.get("token") ? (
      <Navigate to="/sigin" />
    ) : (
      <h1>Page publish token={token}</h1>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Publish;

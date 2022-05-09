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
      picture: "",
    };

    // const response = await axios.post(
    //   "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
    //   params,
    //   { headers: { authorization: "Bearer " + token } }
    // );
    return !Cookies.get("token") ? (
      <Navigate to="/sigin" />
    ) : (
      <div>
        <h1>Page publish token={token}</h1>
        <form>
          <input type="text" placeholder="Titre" />
          <input type="text" placeholder="descritpion" />
          <input type="text" placeholder="prix" />
          <input type="text" placeholder="condition" />
          <input type="text" placeholder="ville" />
          <input type="text" placeholder="marque" />
          <input type="text" placeholder="taille" />
          <input type="text" placeholder="couleur" />
          <input type="file" placeholder="photo" />
        </form>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Publish;

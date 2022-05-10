import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //récupération des données bancaire de l'utilisateur
    const cardElement = elements.getElement(CardElement);

    //Requete de demande du token via l'API Stripe avec les données bancaire de l'utilisateur.
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "id_buyer", // A remplacer
    });
    console.log(stripeResponse);

    //Récupération du token délivé par l'API
    const stripeToken = stripeResponse.token.id;

    //Requête auprès du back avec le token délivré par L'API
    const response = await axios.post("http://localhost/pay", {
      //placer l'adresse du back Héroku après avoir créé la route /pay
      stripeToken,
    });
    console.log(response.data);

    //Si Back ok, validation de la transaction.
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement effectué !</span>
      )}
    </>
  );
};

export default CheckoutForm;

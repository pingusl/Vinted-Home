import { useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "cookies-js";
import axios from "axios";

const Publish = () => {
  const token = Cookies.get("userToken");
  console.log(token);

  //----States offer----//
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false); //Pour la gestion de l'affichage de l'image en upload
  const [data, setData] = useState(null); //Pour la gestion de l'affichage de l'image en upload

  //---OnClick function----//
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPictureSending(true);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("price", price);
    formData.append("color", color);
    formData.append("picture", picture);
    console.log("publish");

    console.log(formData);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        { headers: { authorization: "Bearer " + token } }
      );
      setData(response.data);
      setIsPictureSending(false);
      //  console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return token ? (
    <Navigate to="/signin" />
  ) : (
    <div>
      <h1>Page publish token={token}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="prix"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="condition"
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ville"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="marque"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="taille"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="couleur"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="file"
          placeholder="photo"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <input type="submit" />
      </form>
      {isPictureSending === true ? (
        <div>Image en chargement</div>
      ) : (
        data && (
          <img
            src={data.product_image.secure_url}
            style={{ width: "200px" }}
            alt=""
          />
        )
      )}
    </div>
  );
};
export default Publish;

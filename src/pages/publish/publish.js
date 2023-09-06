import { useState } from "react";
import { Navigate } from "react-router-dom";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const urlServer = process.env.REACT_APP_BASE_URL;

const Publish = (token) => {
  //----States offer----//
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [acceptedExchange, setAcceptedExchange] = useState(false);
  const [picture, setPicture] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false); //Pour la gestion de l'affichage de l'image en upload
  const [data, setData] = useState(null); //Pour la gestion de l'affichage de l'image en upload
  const [file, setFile] = useState({});
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
    formData.append("picture", file);

    try {
      const response = await axios.post(
        `${urlServer}/offer/publish`,
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

  return !token ? (
    <Navigate to="/signin" />
  ) : (
    <div>
      <div className="publish-container">
        <h1>Publier une annonce</h1>
        <form onSubmit={handleSubmit}>
          <div className="file-select">
            {picture ? (
              <div className="dashed-preview-image">
                <img src={picture} alt="pré-visualisation" />
                <div
                  className="remove-img-button"
                  onClick={() => {
                    setPicture("");
                  }}
                >
                  X
                </div>
              </div>
            ) : (
              <div className="dashed-preview-without">
                <div className="input-design-default">
                  <label htmlFor="file" className="label-file">
                    <span className="input-sign">+</span>
                    <span>Ajouter une photo</span>
                  </label>
                  <input
                    id="file"
                    type="file"
                    className="input-file"
                    onChange={(event) => {
                      setFile(event.target.files[0]);
                      setPicture(URL.createObjectURL(event.target.files[0]));
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  const value = event.target.value;
                  setTitle(value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                value={description}
                placeholder="ex: porté quelquefois, taille correctement"
                onChange={(event) => {
                  const value = event.target.value;
                  setDescription(value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  const value = event.target.value;
                  setBrand(value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                id="selectedSize"
                name="selectedSize"
                placeholder="ex: L / 40 / 12"
                value={size}
                onChange={(event) => {
                  const value = event.target.value;
                  setSize(value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="ex: Fushia"
                value={color}
                onChange={(event) => {
                  const value = event.target.value;
                  setColor(value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                name="wearRate"
                id="wearRate"
                placeholder="Neuf avec étiquette"
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                name="city"
                id="city"
                placeholder="ex: Paris"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
          </div>

          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="0,00 €"
                  value={price}
                  onChange={(event) => {
                    const value = event.target.value;
                    setPrice(value);
                  }}
                />
                <div className="checkbox-input">
                  {acceptedExchange ? (
                    <label
                      htmlFor="exchange"
                      className="checkbox-design-checked"
                    >
                      <FontAwesomeIcon icon="check" size="xs" color="white" />
                    </label>
                  ) : (
                    <label
                      htmlFor="exchange"
                      className="checkbox-design"
                    ></label>
                  )}
                  <input
                    type="checkbox"
                    name="exchange"
                    id="exchange"
                    value={acceptedExchange}
                    onChange={() => setAcceptedExchange(!acceptedExchange)}
                  />
                  <span>Je suis intéressé(e) par les échanges</span>
                </div>
              </div>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>

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

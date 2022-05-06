import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //ok
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  //----Create states for manage data----//
  const [isLoading, setIsLoading] = useState(true); //To be sur data will be loading
  const [data, setData] = useState(); //To record the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data.offers[0]._id);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // console.log(params.Offer_id);
  return isLoading ? (
    <div>en cours de chargement 🥁</div>
  ) : (
    <div>
      <div className="offer-container">Offre: {id}</div>
      <div>
        {
          //Liste des details du produit
          data.product_details.map((item, index) => {
            //Met dans le tableau keys la clef et son contenu
            const keys = Object.keys(item);
            return (
              <div key={index}>
                {/* {Affiche le contenu du tableau keys créé par Object.keys} */}
                {keys[0]}:{item[keys[0]]}
                {console.log(item)}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
export default Offer;

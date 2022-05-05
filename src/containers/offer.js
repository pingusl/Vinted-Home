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
    <div>en cours de chargement</div>
  ) : (
    <div className="offer-container">Offer: {id}</div>
  );
};
export default Offer;

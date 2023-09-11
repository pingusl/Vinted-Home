import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //ok
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "../../assets/styles/offers.css";

const urlServer = process.env.REACT_APP_LOCAL_BASE_URL;
//const urlServer = "http://localhost:4000";
//const urlServer = "https://vinted-api-sebastien-lefebvre.herokuapp.com";

const Offer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //----Create states for manage data----//
  const [isLoading, setIsLoading] = useState(true); //To be sur data will be loading
  const [data, setData] = useState(); //To record the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlServer}/offer/${id}`);
        console.log(response.data);
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
    <RotatingLines
      strokeColor="green"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  ) : (
    <div className="offer-body">
      <div className="offer-container">
        <div className="offer-pictures">
          {data.product_pictures.length === 0 ? (
            <img
              className="offer-picture"
              src={data.product_image.secure_url}
              alt={data.product_name}
            />
          ) : (
            <img
              className="offer-picture"
              src={data.product_pictures[0].secure_url}
              alt={data.product_name}
            />
          )}
        </div>
        <div className="offer-infos" style={{}}>
          <div>
            <span className="offer-price">{data.product_price} €</span>

            <ul className="offer-list">
              {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem);
                return (
                  <li key={index} className="">
                    <span>{keys[0]}</span>
                    <span>{elem[keys[0]]}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="divider" />

          <div className="offer-content">
            <p className="name">{data.product_name}</p>
            <p className="description">{data.product_description}</p>

            <div
              onClick={() => alert("Go to user profile !")}
              className="offer-avatar-username"
            >
              {data.owner && data.owner.account.avatar && (
                <img
                  alt={data.product_name}
                  src={data.owner.account.avatar.secure_url}
                />
              )}
              <span>{data.owner && data.owner.account.username}</span>
            </div>
          </div>

          <button
            onClick={() => {
              const price = data.product_price;
              const protectionFees = (price / 10).toFixed(2);
              const shippingFees = (protectionFees * 2).toFixed(2);
              const total =
                Number(price) + Number(protectionFees) + Number(shippingFees);

              navigate("/payment", {
                state: {
                  productName: data.product_name,
                  totalPrice: total,
                  protectionFees: protectionFees,
                  shippingFees: shippingFees,
                  price: data.product_price,
                },
              });
            }}
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;

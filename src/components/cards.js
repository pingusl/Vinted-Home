import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  console.log("Card L6:");
  return (
    <div className="card-container">
      {/* <div
        onClick={() => alert("Go to user profile !")}
        className="card-avatar-username"
      >
        {data.owner && data.owner.account.avatar && (
          <img
            alt={data.product_name}
            src={data.owner.account.avatar.secure_url}
          />
        )}
        <span>{data.owner && data.owner.account.username}</span>
      </div> */}

      <div onClick={() => navigate(`offer/${data._id}`)}>
        <img alt={data.product_name} src={data.product_image.secure_url} />
        <div className="card-price-size-brand">
          <span>{data.product_price} €</span>
          <span>{data.product_details[1]["taille"]}</span>
          <span>{data.product_details[0]["marque"]}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

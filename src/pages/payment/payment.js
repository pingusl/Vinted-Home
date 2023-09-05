import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../../assets/styles/payment.css";
import CheckoutForm from "../../components/checkoutForm";
import ProductSummary from "../../components/productSummary";

const Payment = () => {
  const location = useLocation();
  const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);
  const { productName, totalPrice, protectionFees, shippingFees, price } =
    location.state;

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <ProductSummary
          price={price}
          protectionFees={protectionFees}
          shippingFees={shippingFees}
          totalPrice={totalPrice}
        />
        <div className="payment-card">
          <div className="content">
            Il ne vous reste plus qu'un étape pour vous offrir
            <span className="bold"> {productName}</span>. Vous allez payer{" "}
            <span className="bold">{totalPrice} €</span> (frais de protection et
            frais de port inclus).
            <div className="divider" />
            <Elements stripe={stripePromise}>
              <CheckoutForm productName={productName} totalPrice={totalPrice} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

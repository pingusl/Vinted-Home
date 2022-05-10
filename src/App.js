import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./containers/header/header";
import Home from "./containers/home/home";
import Signup from "./containers/signup/signup";
import Signin from "./containers/signin/signin";
import Offer from "./containers/offer/offer";
import Publish from "./containers/publish/publish";
import NoMatch from "./containers/nomatch";
import Cookies from "cookies-js";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./containers/checkoutform/checkoutform";
const stripePromise = loadStripe(
  "pk_test_51KxteNK5InFIuhoyx5KbGpsHB85nj5rUB33Dp2vMZrIVWIEskzu0KCc2PgGI20qEq26NKMLFLkUExU13mJ9Ithfx00chZDzBKh"
); //Clef public stripe

function App() {
  const [token, setToken] = useState(Cookies.get("") || null);
  const [searchInput, setSearchInput] = useState("Rechercher des articles");
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [sort, setSort] = useState("price-asc");
  const [data, setData] = useState("");
  const [showResult, setShowResult] = useState("");

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("création cookie");
      Cookies.set("userToken", token, { expire: 7 });
    } else {
      //Action de déconnexion
      console.log("suppression cookie");
      Cookies.removeItem("userToken");
    }
    setToken(token);
    console.log(`mise a jour du state Token avec ${token}`);
  };

  return (
    <Router>
      <Header
        token={token}
        setUser={setUser}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sort={setSort}
        data={data}
        setData={setData}
        showResult={showResult}
        setShowResult={setShowResult}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        {/* passage de la fonction -setUser- en props de Signup */}
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish />} />
        <Route
          path="/checkoutForm"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

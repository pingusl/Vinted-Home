//----Load modules----//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "cookies-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//----Routes----//
import Home from "./containers/home/home";
import Offer from "./containers/offer/offer";
import Header from "./containers/header/header";
import Signup from "./containers/signup/signup";
import Signin from "./containers/signin/signin";
import Publish from "./containers/publish/publish";
import CheckoutForm from "./containers/checkoutform/checkoutform";

//----Route de sécurité----//
import NoMatch from "./containers/nomatch";

//----CSS impot----//
import "./App.css";

//----Clef public stripe----//
const stripePromise = loadStripe(
  "pk_test_51KxteNK5InFIuhoyx5KbGpsHB85nj5rUB33Dp2vMZrIVWIEskzu0KCc2PgGI20qEq26NKMLFLkUExU13mJ9Ithfx00chZDzBKh"
);

function App() {
  //---- Authorization States----//
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  //----Filter Sates----//
  const [searchInput, setSearchInput] = useState("Rechercher des articles");
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [sort, setSort] = useState("price-asc");
  const [data, setData] = useState("");
  const [dataFilter, setDataFilter] = useState("");

  //----Loading State----//
  const [isLoading, setIsLoading] = useState(true);

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
        setToken={setToken}
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
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        isLoading={isLoading}
        setisLoading={setIsLoading}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              data={data}
              setData={setData}
              dataFilter={dataFilter}
              setDatafilter={setDataFilter}
            />
          }
        />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        {/* passage de la fonction -setUser- en props de Signup */}
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish token={token} />} />
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

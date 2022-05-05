import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./containers/header";
import Home from "./containers/home";
import Offer from "./containers/offer";
import NoMatch from "./containers/nomatch";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //----Create states for manage data----//
  const [isLoading, setIsLoading] = useState(true); //To be sur data will be loading
  const [data, setData] = useState(); //To record the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data.offers[0]._id);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement 🥁</h1>
  ) : (
    <Router>
      <Header />
      <Link to="/">Go to Home</Link>
      <Link to="/offer">Go to Offer</Link>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

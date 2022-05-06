import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./containers/header/header";
import Home from "./containers/home/home";
import Signup from "./containers/signup/signup";
import Login from "./containers/login/login";
import Offer from "./containers/offer/offer";
import NoMatch from "./containers/nomatch";
import Cookies from "cookies-js";
import "./App.css";

function App() {
  const [token, setToken] = useState(Cookies.get("") || null);
  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("création cookie");
      Cookies.set("userToken", token);
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
      <Header />
      <Link to="/">Go to Home</Link>
      <Link to="/offer">Go to Offer</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

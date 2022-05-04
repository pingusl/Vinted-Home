import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./containers/header";
import Home from "./containers/home";
import Offer from "./containers/offer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Link to="/home">Go to Home</Link>
      <Link to="/offer">Go to Offer</Link>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

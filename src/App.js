import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./containers/header";
import Home from "./containers/home";
import Offer from "./containers/offer";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [datat, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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

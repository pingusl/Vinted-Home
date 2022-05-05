import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./containers/header";
import Home from "./containers/home";
import Signup from "./containers/signup";
import Offer from "./containers/offer";
import NoMatch from "./containers/nomatch";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Link to="/">Go to Home</Link>
      <Link to="/offer">Go to Offer</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;

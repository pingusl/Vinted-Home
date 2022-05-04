import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/home";
import "./App.css";

function App() {
  return (
    <Router>
      <Link to="/home">Go to Home</Link>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

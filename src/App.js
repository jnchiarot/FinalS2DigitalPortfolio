import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Contact from "./Contact";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <Router>
          <div className="footer-left">
            <FaLinkedin />
          </div>
          <div className="footer-left">
            <FaFacebook />
          </div>
          <div className="footer-middle">
            <ScrollLink to="header" smooth={true}>
              Back to top
            </ScrollLink>
          </div>
          <div className="footer-right">
            <Link to="/contact">
              <button className="footer-button">Contact</button>
            </Link>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/" element={0}></Route>
          </Routes>
        </Router>
      </footer>
    </div>
  );
};

export default Footer;

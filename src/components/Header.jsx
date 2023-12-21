import About from "./About";
import Volunteer from "./Volunteer";
import Programming from "./Programming";
import Hobbies from "./Hobbies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeMain from "./HomeMain";
import { FaBriefcase } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container">
      <Router>
        <div className="header">
          <header id="header">
            <h1>
              <FaBriefcase /> My Digital Portfolio
            </h1>
          </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/programming">Computer Programming</Link>
              </li>

              <li>
                <Link to="/volunteer">Volunteering</Link>
              </li>

              <li>
                <Link to="/hobbies">Hobbies</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <br />
        <Routes>
          <Route path="/" element={<HomeMain />}></Route>
          <Route path="/programming" element={<Programming />}></Route>
          <Route path="/volunteer" element={<Volunteer />}></Route>
          <Route path="/hobbies" element={<Hobbies />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Header;

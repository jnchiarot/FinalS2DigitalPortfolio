import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="close-link">
      <FaEnvelope /> natalina.chiarot@keyin.com
      <br />
      <Link to="/">Close</Link>
    </div>
  );
};

export default Contact;

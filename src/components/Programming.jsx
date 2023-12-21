import { Link as ScrollLink } from "react-scroll";

const Programming = () => {
  return (
    <div className="main-box">
      <h2>Computer Programming</h2>
      <nav>
        <ul className="centering">
          <li>
            <ScrollLink to="beginning" smooth={true} duration={500}>
              In the Beginning
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="html" smooth={true}>
              HTML/CSS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="python" smooth={true}>
              Python
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="javascript" smooth={true}>
              JavaScript Basics
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="frontend" smooth={true}>
              Front-End Development
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <br />
      <h3 id="beginning">In The Beginning:</h3>
      <p className="subtext">
        Before I knew really anything about software development.
      </p>

      <div className="wrap">
        <img
          src="/images/weekendnachosweb.jpg"
          alt="Webpage"
          className="img-class"
        />
        <div className="cap">
          One of the very first times I used HTML and CSS.
        </div>
      </div>
      <div className="wrap">
        <img src="/images/turtlesweb.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          One of the very first times I used HTML and CSS.
        </div>
      </div>
      <div className="wrap">
        <img
          src="/images/fieldagentweb.jpg"
          alt="Webpage"
          className="img-class"
        />
        <div className="cap">
          One of the very first times I used HTML and CSS.
        </div>
      </div>
      <br />
      <h3 id="html">HTML/CSS:</h3>
      <div className="wrap">
        <img src="/images/img1.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          The first assignment I completed using HTML and CSS.
        </div>
      </div>
      <div className="wrap">
        <img src="/images/img2.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          The second assignment I completed using HTML and CSS.
        </div>
      </div>
      <div className="wrap">
        <img src="/images/img6.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          Assignment completed early semester two using HTML and CSS.
        </div>
      </div>
      <br />
      <h3 id="python">Python:</h3>
      <div className="wrap">
        <img
          src="/images/python1.jpg"
          alt="Python output"
          className="img-class"
        />
        <div className="cap">The first python assignment I completed.</div>
      </div>
      <div className="wrap">
        <img
          src="/images/python2.jpg"
          alt="Python output"
          className="img-class"
        />
        <div className="cap">Python validations.</div>
      </div>
      <div className="wrap">
        <img
          src="/images/python3.jpg"
          alt="Python output"
          className="img-class"
        />
        <div className="cap">Python exception report.</div>
      </div>
      <br />
      <h3 id="javascript">JavaScript Basics:</h3>
      <div className="wrap">
        <img src="/images/img3.jpg" alt="Webpage" className="img-class" />
        <div className="cap">First JavaScript assignment I completed.</div>
      </div>
      <div className="wrap">
        <img src="/images/img4.jpg" alt="Webpage" className="img-class" />
        <div className="cap">Second JavaScript assignment I completed.</div>
      </div>
      <div className="wrap">
        <img src="/images/img5.jpg" alt="Webpage" className="img-class" />
        <div className="cap">Third JavaScript assignment I completed.</div>
      </div>
      <br />
      <h3 id="frontend">Front-End Development:</h3>
      <p className="subtext">HTML, CSS and JavaScript.</p>
      <div className="wrap">
        <img src="/images/img8.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          Order online form with DOM manipulation and console logging of the
          data.
        </div>
      </div>
      <div className="wrap">
        <img src="/images/img7.jpg" alt="Webpage" className="img-class" />
        <div className="cap">
          Dog breed pictures using fetch API in vanilla JavaScript.
        </div>
      </div>

      <br />
    </div>
  );
};

export default Programming;

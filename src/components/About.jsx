const About = () => {
  return (
    <div className="main-box">
      <h2>About</h2>
      <br />
      <p className="subtext">
        I graduated highschool in 2022 with no idea what I wanted to do with my
        future. In early 2023 the TechNL scholarship offered fully paid tuition
        for the Keyin Software Development program and with no prior experience
        with coding I went for the oppurtunity and was accepted! In anticipation
        for the program I attended a free SheCodes session which got me started
        on my own journey of messing around with some basic HTML and CSS. Since
        then I have been constantly learning more and more all of the time. It
        is a very rewarding experience and I am eager to expand my knowledge
        further.
      </p>
      <br />
      <h3 className="about-box-text">Certificates & Credentials:</h3>
      <div className="about-box">
        <img src="/images/aws-certificate.png" alt="" className="aws-image" />

        <a href="https://keyin.com/" target="_blank">
          <img src="/images/KeyinNavLogo.png" alt="" className="about-images" />
        </a>

        <a href="https://technl.ca/" target="_blank">
          <img
            src="/images/TechNL-Logo-RGB-Horizontal-scaled-PhotoRoom.png-PhotoRoom.png"
            alt=""
            className="about-images"
          />
        </a>
        <a href="https://www.shecodes.io/" target="_blank">
          <img
            src="/images/shecodes-logo.png"
            alt=""
            className="about-images"
          />
        </a>
      </div>
    </div>
  );
};

export default About;

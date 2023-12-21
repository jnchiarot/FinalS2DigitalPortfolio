import ImageSlider from "./ImageSlider";

const Volunteer = () => {
  const slides = [
    { url: "/images/IMG_2285.jpg", title: "Fundraiser Show 1" },
    { url: "/images/IMG_2286.jpg", title: "Fundraiser Show 2" },
    { url: "/images/IMG_2287.jpg", title: "Fundraiser Show 3" },
    { url: "/images/IMG_2289.jpg", title: "Fundraiser Show 4" },
  ];

  const containerStyles = {
    width: "360px",
    height: "470px",
    margin: "0 auto",
  };

  return (
    <div className="main-box">
      <h2>Volunteer Work</h2> <br />
      <h3>Fundraiser Shows:</h3>
      <p className="subtext">
        Community is very important to me and we have a responsibility to look
        out for one another and help the ones in need. Here are the posters from
        fundraiser shows that bands I'm in have been apart of. All proceeds were
        donated. I take great pride in being part of such an amazing community.
      </p>
      <br />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <br />
      <div className="volunteer-box">
        <h3>Vera Perlin Society:</h3>
        <p className="subtext">
          Accompanying my dad, a member of the progress club I have volunteered
          at numerous fundraising dinner, auction and ticket selling events as
          well as the christmas dance for the clients.
        </p>
        <div className="wrap">
          <img
            src="/images/IMG_2221.jpg"
            alt=""
            style={{ width: "275px" }}
            className="img-class"
          />
          <div className="cap">
            Christmas dance for the Vera Perlin clients.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

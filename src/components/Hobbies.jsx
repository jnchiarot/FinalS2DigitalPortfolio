const Hobbies = () => {
  return (
    <div className="main-box">
      <h2>Hobbies</h2>
      <br />
      <div className="hobby-box">
        <h3>Playing Music:</h3>
        <br />
        <p className="subtext">
          I play in a few bands with my friends, specifically playing bass and
          doing vocals. I have always loved going to local shows and playing
          them too. Music is a huge passion of mine and I am very grateful for
          our local music scene.
          <br />I have learned how to play many instruments throughout my life
          including bass, guitar, piano and a bit of drums!
          <br />
          Music is big not only in my life and within the scene but as well as
          within my family!
        </p>
      </div>
      <div className="wrap">
        <img
          src="/images/IMG_2283.jpg"
          alt=""
          style={{ width: "300px" }}
          className="img-class"
        />
        <div className="cap">
          Playing bass in one of the bands I'm in at a house show.
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    width: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "1em",
    border: "solid 5px",
    borderColor: "rgb(28, 28, 28)",
    boxShadow: "0 5px 0 rgb(45, 45, 61)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "-30px",
    fontSize: "45px",
    color: "rgb(210, 210, 255)",
    zIndex: 1,
    cursor: "pointer",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 rgb(28, 28, 28), 2px -2px 0 rgb(28, 28, 28), -2px 2px 0 rgb(28, 28, 28), 2px 2px 0 rgb(28, 28, 28)",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "-30px",
    fontSize: "45px",
    color: "rgb(210, 210, 255)",
    zIndex: 1,
    cursor: "pointer",
    fontWeight: "bold",
    textShadow:
      "-2px -2px 0 rgb(28, 28, 28), 2px -2px 0 rgb(28, 28, 28), -2px 2px 0 rgb(28, 28, 28), 2px 2px 0 rgb(28, 28, 28)",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "30px",
    fontWeight: "bold",
    color: "rgb(210, 210, 255)",
    textShadow:
      "-2px -2px 0 rgb(28, 28, 28), 2px -2px 0 rgb(28, 28, 28), -2px 2px 0 rgb(28, 28, 28), 2px 2px 0 rgb(28, 28, 28)",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &lt;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &gt;
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            &#x2022;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

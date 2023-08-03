import { useState } from "react";
import "./styles.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextImg = () => {
    setCurrentIndex((idx) => (idx + 1) % images.length);
  };

  const prevImg = () => {
    setCurrentIndex((idx) => (idx - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="left" onClick={nextImg}>
        ◀️
      </button>

      <div className="slide">
        <img src={images[currentIndex]} alt="img" />
      </div>

      <button className="right" onClick={prevImg}>
        ▶️
      </button>
    </div>
  );
};

export default ImageCarousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { default as GImg } from "gatsby-image";

const CarouselEl = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      useKeyboardArrows
      emulateTouch
    >
      {images.map(i => (
        <div key={i.node.id}>
          <GImg fluid={i.node.childImageSharp.fluid} alt={i.node.name} />
          <p className="legend">{i.node.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselEl;

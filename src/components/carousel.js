import React from "react";
import { default as GImg } from "gatsby-image";
import styled from "react-emotion";

const ImageHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ImageNode = styled.div`
  width: calc(50% - 4rem);
  text-align: center;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: calc(100% - 2rem);
  }
`;
const CarouselEl = ({ images }) => {
  return (
    <ImageHolder>
      {images.map((i) => (
        <ImageNode key={i.node.id}>
          <GImg fluid={i.node.childImageSharp.fluid} alt={i.node.name} />
          <p className="legend">{i.node.name}</p>
        </ImageNode>
      ))}
    </ImageHolder>
  );
};

export default CarouselEl;

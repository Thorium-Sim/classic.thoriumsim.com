import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselEl = () => {
  return (
    <Carousel infiniteLoop autoPlay useKeyboardArrows emulateTouch>
      <div>
        <img src={require("../img/card_navigation.jpg")} alt="Navigation" />
        <p className="legend">Navigation</p>
      </div>
      <div>
        <img src={require("../img/core_next.jpg")} alt="Next Core" />
        <p className="legend">Next Core</p>
      </div>
      <div>
        <img
          src={require("../img/card_stealthField_2.jpg")}
          alt="Stealth Field"
        />
        <p className="legend">Stealth Field</p>
      </div>
      <div>
        <img src={require("../img/card_targeting_1.jpg")} alt="Targeting" />
        <p className="legend">Targeting</p>
      </div>
      <div>
        <img src={require("../img/card_reactor.jpg")} alt="Reactor Control" />
        <p className="legend">Reactor Control</p>
      </div>
      <div>
        <img src={require("../img/card_shields.jpg")} alt="Shields" />
        <p className="legend">Shields</p>
      </div>
      <div>
        <img src={require("../img/card_thrusters.jpg")} alt="Thrusters" />
        <p className="legend">Thrusters</p>
      </div>
      <div>
        <img src={require("../img/card_tractorBeam.jpg")} alt="Tractor Beam" />
        <p className="legend">Tractor Beam</p>
      </div>
      <div>
        <img src={require("../img/sickbay.jpg")} alt="Sickbay" />
        <p className="legend">Sickbay</p>
      </div>
    </Carousel>
  );
};

export default CarouselEl;

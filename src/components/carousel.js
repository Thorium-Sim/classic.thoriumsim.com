import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselEl = () => {
  return (
    <Carousel infiniteLoop autoPlay useKeyboardArrows emulateTouch>
      <div>
        <img src={require('../img/card_navigation.jpg')} />
        <p className="legend">Navigation</p>
      </div>
      <div>
        <img src={require('../img/core_next.jpg')} />
        <p className="legend">Next Core</p>
      </div>
      <div>
        <img src={require('../img/card_stealthField_2.jpg')} />
        <p className="legend">Stealth Field</p>
      </div>
      <div>
        <img src={require('../img/card_targeting_1.jpg')} />
        <p className="legend">Targeting</p>
      </div>
      <div>
        <img src={require('../img/card_reactor.jpg')} />
        <p className="legend">Reactor Control</p>
      </div>
      <div>
        <img src={require('../img/card_shields.jpg')} />
        <p className="legend">Shields</p>
      </div>
      <div>
        <img src={require('../img/card_thrusters.jpg')} />
        <p className="legend">Thrusters</p>
      </div>
      <div>
        <img src={require('../img/card_tractorBeam.jpg')} />
        <p className="legend">Tractor Beam</p>
      </div>
      <div>
        <img src={require('../img/sickbay.jpg')} />
        <p className="legend">Sickbay</p>
      </div>
    </Carousel>
  )
}

export default CarouselEl

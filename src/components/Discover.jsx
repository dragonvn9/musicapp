import React from 'react'
import home1 from '../assets/images_music/home.png';
import home2 from '../assets/images_music/home2.png';
import home3 from '../assets/images_music/home3.png';
import home4 from '../assets/images_music/home4.png';

function Discover() {
  return (
    <div>
      <div className="couser">
        <div className="home-img1">
          <img src={home1} alt="" />
        </div>
        <div className="home-img2">
          <img src={home2} alt="" />
        </div>
        <div className="home img3">
          <img src={home3} alt="" />
        </div>
        <div className="home img4">
          <img src={home4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Discover
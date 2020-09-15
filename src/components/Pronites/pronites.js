import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/00_Preview.jpg')} />
      <p className="legend">DJ NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/010-7.png')}/>
      <p className="legend">COMEDY NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/cultural-night.jpg')} />
      <p className="legend">CULTURAL NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/img_03dd5d37d7c297a8e17d451de64700db_1499419198017_original.jpg')}/>
      <p className="legend">EDM NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/https___eventimages.insider.in_image%2Fmain%2FONQsHgSEKzd61NT2jwFd_bollywood_night_event.jpg')} />
      <p className="legend">BOLLYWOOD NIGHT</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/Car-Stunt-Show.jpg')} />
      <p className="legend">STUNT SHOW</p>
    </div>
    <div>
      <img alt="" src={require('../../assets/img/Pronites/funzone.jpg')}/>
      <p className="legend">FUNZONE</p>
    </div>
  </Carousel>
);

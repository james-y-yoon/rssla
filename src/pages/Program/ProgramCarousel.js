import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import pic1 from '../pictures/2019_Conference.jpg';
import pic2 from '../pictures/banner-bg4.jpg';


class ProgramCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src = {pic1}/>
                    <p className="legend">LAMP</p>
                </div>
                <div>
                    <img src = {pic2} />
                    <p className="legend">SPIEL</p>
                </div>

            </Carousel>
        );
    }
}

export default ProgramCarousel
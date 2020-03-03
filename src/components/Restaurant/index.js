import React from 'react'
import './restaurant.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from "react-router-dom";

function Restaurant (props) {
    return(
        <div className="restaurant" >
           
            <h1 className="avi-title">Avi</h1>
            <p className=" avi-description">
                This app was completed as a group project along with the UX students.
                What makes it a unique project is that you can put in any ingredient that you have around the house,
                and it will tell you a lot of ideas of what you can make to eat with it.  
            </p>

            <div>
                <img className="avi-img" src="/img/restaurant.png"  alt=""/>
            </div>
            <div className="go-back-link"><Link to="/">Go Back To Projects</Link></div>





            {/* <div className="carouselContainer">
            <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}><img src="/img/restaurant.png"  alt=""/></Slide>
                        <Slide index={1}><img src="/img/avi-slide-two.png"  alt=""/></Slide>
                        <Slide index={2}><img src="/img/avi-slide-three.png"  alt=""/></Slide>
                    </Slider>
                    <ButtonBack className="back">Back</ButtonBack>
                    <ButtonNext className="next">Next</ButtonNext>
                </CarouselProvider>
            </div> */}
        </div>
       
    )
}

export default Restaurant
import React from 'react'
import './RoutineApp.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from "react-router-dom";

function RoutineApp (props) {
    return(
        <div className="shop-app" >
           
            <div>
                <h1 className="shop-title">What's in store?</h1>
            </div>
           
            <p className="shop-description">
                This app is a full-stack app.  
                The user will be able to create products to sell if they have items for sale.
                Also, the user can purchase items from other users.
                The app is exciting because many users can add items so the products can change often.         
            </p>

            <div>
                <img className="shop-img" src="/img/home.png"  alt=""/>
            </div>
            <div className="go-back-link"><Link to="/">Go Back To Projects</Link></div>


 
            <div className="carouselContainer">
                {/* <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <div>
                    <Slider className="swipe-img">
                        <Slide index={0}><img src="/img/home.png" alt=""/></Slide>
                        <Slide index={1}><img src="/img/cart.png" alt=""/></Slide>
                        <Slide index={2}><img src="/img/app-diagram.png" alt=""/></Slide>
                    </Slider>

                    </div>
                  
                    <ButtonBack className="back">Back</ButtonBack>
                    <ButtonNext className="next">Next</ButtonNext>
                </CarouselProvider> */}
            </div> 
           
        </div>
       
    )
}

export default RoutineApp 
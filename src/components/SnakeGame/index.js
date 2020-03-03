import React from 'react'
import './SnakeGame.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from "react-router-dom";

function SnakeGame (props) {
    return(
        <div className="snakeGame" >
            
            <h1 className="snake-title">Hungry Snake</h1>
            <p className="snake-description">
                 A relaxing game in which the user plays as a snake character with the objective of obtaining fruit and avoiding enemies. Game was built using HTML, CSS, and JavaScript to implement developing skillset.
            </p>
            <div>
                <img className="snake-img" src="/img/snake.png"  alt=""/>
            </div>
            <div className="go-back-link"><Link to="/">Go Back To Projects</Link></div>


            

            {/* <div className="carouselContainer">
            <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <Slider>
                        <Slide index={0}><img src="/img/snake.png"  alt=""/></Slide>
                        <Slide index={1}><img src="/img/snake.png" alt=""/></Slide>
                        <Slide index={2}><img src="/img/snake.png" alt=""/></Slide>
                    </Slider>
                    <ButtonBack className="back">Back</ButtonBack>
                    <ButtonNext className="next">Next</ButtonNext>
                </CarouselProvider>
            </div> */}
           
        </div>
       
    )
}

export default SnakeGame
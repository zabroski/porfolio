import React from 'react'
import './MusicApp.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from "react-router-dom";

function MusicApp (props) {
    return(
        <div className="musi-app" >
            <div>
                <h1 className="music-title">music is life</h1>
            </div>
            <p className="music-description">
                A simple app where a user can access biographical information and news about musical artists.
                 App was built using HTML, CSS, JavaScript, React.js, and API.
            </p>
        
            <div>
                <img className="music-img" src="/img/musico.png"   alt=""/>
            </div>
            <div className="go-back-link"><Link to="/">Go Back To Projects</Link></div>










            {/* <div className="carouselContainer"> */}
            {/* <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                >
                    <Slider className="sliderr">
                        <Slide index={0}><img src="/img/musico.png" alt=""/></Slide>
                        <Slide index={1}><img src="/img/music-slide-one.png" alt=""/></Slide>
                        <Slide index={2}><img src="/img/music-slide.png" alt="" /></Slide>
                    </Slider>


                    <ButtonBack className="back">Back</ButtonBack>
                    <ButtonNext className="next">Next</ButtonNext>
                </CarouselProvider> */}
            {/* </div> */}
            {/* <div className="goBackLink"><Link to="/">Go Back To Projects</Link></div> */}
        </div>
       
    )
}

export default MusicApp
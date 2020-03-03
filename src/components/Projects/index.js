import React from 'react';
import './Project.css';
import {Link} from "react-router-dom";

// import avi from './avi.png'


function Projects() {
    return(
        <div className="project" >
             <div>
                <Link to="/project/routine"><img src="/img/home.png" alt="" /></Link>
            </div>

            <div>
                <Link to="/project/restaurant"><img src="/img/restaurant.png"  alt=""/></Link>
            </div>

            <div>
                <Link to="/project/snake"><img src="/img/snake.png" alt="music" /></Link>  
            </div>
           
            <div>
            <Link to="/project/music"><img src="/img/musico.png" alt="" /></Link>
            </div>
        </div>
       
    )
}

export default Projects
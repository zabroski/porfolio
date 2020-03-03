import React from 'react'
import './Icone.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

function Icone() {
    return(
        <div className="icone">
            <ul className="list">
                <a className="email" href="mailto:sheridanzabre@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                <a className="link" href="https://www.linkedin.com/in/zabreissouf/" ><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="git" href="https://github.com/zabroski?tab=repositories"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="resume" href="img/resumee.pdf" target="blank"><FontAwesomeIcon icon={faFile} /></a> 
            </ul>
           
        </div>
       
    )
}

export default Icone
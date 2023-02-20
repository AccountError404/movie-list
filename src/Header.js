import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
return(
    <div>
        <FontAwesomeIcon icon={faHeart} size="xl" beat pull="left"/>      
        <FontAwesomeIcon icon={faVideo} size="xl" />    
        <p>
            If you have a love for movies, youre in the right place.
        </p>
    </div>
)

}

export default Header
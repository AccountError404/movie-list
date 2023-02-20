import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
return(
    <header>  
        
        <FontAwesomeIcon icon={faHeart} size="xl" beat pull="left"/>
       
            <FontAwesomeIcon icon={faVideo} size="xl" />
        
        
         
    </header>
)

}

export default Header
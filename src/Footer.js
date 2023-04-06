import React from 'react';
import Card from 'react-bootstrap/Card';


const Footer = () => {
return(
    <Card>
        <Card.Body>
      <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
         <cite title="Source Title"> This App uses the TMDB API but is not endorsed or certified by ..    
         <img src = './TMBD.svg' width = {150} length = {150} alt ='TMBD' />
         </cite>
  
        </footer>
      </blockquote>
    </Card.Body>
  </Card>
)

}

export default Footer
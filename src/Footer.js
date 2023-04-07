import React from 'react';
import Card from 'react-bootstrap/Card';


const Footer = () => {
return(          
  <footer> 
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1, backgroundColor: "#90cea1", height: "3px" }} />
        <p style={{ margin: "0 10px" }}>
          <cite title="Source Title"> This App uses the TMDB API but is not endorsed or certified by ..    
          <img src = './TMBD.svg' width = {150} length = {150} alt ='TMBD' />
          </cite>
        </p>
     <div style={{ flex: 1, backgroundColor: "#01b4e4", height: "3px" }} />
    </div>
  </footer>
)}

export default Footer
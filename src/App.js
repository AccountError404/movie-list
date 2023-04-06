//import logo from './logo.svg'; (from default react app)
import './App.css';
import Footer from './Footer';


import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faHeart } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand >  
          <FontAwesomeIcon icon={faHeart} size="xl" beat pull="left"/>      
          <FontAwesomeIcon icon={faVideo} size="lg" />  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">???</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Anime
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Missing Something?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>          
         <Container center>
          <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
         </Container>
         <Nav>
          <Nav.Link href="#list">My List</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
          </Nav>
         </Navbar.Collapse>
      </Container>
     </Navbar>
   
      <Footer/>
     </div>
     
     
  );
}



export default App;

//import logo from './logo.svg'; (from default react app)
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faHeart } from '@fortawesome/free-solid-svg-icons'

import Footer from './Footer';

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
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/new">New </Nav.Link>
            <Nav.Link href="/leaving">Leaving Soon</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
            <NavDropdown.Item href="/genre/action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/genre/adventure">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="/genre/animation">Animation</NavDropdown.Item>
            <NavDropdown.Item href="/genre/biography">Biography</NavDropdown.Item>
            <NavDropdown.Item href="/genre/comedy">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="/genre/crime">Crime</NavDropdown.Item>
            <NavDropdown.Item href="/genre/documentary">Documentary</NavDropdown.Item>
            <NavDropdown.Item href="/genre/drama">Drama</NavDropdown.Item>
            <NavDropdown.Item href="/genre/family">Family</NavDropdown.Item>
            <NavDropdown.Item href="/genre/fantasy">Fantasy</NavDropdown.Item>
            <NavDropdown.Item href="/genre/history">History</NavDropdown.Item>
            <NavDropdown.Item href="/genre/horror">Horror</NavDropdown.Item>
            <NavDropdown.Item href="/genre/musicals">Musicals</NavDropdown.Item>
            <NavDropdown.Item href="/genre/mystery">Mystery</NavDropdown.Item>
            <NavDropdown.Item href="/genre/romance">Romance</NavDropdown.Item>
            <NavDropdown.Item href="/genre/scifi">Sci-Fi</NavDropdown.Item>
            <NavDropdown.Item href="/genre/sport">Sport</NavDropdown.Item>
            <NavDropdown.Item href="/genre/thriller">Thriller</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/feedback">Missing Something?</NavDropdown.Item>
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
          <Nav.Link href="/stuff">My Stuff</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    <Footer/>
  </div>
  );
}



export default App;

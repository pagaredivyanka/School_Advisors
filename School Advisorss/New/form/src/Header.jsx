import React from 'react'
import {Container,Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Container fluid>
      <Navbar collapseOnSelect style={{borderRadius:"15px",padding:"10px",marginTop:"15px"}} expand="lg" bg=" " variant=" ">
      <Navbar.Brand style={{marginLeft:"9px"}}>Registration Form</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
<Link to='registration' style={{ color: 'black', backgroundColor: 'transparent', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}>Details</Link>
          </Nav.Link>
          <Link
                  to="file:///C:/Users/athar/OneDrive/Documents/School%20Advisorss/Schools.html"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                    backgroundColor: "transparent",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
        </Nav>
       
      </Navbar.Collapse>
    </Navbar>
    </Container>
    </div>
  )
}

export default Header

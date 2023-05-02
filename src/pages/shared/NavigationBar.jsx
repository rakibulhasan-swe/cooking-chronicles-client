import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="py-3" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-4">
            Cooking Chronicles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Link to={"/login"}>
                <Button variant="primary" className="px-4">
                  Login
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

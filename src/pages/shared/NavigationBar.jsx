import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import logo from '../../assets/logo.png';

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  // logout
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err?.message));
  };
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
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              <Link className="nav-link" to={"/blog"}>
                Blog
              </Link>
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </Nav>
            <div className="d-flex align-items-center">
              {user && (
                <Link>
                  {user?.photoURL ? (
                    <>
                      <img
                        className="rounded-circle"
                        style={{ width: "2.4rem" }}
                        src={user?.photoURL}
                        alt="user image"
                      />
                    </>
                  ) : (
                    <Button variant="warning">{user?.displayName}</Button>
                  )}
                </Link>
              )}
              {user ? (
                <Link className="btn btn-danger ms-3" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="btn btn-primary" to={"/login"}>
                  Login
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

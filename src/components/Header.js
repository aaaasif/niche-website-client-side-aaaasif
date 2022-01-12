import React from "react";
import "./../assets/css/header.css";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useContexts from "../hooks/useContexts.js";
const Header = () => {
  const { email, logout, loading} = useContexts();
  return (
    <Navbar className="navBar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img width="120px" src="https://i.ibb.co/vsxmmvr/cover.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link activeClassName="current" as={NavLink} to="/home">
              Home
            </Nav.Link>

            <Nav.Link activeClassName="current" as={NavLink} to="/products">
              Products
            </Nav.Link>
            <Nav.Link activeClassName="current" as={NavLink} to="/dashboard">
              Dashboard
            </Nav.Link>
            {email ? (
              <Nav.Link>
                <button onClick={logout} className="login-button">
                  {loading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "Logout"
                  )}
                </button>
              </Nav.Link>
            ) : (
              <Nav.Link activeClassName="current" as={NavLink} to="/login">
                <button className="login-button">
                  {loading ? (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    "Login"
                  )}
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

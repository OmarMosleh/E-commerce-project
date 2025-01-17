import { NavLink } from "react-router-dom";
import { HeaderBasket } from "../../eCommerce";
import { Badge } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./style.module.css";
const { headerLogo, headerContainer } = styles;
const Header = () => {
  return (
    <>
      <header>
        <div className={headerContainer}>
          <div className={headerLogo}>
            <h1>
              <span>Arab </span>
              <Badge>Commerce</Badge>
            </h1>
          </div>
          <HeaderBasket />
        </div>
      </header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link> 
              <Nav.Link as={NavLink} to="about-us">About</Nav.Link> 
              <Nav.Link as={NavLink} to="categories">Categories</Nav.Link> 
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">Login</Nav.Link> 
              <Nav.Link as={NavLink} to="register">Register</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

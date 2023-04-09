import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import styles from "../../styles/main.module.scss";
import { useRouter } from "next/router";

export default function NavbarComponent() {
  const router = useRouter();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // variant="light"
      className={`${styles.navbar}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="/images/logowhite.png"
            width="240"
            height="170"
            className="img img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            {/* <NavDropdown
              title="About"
              id="collasible-nav-dropdown"
              className={`${styles.dropdown} mx-2 `}
            >
              <NavDropdown.Item>Who Are You</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#attendance">
                Why We Are Unique
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#leave">
                How We Are Unique
              </NavDropdown.Item>
              <NavDropdown.Item href="#leave">Why Join us</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link className="mx-2 text-white" onClick={() => router.push('/')}>
              About
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" href="#platform">
              Platform
            </Nav.Link>
            <Nav.Link className="mx-2 text-white" onClick={() => router.push('./contact')}>
              Contact
            </Nav.Link>
            {/* <Nav.Link className="mx-2 text-white" href="/loginPage">
              Login
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

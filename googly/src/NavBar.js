import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Googly</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/game">Game</Nav.Link>
    </Nav>
  </Navbar>
);

import React from "react";
import { Button } from "@chakra-ui/button";
import navbar from "./navbar.css"
import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'

export function NavbarComponent ({ 
    user
 }) {
    return (
        <div style={navbar}>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="Sevinco"
                    src="https://cdn.discordapp.com/attachments/747451632534683679/904995247510151198/SevincoMusic.png"
                    width="90"
                    height="72"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home" style={{fontSize:"40px"}} className="Brand">
                    Sevinco
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Support Server</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title={user.discordUser} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/menu">Servers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Add to Server</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item style={{color: "red"}} href="#action/3.4">Log Out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
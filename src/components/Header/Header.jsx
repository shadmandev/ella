import React from "react";
import "./Header.scss";
import Logo from "../../asstes/img/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <header className="header-wrap">
                {/* Topbar Start */}
                <div className="topbar-wrap">
                    <Container>
                        <div className="topbar-content text-center">
                            <p>
                                Mid-Season Sale Up to 70% OFF. Use Code:{" "}
                                <span>“SALE70”</span>. <a href="/">Shop Now</a>
                            </p>
                        </div>
                    </Container>
                </div>
                {/* Topbar End */}

                {/* Menu Start */}
                <div className="main-menu-wrapper">
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        className="bg-transparent"
                    >
                        <Container>
                            <Navbar.Brand href="#home">
                                <img src={Logo} alt="Logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link href="#features">Home</Nav.Link>
                                    <Nav.Link href="#pricing">Shop</Nav.Link>
                                    <Nav.Link href="#pricing">About</Nav.Link>
                                    <Nav.Link href="#pricing">
                                        Contact Us
                                    </Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">
                                        More deets
                                    </Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        Dank memes
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                {/* Menu End */}
            </header>
        </>
    );
};

export default Header;

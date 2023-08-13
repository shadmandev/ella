import React from "react";
import "./Header.scss";
import Logo from "../../asstes/img/logo.png";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { GoSearch, GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
// import { FaRegCircleUser } from "react-icons/fa6";

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
                                <Nav className="nav-right-info">
                                    <Nav.Link href="#deets">Sign In</Nav.Link>
                                    <Nav.Link
                                        href="#memes"
                                        className="hover-border-none"
                                    >
                                        <GoSearch />
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#memes"
                                        className="hover-border-none"
                                    >
                                        <GoHeart />
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#memes"
                                        className="hover-border-none"
                                    >
                                        <BsCart3 />
                                        <Badge pill bg="dark">
                                            0
                                        </Badge>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            {/* <Nav className="d-lg-none">
                                <Nav.Link
                                    href="#memes"
                                    className="hover-border-none"
                                >
                                    <FaRegCircleUser />
                                </Nav.Link>
                                <Nav.Link
                                    href="#memes"
                                    className="hover-border-none"
                                >
                                    <BsCart3 />
                                    <Badge pill bg="dark">
                                        0
                                    </Badge>
                                </Nav.Link>
                            </Nav> */}
                        </Container>
                    </Navbar>
                </div>
                {/* Menu End */}
            </header>
        </>
    );
};

export default Header;

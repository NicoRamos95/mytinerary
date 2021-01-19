import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import '../style.css'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
        <header className="">
            <div className="d-flex justify-content-between">
                <Navbar light expand="md" className="nav m-2">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/cities">Cities</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <NavLink href="/cities"><i className="fas fa-user m-2 logo-user"></i></NavLink>
            </div>
            <div className="hdr bg-l">

                <img src="./assets/logo.png" alt="..." className="logo"></img>

            </div>
        </header>
    )
} 

export default Header
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import '../style.css'
import Login from '../components/Login'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
        <header className="">
            <div className="d-flex justify-content-between">
                <Navbar light expand="md" className="nav m-2">
                    <NavLink href="/">Home</NavLink>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={!isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/cities">Cities</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <NavLink href="/register">Register</NavLink>
                <Login />
            </div>
            <div className="hdr bg-l">

                <img src="../assets/logo.png" alt="..." className="logo"></img>

            </div>
        </header>
    )
} 

export default Header
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Social Auth</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Profile
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
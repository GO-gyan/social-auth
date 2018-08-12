import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import authService from '../services/authService';

const NavBar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Social Auth</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/home">
                <NavItem eventKey={1}>
                    Home
                </NavItem>
            </LinkContainer>
        </Nav>
        <Nav pullRight>
            {authService.isAuthenticated() ?
            <NavDropdown title="Tote" id="UserDropdown">
                <MenuItem href="#">Edit Profile</MenuItem>
                <MenuItem href="#">Manage Company</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={()=>authService.signOut()}>Log Out</MenuItem>
            </NavDropdown>: 
            <NavItem eventKey={1} href="#">
                Login
            </NavItem>
            }
        </Nav>
    </Navbar>
);

export default NavBar;
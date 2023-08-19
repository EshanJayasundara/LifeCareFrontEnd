import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';
import img2 from './../imags/img2.png';
import './PublicNavbar.css';
import { FiLogIn } from 'react-icons/fi';

function PublicNavbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Navbar expand="lg" bg="body-tertiary" variant="dark" className="navbar-dark shadow">
      <div className="container-fluid navback navbar-container bg-dark">
        <Navbar.Brand>
          <Link to="/">
            <img src={img2} alt='' className='navbar-logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Link to="/" className="nav-link active">
                <h7 className="nav_topic">Home</h7>
              </Link>
            </Nav.Item>
            <NavDropdown title="Staff" id="staff-dropdown">
              <NavDropdown.Item>
                <Link to="/managers/all" className="dropdown-item">
                  <h7 className="nav_subtopic">Managers</h7>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/medprofs/all" className="dropdown-item">
                  <h7 className="nav_subtopic">MedProfessionals</h7>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {isHomePage && (
            <Nav>
              <Nav.Item>
                <Link to="/user/signup" className="nav-link">
                  <h7 className="nav_topic">Signup</h7>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/signin" className="nav-link">
                  <h7 className="nav_topic navbar-text-edit"><FiLogIn /> Sign in</h7>
                </Link>
              </Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default PublicNavbar;

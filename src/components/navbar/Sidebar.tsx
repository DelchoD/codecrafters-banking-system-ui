import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa"; // For the hamburger icon
import './Sidebar.module.css'

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Top Navbar with Toggle button for small screens */}
      <Navbar bg="dark" variant="dark" expand="lg" className="d-lg-none vh-100 position-fixed top-0 start-0 d-flex flex-column justify-content-start">
      <Navbar.Brand href="/" className="ms-2">
          BMS
        </Navbar.Brand>
        <Button variant="dark" onClick={handleShow}>
          <FaBars />
        </Button>
        
      </Navbar>

      {/* Sidebar for large screens */}
      <div className="d-none d-lg-flex flex-column bg-dark text-white vh-100 position-fixed top-0 start-0" style={{ width: "200px" }}>
        <Navbar.Brand href="/" className="p-3 text-center">
          BMS
        </Navbar.Brand>
        <Nav className="flex-column text-white">
          <NavLink to="/dashboard" className="nav-link text-white">
          Dashboard
          </NavLink>          
          <NavLink to="/accounts" className="nav-link text-white">Accounts</NavLink>
          <NavLink to="/transactions" className="nav-link text-white">Transactions</NavLink>
          <NavLink to="/profile" className="nav-link text-white">Profile</NavLink>
        </Nav>
      </div>

      {/* Offcanvas for small screens */}
      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white vh-100 w-50 position-fixed top-0 start-0">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>My Brand</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
          <NavLink to="/dashboard" className="nav-link text-white">Dashboard</NavLink>
          <NavLink to="/accounts" className="nav-link text-white">Accounts</NavLink>
          <NavLink to="/transactions" className="nav-link text-white">Transactions</NavLink>
          <NavLink to="/profile" className="nav-link text-white">Profile</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;

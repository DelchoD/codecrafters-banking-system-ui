import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, Collapse } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa"; // For the hamburger icon
import './Sidebar.module.css'

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProfileClick = () => setShowLogout(!showLogout); // Toggle the logout button visibility

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
        <Nav className="flex-column">
          <NavLink to="/dashboard" className="nav-link text-white mt-3" 
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="nav-link-item d-flex flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
            </svg>
            <p>Dashboard</p>
          </div>  
            
          </NavLink>          
          <NavLink to="/accounts" className="nav-link text-white mt-3"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
            </svg>
            <p>Accounts</p>
          </div>
            
          </NavLink>
          <NavLink to="/transactions" className="nav-link text-white mt-3"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
              <p>Transactions</p>
            </div>
          </NavLink>
          <NavLink to="/profile" className="nav-link text-white mt-3"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="d-flex flex-column justify-content-center align-items-center" onClick={handleProfileClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
             <p>Profile</p>

             <Collapse in={showLogout}>
              <Button variant="danger">Log Out</Button>
             </Collapse>
             
            </div>
          </NavLink>
          
        </Nav>
      </div>

      {/* Offcanvas for small screens */}
      <Offcanvas show={show} onHide={handleClose} className="bg-dark text-white vh-100 offcanvas-custom position-fixed top-0 start-0"  
      style={{width: window.innerWidth < 768 ? '50%' : window.innerWidth < 1024 ? '30%' : '20%',}}> {/* inline-css because bootstraps overrides it otherwise */}
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>My Brand</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="flex-column">
          <NavLink to="/dashboard" className="nav-link text-white mt-2"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
            </svg>
            <p>Dashboard</p>
          </div>  
            
          </NavLink>          
          <NavLink to="/accounts" className="nav-link text-white mt-2"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cash-stack" viewBox="0 0 16 16">
              <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
              <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"/>
            </svg>
            <p>Accounts</p>
          </div>
            
          </NavLink>
          <NavLink to="/transactions" className="nav-link text-white mt-2"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
              <p>Transactions</p>
            </div>
          </NavLink>
          <NavLink to="/profile" className="nav-link text-white mt-2"
          style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal',})}>
            <div className="d-flex flex-column justify-content-center align-items-center" onClick={handleProfileClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>

             <p>Profile</p>

             <Collapse in={showLogout}>
              <Button variant="danger">Log Out</Button>
             </Collapse>
             
            </div>
          </NavLink>
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;

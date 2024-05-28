import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div className="header-container">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header"
      >
        <Navbar.Brand href="#home">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">
              <ul>
                <li>Home</li>
              </ul>
            </Nav.Link>
            <Nav.Link href="#TvShows">
              <ul>
                <li>TvShows</li>
              </ul>
            </Nav.Link>
            <Nav.Link href="#Movies">
              <ul>
                <li>Movies</li>
              </ul>
            </Nav.Link>
            <Nav.Link href="#Latest">
              <ul>
                <li>Latest</li>
              </ul>
            </Nav.Link>
            <Nav.Link href="#MyList">
              <ul>
                <li>MyList</li>
              </ul>
            </Nav.Link>
            <Nav.Link href="#browse">
              <ul>
                <li>browse by languages</li>
              </ul>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#SearchIcon">
              <ul>
                <li>
                  <SearchIcon />
                </li>
              </ul>
            </Nav.Link>
            <Nav.Link eventKey={1} href="#CircleNotificationsIcon">
              <ul className="not-icon">
                <li>
                  <NotificationsNoneIcon />
                </li>
              </ul>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#AccountBoxIcon">
              <ul>
                <li>
                  <AccountBoxIcon />
                </li>
              </ul>
            </Nav.Link>
            <Nav.Link eventKey={3} href="#ArrowDropDownIcon">
              <ul>
                <li>
                  <ArrowDropDownIcon />
                </li>
              </ul>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
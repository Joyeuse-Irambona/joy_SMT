import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  faBell,
  faUser,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      className="navbar shadow-sm p-3"
      expand="md"
      style={{
        background: "#F6F4F4",
      }}
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <vavItem>
            
          </vavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              <FontAwesomeIcon
                icon={faBell}
                style={{ fontSize: 23, marginRight: 15 }}
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 23, marginRight: 15 }}
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              <FontAwesomeIcon
                icon={faCog}
                style={{ fontSize: 23, marginRight: 15 }}
              />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      
    </Navbar>
  );
};

export default Topbar;

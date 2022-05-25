/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Button,
} from "reactstrap";

function AdminNavbar() {
  return (
    <>
      <Navbar
        className="navbar-horizontal navbar-main navbar-dark navbar-transparent"
        expand="lg"
        id="navbar-main"
      >
        <Container className="justify-content-center mt-5">
          <Link href="/">
            <span>
              <NavbarBrand href="#pablo" className="mr-0">
                <img
                  alt="JEJUPASS"
                  src={require("assets/img/brand/logo_jejupass.svg")}
                />
              </NavbarBrand>
            </span>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

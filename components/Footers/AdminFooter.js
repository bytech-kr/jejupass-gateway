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

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function AdminFooter() {
  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6">
              <div className="copyright text-center text-lg-left text-muted">
                © 2022
                <span className="font-weight-bold ml-1 text-blue">JEJUPASS Corp.</span>
              </div>
            </Col>
            <Col lg="6">
              <div className="footer-link d-flex align-content-center justify-content-end">
                <a href="#" className="link">About us</a>
                <a href="#" className="link">Terms of Use</a>
                <a href="#" className="link">Privacy Policy</a>
              </div>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default AdminFooter;

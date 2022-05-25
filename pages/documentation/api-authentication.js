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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Media,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function DocApiAuth() {

  React.useEffect(async () => {
    // we make a dynamic import for the QuillJS, as this component is not made to work on SSR
    const Quill = (await import("quill")).default;
    new Quill(document.querySelector('[data-toggle="quill"]'), {
      modules: {
        toolbar: [
          ['bold', 'italic'],
          ['link', 'blockquote', 'code', 'image'],
          [{
            'list': 'ordered'
          }, {
            'list': 'bullet'
          }]
        ]
      },
      placeholder: "Quill WYSIWYG",
      theme: 'snow'
    });
  }, []);

  return (
    <>
      <SimpleHeader name="API Authentication" parentName="DOCUMENTATION" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Text editor</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <div data-quill-placeholder="Quill WYSIWYG" data-toggle="quill" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

DocApiAuth.layout = Admin;

export default DocApiAuth;

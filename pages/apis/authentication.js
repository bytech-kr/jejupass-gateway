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
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
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

function ApiAuth() {
  return (
    <>
      <SimpleHeader name="Authentication" parentName="" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col-xl-4">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h5 className="h3 mb-0">API Authentication</h5>
                  </Col>
                  <Col className="text-right" xs="4">
                    <a href="/apis/authentication-write" className="btn btn-primary btn-sm btn-icon">
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-fat-add" />
                      </span>
                      <span className="btn-inner--text">New</span>
                    </a>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <ListGroup className="list-api" flush>
                  <ListGroupItem className="p-0">
                    <a
                      className="row mx-0 py-3 bg-secondary rounded-lg"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Col className="d-flex align-items-center px-4">
                          <div className="avatar rounded-circle col-auto icon-api bg-info">
                            <i className="ni ni-key-25"></i>
                          </div>
                          <div className="col pr-0">
                            <h4 className="mb-0">
                              TEST Authentication
                            </h4>
                            <small className="d-block font-weight-bold text-gray">HMAC</small>
                            <small className="text-gray">2022.03.18</small>
                          </div>
                      </Col>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <a
                      className="row mx-0 py-3 bg-secondary rounded-lg"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Col className="d-flex align-items-center px-4">
                          <div className="avatar rounded-circle col-auto icon-api bg-info">
                            <i className="ni ni-key-25"></i>
                          </div>
                          <div className="col pr-0">
                            <h4 className="mb-0">
                              TEST Authentication
                            </h4>
                            <small className="d-block font-weight-bold text-gray">HMAC</small>
                            <small className="text-gray">2022.03.18</small>
                          </div>
                      </Col>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <a
                      className="row mx-0 py-3 bg-secondary rounded-lg"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Col className="d-flex align-items-center px-4">
                          <div className="avatar rounded-circle col-auto icon-api bg-info">
                            <i className="ni ni-key-25"></i>
                          </div>
                          <div className="col pr-0">
                            <h4 className="mb-0">
                              TEST Authentication
                            </h4>
                            <small className="d-block font-weight-bold text-gray">HMAC</small>
                            <small className="text-gray">2022.03.18</small>
                          </div>
                      </Col>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem className="p-0">
                    <a
                      className="row mx-0 py-3 bg-secondary rounded-lg"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Col className="d-flex align-items-center px-4">
                          <div className="avatar rounded-circle col-auto icon-api bg-info">
                            <i className="ni ni-key-25"></i>
                          </div>
                          <div className="col pr-0">
                            <h4 className="mb-0">
                              TEST Authentication
                            </h4>
                            <small className="d-block font-weight-bold text-gray">HMAC</small>
                            <small className="text-gray">2022.03.18</small>
                          </div>
                      </Col>
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </div>
          <div className="col-xl-8">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h5 className="h3 mb-0">API Authentication Detail</h5>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <Form role="form">
                  <FormGroup>
                    <label htmlFor="inputId" className="form-control-label">ID</label>
                    <Input id="inputId" placeholder="" type="text" defaultValue="TEST" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="inputName" className="form-control-label">NAME</label>
                    <Input id="inputName" placeholder="" type="text" defaultValue="TEST" />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="inputMode"
                    >
                      Mode
                    </label>
                    <Input defaultValue="HMAC" id="inputMode" type="select">
                      <option value="HMAC">HMAC (Singend Authentication Key)</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="inputData"
                    >
                      Data
                    </label>
                    <Input
                      id="inputData"
                      rows="3"
                      type="textarea"
                    />
                  </FormGroup>
                  <div className="d-flex">
                    <Button
                      className="ml-auto custom-w90"
                      color="primary"
                      type="button"
                    >
                      OK
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

ApiAuth.layout = Admin;

export default ApiAuth;

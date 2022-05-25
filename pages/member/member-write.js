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
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import TableHeaderTitle from '../../components/Common/TableHeaderTitle'

function MembersWrite() {
  return (
    <>
      <SimpleHeader name="Member" parentName="" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  {/* 헤더 컴포넌트 */}
                  <TableHeaderTitle
                      englishTitle="Members Register"
                      koreanTitle="회원 등록"
                  />
                  <Col md="4" className="text-right">
                    <Button className="btn-icon" color="danger" size="sm" type="button">
                      <span className="btn-inner--icon mr-1">
                        <i className="icon-custom icon-trash" />
                      </span>
                      <span className="btn-inner--text">Delete</span>
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form">
                  <Row>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputCompanyName"
                        >
                          Company Name
                        </label>
                        <Input
                          id="inputCompanyName"
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputUserName"
                        >
                          User Name
                        </label>
                        <Input
                          id="inputUserName"
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputEmail"
                        >
                          Email
                        </label>
                        <Input
                          id="inputEmail"
                          placeholder=""
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputPhone"
                        >
                          Phone
                        </label>
                        <Input
                          id="inputPhone"
                          placeholder=""
                          type="tel"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputId"
                        >
                          ID
                        </label>
                        <Input
                          id="inputId"
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputPassword"
                        >
                          Password
                        </label>
                        <Input
                          id="inputPassword"
                          placeholder=""
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mx-0">
                    <Button
                      className="custom-w90"
                      color="primary"
                      type="button"
                    >
                      Save
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

MembersWrite.layout = Admin;

export default MembersWrite;

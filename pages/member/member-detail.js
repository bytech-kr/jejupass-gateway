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
import React, {useState} from "react";
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
import RegButton from '../../components/Common/RegButton'
import SaveButton from '../../components/Common/SaveButton'

function MembersDetail() {

  const [data, setData] = useState({CompanyName: 'Chestnut'
                                           , UserName: 'Hong Gill Dong'
                                           , Email : 'chestnut@chestnut.kr'
                                           , Phone : '010-2222-2222'
                                           , ID : 'chestnut01'
                                           , Password : '12341234'
                                           , JoinDate : '2022-01-01'
                                           , ApprovalDate : '2022-01-02'
                                           , Status : 'Approved'
                                           , Active : 'Y'
  })

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
                      englishTitle="Members Detail"
                      koreanTitle="회원 상세조회"
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
                          value={data.CompanyName}
                          readOnly
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
                          value={data.UserName}
                          readOnly
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
                          value={data.Email}
                          readOnly
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
                          value={data.Phone}
                          readOnly
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
                          value={data.ID}
                          readOnly
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
                          value={data.Password}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputJoinDate"
                        >
                          Join Date
                        </label>
                        <Input
                          id="inputJoinDate"
                          placeholder=""
                          type="date"
                          value={data.JoinDate}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputApprovalDate"
                        >
                          Approval Date
                        </label>
                        <Input
                          id="inputApprovalDate"
                          placeholder=""
                          type="date"
                          value={data.ApprovalDate}
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputApproved"
                        >
                          Status
                        </label>
                        <Input defaultValue="Approved" id="inputApproved" type="select">
                          <option value="Approved">Approved</option>
                          <option value="Waiting">Waiting</option>
                          <option value="Refuse">Refuse</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="3" sm="6">
                      <div className="form-control-label label-title">Active</div>
                      <div className="form-group custom-form-group d-flex align-items-center">
                        <label className="custom-toggle mr-1">
                          <input defaultChecked type="checkbox"/>
                          <span
                            className="custom-toggle-slider rounded-circle"
                            data-label-off="No"
                            data-label-on="Yes"
                          />
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mx-0">
                    {/* SaveButton */}
                    <SaveButton data={data}/>
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

MembersDetail.layout = Admin;

export default MembersDetail;

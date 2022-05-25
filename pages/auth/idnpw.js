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
// nodejs library that concatenates classes
import classnames from "classnames";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  Modal,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";
// core components
import AuthHeader from "components/Headers/AuthHeader.js";

function FindIdPw() {
  const [focusedEmail, setFocusedEmail] = React.useState("");
  const [focusedEmailState, setFocusedEmailState] = React.useState(null);
  const [focusedId, setFocusedId] = React.useState("");
  const [focusedIdState, setFocusedIdState] = React.useState(null);
  
  const [alert, setalert] = React.useState(false);
  const [modalTerms, setModalTerms] = React.useState(false);
  const [modalPrivacy, setModalPrivacy] = React.useState(false);
  const validateRegisterForm = () => {
    if (focusedId === "") {
      setFocusedIdState("invalid");
    } else {
      setFocusedIdState("valid");
    }
    if (focusedEmail === "") {
      setFocusedEmailState("invalid");
    } else {
      setFocusedEmailState("valid");
    }
  }
  // 발송 후 얼럿창
  const basicAlert = () => {
    setalert(
      <ReactBSAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Completed"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        closeOnClickOutside={false}
        btnSize=""
        text="It's been send."
      >
        It's been send.
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <AuthHeader
        title="Forgot ID/Password?"
        lead="You can find the id/pw by email."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">
              <CardBody className="px-lg-0 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Find ID/Password</small>
                </div>
                <Form role="form" className="needs-validation" noValidate>
                  <div className="px-lg-5">
                    <FormGroup className="d-flex align-items-center justify-content-center">
                      <div className="d-flex">
                        <div className="custom-control custom-radio mr-3">
                          <input
                            className="custom-control-input"
                            id="radioFormat1"
                            name="radioFormat"
                            type="radio"
                            defaultValue="id"
                            defaultChecked
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="radioFormat1"
                          >
                            ID
                          </label>
                        </div>
                        <div className="custom-control custom-radio mr-3">
                          <input
                            className="custom-control-input"
                            id="radioFormat2"
                            name="radioFormat"
                            type="radio"
                            defaultValue="password"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="radioFormat2"
                          >
                            Password
                          </label>
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-send" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="ID"
                          type="text"
                          valid={focusedIdState === "valid"}
                          invalid={focusedIdState === "invalid"}
                          onChange={(e) => {
                            setFocusedId(e.target.value);
                            if (e.target.value === "") {
                              setFocusedIdState("invalid");
                            } else {
                              setFocusedIdState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a ID name.</div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          valid={focusedEmailState === "valid"}
                          invalid={focusedEmailState === "invalid"}
                          onChange={(e) => {
                            setFocusedEmail(e.target.value);
                            if (e.target.value === "") {
                              setFocusedEmailState("invalid");
                            } else {
                              setFocusedEmailState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a email.</div>
                      </InputGroup>
                    </FormGroup>
                  </div>
                  <hr className="mt-4 mb-2" />
                  <div className="px-lg-5">
                    <div className="text-muted font-italic">
                      <small className="font-weight-700">
                        We will send you an ID to the email you entered when signing up.
                      </small>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="mt-4 custom-w150" color="primary" type="button" onClick={validateRegisterForm}>
                      Send
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

FindIdPw.layout = Auth;

export default FindIdPw;

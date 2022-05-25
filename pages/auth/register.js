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

function Register() {
  const [focusedCompanyName, setFocusedCompanyName] = React.useState("");
  const [focusedCompanyNameState, setFocusedCompanyNameState] = React.useState(null);
  const [focusedPersonName, setFocusedPersonName] = React.useState("");
  const [focusedPersonNameState, setFocusedPersonNameState] = React.useState(null);
  const [focusedEmail, setFocusedEmail] = React.useState("");
  const [focusedEmailState, setFocusedEmailState] = React.useState(null);
  const [focusedPhone, setFocusedPhone] = React.useState("");
  const [focusedPhoneState, setFocusedPhoneState] = React.useState(null);
  const [focusedId, setFocusedId] = React.useState("");
  const [focusedIdState, setFocusedIdState] = React.useState(null);
  const [focusedPassword, setFocusedPassword] = React.useState("");
  const [focusedPasswordState, setFocusedPasswordState] = React.useState(null);
  const [focusedPasswordConfirm, setFocusedPasswordConfirm] = React.useState("");
  const [focusedPasswordConfirmState, setFocusedPasswordConfirmState] = React.useState(null);
  
  const [alert, setalert] = React.useState(false);
  const [modalTerms, setModalTerms] = React.useState(false);
  const [modalPrivacy, setModalPrivacy] = React.useState(false);
  const validateRegisterForm = () => {
    if (focusedCompanyName === "") {
      setFocusedCompanyNameState("invalid");
    } else {
      setFocusedCompanyNameState("valid");
    }
    if (focusedPersonName === "") {
      setFocusedPersonNameState("invalid");
    } else {
      setFocusedPersonNameState("valid");
    }
    if (focusedEmail === "") {
      setFocusedEmailState("invalid");
    } else {
      setFocusedEmailState("valid");
    }
    if (focusedPhone === "") {
      setFocusedPhoneState("invalid");
    } else {
      setFocusedPhoneState("valid");
    }
    if (focusedId === "") {
      setFocusedIdState("invalid");
    } else {
      setFocusedIdState("valid");
    }
    if (focusedPassword === "") {
      setFocusedPasswordState("invalid");
    } else {
      setFocusedPasswordState("valid");
    }
    if (focusedPasswordConfirm === "") {
      setFocusedPasswordConfirmState("invalid");
    } else {
      setFocusedPasswordConfirmState("valid");
    }
  }

  // 가입 후 얼럿창
  const basicAlert = () => {
    setalert(
      <ReactBSAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Completed"
        onConfirm={() => setalert(null)}
        onCancel={() => setalert(null)}
        closeOnClickOutside={false}
        btnSize=""
        text="Available after administrator approval."
      >
        Available after administrator approval.
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <AuthHeader
        title="Create an account"
        lead="You can access it after approval."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">
              <CardBody className="px-lg-0 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Join</small>
                </div>
                <Form role="form" className="needs-validation" noValidate>
                  <div className="px-lg-5">
                    <FormGroup>
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-world" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Company Name"
                          type="text"
                          valid={focusedCompanyNameState === "valid"}
                          invalid={focusedCompanyNameState === "invalid"}
                          onChange={(e) => {
                            setFocusedCompanyName(e.target.value);
                            if (e.target.value === "") {
                              setFocusedCompanyNameState("invalid");
                            } else {
                              setFocusedCompanyNameState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a company name.</div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Person Name"
                          type="text"
                          valid={focusedPersonNameState === "valid"}
                          invalid={focusedPersonNameState === "invalid"}
                          onChange={(e) => {
                            setFocusedPersonName(e.target.value);
                            if (e.target.value === "") {
                              setFocusedPersonNameState("invalid");
                            } else {
                              setFocusedPersonNameState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a person name.</div>
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
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-mobile-button" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone Number"
                          type="tel"
                          valid={focusedPhoneState === "valid"}
                          invalid={focusedPhoneState === "invalid"}
                          onChange={(e) => {
                            setFocusedPhone(e.target.value);
                            if (e.target.value === "") {
                              setFocusedPhoneState("invalid");
                            } else {
                              setFocusedPhoneState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a Phone Number.</div>
                      </InputGroup>
                    </FormGroup>
                  </div>
                  <hr className="my-4" />
                  <div className="px-lg-5">
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
                      <InputGroup className="input-group-merge input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          valid={focusedPasswordState === "valid"}
                          invalid={focusedPasswordState === "invalid"}
                          onChange={(e) => {
                            setFocusedPassword(e.target.value);
                            if (e.target.value === "") {
                              setFocusedPasswordState("invalid");
                            } else {
                              setFocusedPasswordState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a password.</div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className="mb-0">
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password Confirm"
                          type="password"
                          valid={focusedPasswordConfirmState === "valid"}
                          invalid={focusedPasswordConfirmState === "invalid"}
                          onChange={(e) => {
                            setFocusedPasswordConfirmState(e.target.value);
                            if (e.target.value === "") {
                              setFocusedPasswordConfirmState("invalid");
                            } else {
                              setFocusedPasswordConfirmState("valid");
                            }
                          }}
                        />
                        <div className="invalid-feedback">Please choose a Password Confirm.</div>
                      </InputGroup>
                    </FormGroup>
                  </div>
                  <hr className="mt-4 mb-2" />
                  <div className="px-lg-5">
                    <div className="text-muted font-italic">
                      <small className="font-weight-700">
                        password strength:{" "}
                        <span className="text-success">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="mt-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister1"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister1"
                          >
                            <span className="text-muted">
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={() => setModalTerms(true)}
                              >
                                Terms of Use
                              </a>
                            </span>
                          </label>
                        </div>
                        <Modal
                          className="modal-dialog-centered modal-xl"
                          isOpen={modalTerms}
                          toggle={() => setModalTerms(false)}
                        >
                          <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                              Terms of Use
                            </h6>
                            <button
                              aria-label="Close"
                              className="close"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => setModalTerms(false)}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body pt-0">
                            <select class="form-control mt-2 mb-4 w-auto d-inline-block">
                              <option selected>2022.01.01 개정</option>
                              <option>2021.01.01</option>
                            </select>
                            <div className="terms-scroll px-2">
                              <p>제 1조 (목적)</p>
                              <ul className="type-num pl-4">
                                <li>
                                  이 약관은 "캐플릭스"(이하 "회사"이라 한다.)에서 운영하는 온라인 서비스의 이용조건 및 절차에 관한 사항을 명시하고, 전자상거래 관련 서비스(이하 "서비스"라고 합니다)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 정하는 것을 목적으로 합니다.
                                </li>
                                <li>
                                  회원가입에 대한 내용을 충분히 숙지하신 후 가입하여 주시고, 이 약관은 본 회사에서 운영하는 모든 서비스를 이용하는 모든 회원에게 적용되며 이를 읽고 이해하는 것은 귀하의 책임입니다. *「인터넷, 정보통신망, 모바일 및 스마트 장치 등을 이용하는 전자상거래에 대하여도그 성질에 반하지 않는 한 이 약관을 준용합니다
                                </li>
                              </ul>

                              <p>제 2조 (용어의 정의)</p>
                              <ul className="type-num pl-4">
                                <li>
                                  “서비스”란 회사가 제공하는 항공, 숙박, 렌터카, 티켓 등 여가 관련 상품 및 서비스에 대한 예약, 구매, 
                                </li>
                                <li>
                                  정보 제공 및 추천 등을 위한 온라인 플랫폼 서비스를 의미합니다. 서비스는 컴퓨터, 스마트폰 등 정보통신장치와 상관없이 제주패스와 제주패스가 공개한 API를 이용하여 제 3자가 개발・구축한 프로그램 및 서비스를 포함합니다.
                                </li>
                                <li>
                                  “사이트”란 이용자가 컴퓨터, 스마트폰 등 정신통신장치를 이용하여 회사가 제공하는 서비스를 사용할 수 있도록 설정한 가상의 영업장을 의미합니다.
                                </li>
                                <li>
                                  “통신판매중개자”란 사이트를 이용하여 거래 당사자 간 항공, 숙박, 렌터카, 티켓 등 여가 관련 상품 및 서비스의 통신판매를 알선하는 업체를 말합니다.
                                </li>
                                <li>
                                  “아이디(ID)”라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소를 말합니다.
                                </li>
                                <li>
                                  “렌터카 이용권”이란 금액에 대한 고유번호를 “회사”가 운영하는 사이트에 등록하여 사용하는 금액권을 의미합니다.
                                </li>
                                <li>
                                  “비회원”이란 회원에 가입하지 않고 사이트에서 제공하는 서비스를 이용하는 자를 말합니다.
                                </li>
                                <li>
                                  “회원탈퇴”란 회원이 서비스 이용 이후 그 이용계약을 종료 시키는 의사표시를 말합니다.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <Button
                              className="ml-auto"
                              color="primary"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => setModalTerms(false)}
                            >
                              Close
                            </Button>
                          </div>
                        </Modal>
                      </Col>
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister2"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister2"
                          >
                            <span className="text-muted">
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={() => setModalPrivacy(true)}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                        <Modal
                          className="modal-dialog-centered modal-xl modal-dialog-scrollable"
                          isOpen={modalPrivacy}
                          toggle={() => setModalPrivacy(false)}
                        >
                          <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">
                              Privacy Policy
                            </h6>
                            <button
                              aria-label="Close"
                              className="close"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => setModalPrivacy(false)}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body pt-2">
                          <div className="terms-scroll px-2">
                              <p>제 1조 (목적)</p>
                              <ol className="pl-4">
                                <li>
                                  이 약관은 "캐플릭스"(이하 "회사"이라 한다.)에서 운영하는 온라인 서비스의 이용조건 및 절차에 관한 사항을 명시하고, 전자상거래 관련 서비스(이하 "서비스"라고 합니다)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 정하는 것을 목적으로 합니다.
                                </li>
                                <li>
                                  회원가입에 대한 내용을 충분히 숙지하신 후 가입하여 주시고, 이 약관은 본 회사에서 운영하는 모든 서비스를 이용하는 모든 회원에게 적용되며 이를 읽고 이해하는 것은 귀하의 책임입니다. *「인터넷, 정보통신망, 모바일 및 스마트 장치 등을 이용하는 전자상거래에 대하여도그 성질에 반하지 않는 한 이 약관을 준용합니다
                                </li>
                              </ol>

                              <p>제 2조 (용어의 정의)</p>
                              <ol className="pl-4">
                                <li>
                                  “서비스”란 회사가 제공하는 항공, 숙박, 렌터카, 티켓 등 여가 관련 상품 및 서비스에 대한 예약, 구매, 
                                </li>
                                <li>
                                  정보 제공 및 추천 등을 위한 온라인 플랫폼 서비스를 의미합니다. 서비스는 컴퓨터, 스마트폰 등 정보통신장치와 상관없이 제주패스와 제주패스가 공개한 API를 이용하여 제 3자가 개발・구축한 프로그램 및 서비스를 포함합니다.
                                </li>
                                <li>
                                  “사이트”란 이용자가 컴퓨터, 스마트폰 등 정신통신장치를 이용하여 회사가 제공하는 서비스를 사용할 수 있도록 설정한 가상의 영업장을 의미합니다.
                                </li>
                                <li>
                                  “통신판매중개자”란 사이트를 이용하여 거래 당사자 간 항공, 숙박, 렌터카, 티켓 등 여가 관련 상품 및 서비스의 통신판매를 알선하는 업체를 말합니다.
                                </li>
                                <li>
                                  “아이디(ID)”라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소를 말합니다.
                                </li>
                                <li>
                                  “렌터카 이용권”이란 금액에 대한 고유번호를 “회사”가 운영하는 사이트에 등록하여 사용하는 금액권을 의미합니다.
                                </li>
                                <li>
                                  “비회원”이란 회원에 가입하지 않고 사이트에서 제공하는 서비스를 이용하는 자를 말합니다.
                                </li>
                                <li>
                                  “회원탈퇴”란 회원이 서비스 이용 이후 그 이용계약을 종료 시키는 의사표시를 말합니다.
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <Button
                              className="ml-auto"
                              color="primary"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => setModalPrivacy(false)}
                            >
                              Close
                            </Button>
                          </div>
                        </Modal>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button" onClick={validateRegisterForm}>
                      Create account
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

Register.layout = Auth;

export default Register;

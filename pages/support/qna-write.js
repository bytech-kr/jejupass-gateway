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
import {useRouter} from 'next/router';
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
  FormGroup,
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
import Admin from "layouts/Admin";
// core components
import SimpleHeader from "components/Headers/SimpleHeader";
import TextInput from "components/Common/TextInput";

import axiosUtil from "utils/fetch";
import { commonUtil } from "utils/commonUtils";
import commonAlert from "utils/alertUtil";
import FileInput from "components/Common/FileInput";

function qnaWrite({userId = 'qwer', userNm = '홍길동'}) {
  const router = useRouter();

  const qnaSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    form.append('userId', userId);
    for(let data of form) {
      console.log(data);
    }
    const typCdCheck = !commonUtil.isEmpty(form.get('qnaTypeCd'));
    const titleCheck = !commonUtil.isEmpty(form.get('qnaTitle'));
    const contentCheck = !commonUtil.isEmpty(form.get('qnaCntt'));

    if(!typCdCheck) {
      commonAlert.alert('문의 유형을 선택하세요.', '', 'info');
      return false;
    }
    if(!titleCheck) {
      commonAlert.alert('제목을 입력하세요.', '', 'info');
      return false;
    }
    if(!contentCheck) {
      commonAlert.alert('문의 내용을 입력하세요.', '', 'info');
      return false;
    }

    const result = await axiosUtil.fileUpload('/api/qna/save', form);
    if(result > 0) {
      commonAlert.alert(
        'Q&A 등록 완료',
        '',
        'success',
        () => router.push('/support/qna')
      );
    }
  }

  return (
    <>
      <SimpleHeader name="1:1 Q&amp;A" parentName="SUPPORT" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
              <Row className="align-items-end">
                  <Col md="8" className="mb-3 mb-md-0">
                    <h3 className="mb-0">1:1 Q&amp;A Register</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form" method="post" onSubmit={qnaSubmit}>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputType"
                        >
                          Type
                        </label>
                        <Input id="inputType" type="select" name="qnaTypeCd" defaultValue="">
                          <option disabled value="">Type 선택</option>
                          <option value="01">회원 문의</option>
                          <option value="02">API 문의</option>
                          <option value="03">정산 문의</option>
                          <option value="99">기타</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
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
                          value="Chestnut"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      {/* Company Name, Registration 개념이 확실히 정의되기 전까지 적용 보류 */}
                      {/*<TextInput*/}
                      {/*    id="registrants"*/}
                      {/*    name="userId"*/}
                      {/*    fieldName="Registrants"*/}
                      {/*    value={userNm}*/}
                      {/*/>*/}
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="inputRegistrants"
                        >
                          Registrants
                        </label>
                        <Input
                          id="inputRegistrants"
                          placeholder=""
                          type="text"
                          value="홍길동"
                          readOnly
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInput
                          id="title"
                          name="qnaTitle"
                          fieldName="Title"
                          placeholder="제목을 입력하세요."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <TextInput
                          id="content"
                          name="qnaCntt"
                          type="textarea"
                          rows="7"
                          fieldName="Text"
                          placeholder="내용을 입력하세요."
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-control-label label-title">Attached file</div>
                      <div className="form-group mb-2">
                        <FileInput id="customFile01" name="atchFiles" />
                      </div>
                      <div className="form-group mb-2">
                        <FileInput id="customFile02" name="atchFiles" />
                      </div>
                      <div className="form-group">
                        <FileInput id="customFile03" name="atchFiles" />
                      </div>

                    </Col>
                  </Row>
                  <Row className="mx-0">
                    <Button
                        className="custom-w90"
                        color="primary"
                        type="submit"
                    >
                      Done
                    </Button>
                    <Button
                      className="custom-w90"
                      color="default"
                      type="button"
                      onClick={() => router.back()}
                    >
                      Back
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          {/*<Col xl="6">*/}
          {/*  <Card>*/}
          {/*    <CardHeader>*/}
          {/*      <h3 className="mb-0">Answer</h3>*/}
          {/*    </CardHeader>*/}
          {/*    <CardBody>*/}
          {/*      <Form role="form">*/}
          {/*        <Row>*/}
          {/*          <Col>*/}
          {/*            <FormGroup>*/}
          {/*              <label*/}
          {/*                className="form-control-label"*/}
          {/*                htmlFor="inputAnswer"*/}
          {/*              >*/}
          {/*                Text*/}
          {/*              </label>*/}
          {/*              <Input*/}
          {/*                id="inputAnswer"*/}
          {/*                rows="7"*/}
          {/*                type="textarea"*/}
          {/*                placeholder="내용을 입력하세요."*/}
          {/*              />*/}
          {/*            </FormGroup>*/}
          {/*          </Col>*/}
          {/*        </Row>*/}
          {/*        <Row className="mx-0">*/}
          {/*          <Button*/}
          {/*            className="custom-w90"*/}
          {/*            color="primary"*/}
          {/*            type="button"*/}
          {/*          >*/}
          {/*            Save*/}
          {/*          </Button>*/}
          {/*        </Row>*/}
          {/*      </Form>*/}
          {/*    </CardBody>*/}
          {/*  </Card>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </>
  );
}

qnaWrite.layout = Admin;

export default qnaWrite;

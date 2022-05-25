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
import React, {useState}from "react";
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
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import TitleInput from '../../components/Notice/TitleInput'
import ActiveBtn from '../../components/Notice/ActiveBtn'
import {act} from 'react-dom/test-utils'

// 문자 null 체크
import validator from 'validator';
import commonAlert from '../../utils/alertUtil'
import moment from 'moment';
import {regNoticeApi} from "../../api/noticeApi";
import {useRouter} from "next/router"
import {getCarList, getTestAPI} from "../../api/sample";
function noticeWrite() {
  const router = useRouter();
  const [title, setTitle]= useState("");
  const [active, setActive] = useState(true);

  let titleCheck = true;
  let textEditorCheck = true;

  // 타이틀 입력
  const titleChangeHandle = (e) => {
    setTitle(e.target.value)
  }

  // 엑티브 체크
  const activeCheck = (e)=>{
    setActive(e.target.checked);
  }


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
      placeholder: "내용을 입력하세요.",
      theme: 'snow'
    });
    //const data = await getCarList();
    const test = await getTestAPI();
    console.log(test);
  }, []);

const text = () =>{
  console.log(title)
  console.log(active)
  console.log(document.querySelector(".ql-editor").innerHTML)
  titleCheck = validator.equals("",title)
  textEditorCheck = validator.equals("<p><br></p>", document.querySelector(".ql-editor").innerHTML)
  console.log('titleCheck->', titleCheck);
  console.log('textEditorCheck->', textEditorCheck);
  if(sweetAlert()){
    let formData = new FormData();
    //let formData = new FormData(e.target);
    formData.append("title",title);
    formData.append("cntt",document.querySelector(".ql-editor").innerHTML);
    formData.append("ntceDe",moment().format('YYYYMMDD'));
    formData.append("useYn",active?'Y':'N');

    regNoticeApi(formData).then(res=>{
      debugger;
      router.push("/support/notice")
    })
  }else{
    return false;
  }

}

function sweetAlert(){
    if (titleCheck){
        commonAlert.alert('입력하지 않은 내용이 있습니다.', 'Title 을 입력 해주세요', 'warning');
        return false;

    }else if (textEditorCheck) {
        commonAlert.alert('입력하지 않은 내용이 있습니다.', 'Text 를 입력 해주세요', 'warning');
        return false;
    }
    return true;
}

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("title",title);
    formData.append("cntt",document.querySelector(".ql-editor").innerHTML);
    formData.append("ntceDe",moment().format('YYYYMMDD'));
    formData.append("useYn",active?'Y':'N');
    for(let data of formData) {
      console.log(data);
    }

    regNoticeApi(formData).then(res=>{
      debugger;
      router.push("/support/notice")
    })
  }

  return (
    <>
    <SimpleHeader name="Notice" parentName="SUPPORT" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  <Col md="8" className="mb-3 mb-md-0">
                    <h3 className="mb-0">Notice Register</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form role="form" onSubmit={onSubmit}>
                  <Row>
                    <Col>
                      <FormGroup>
                        {/* 타이틀 인풋 컴퍼넌트 */}
                        <TitleInput onChange={titleChangeHandle} title={title}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <div className="form-control-label label-title">Text Editor</div>
                        <div data-toggle="quill" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-control-label label-title">Attached file</div>
                      <div className="form-group mb-2">
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            id="customFile01"
                            name="files"
                            lang="en"
                            type="file"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile01"
                          >
                            Select file
                          </label>
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            id="files"
                            name="files"
                            lang="en"
                            type="file"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile02"
                          >
                            Select file
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            id="customFile03"
                            name="files"
                            lang="en"
                            type="file"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile03"
                          >
                            Select file
                          </label>
                        </div>
                      </div>

                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {/* 엑티브 체크 컴퍼넌트 */}
                      <ActiveBtn onChange={activeCheck}/>
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
                    >
                      Back
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

noticeWrite.layout = Admin;

export default noticeWrite;

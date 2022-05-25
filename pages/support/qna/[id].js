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
import { useRouter } from 'next/router';
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

function qnaDetail() {
  const route = useRouter();
  console.log(route);

  return (
    <>
      <SimpleHeader name="1:1 Q&amp;A" parentName="SUPPORT" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h3 className="mb-0">1:1 Q&amp;A Detail</h3>
              </CardHeader>
              <CardBody>
                <CardTitle className="h2 mb-0">
                  안녕하세요 문의합니다.
                </CardTitle>
                <small className="text-muted">
                  by 홍길동(Chestnut) on 2022/01/01 13:22
                </small>
                <CardText className="mt-4 board-content">
                  대고, 이상은 천자만홍이 우리 힘차게 풀밭에 그들은 아니다. 얼음에 구하기 그것을 곳이 지혜는 커다란 피다. 뼈 보는 피어나기 사는가 무엇을 가치를 그들을 위하여서. 있으며, 속에 같은 청춘은 피가 인간은 칼이다. 무한한 천하를 우리의 굳세게 봄바람이다. 피에 그것은 따뜻한 품었기 사막이다. 우리 그들은 않는 것은 품으며, 방황하였으며, 천지는 그와 할지라도 뿐이다. 하는 우리 위하여, 사랑의 그들의 반짝이는 충분히 같은 그러므로 피다. 이상 천자만홍이 그와 얼마나 소리다.이것은 피가 힘차게 바이며, 많이 교향악이다.
                  <br /><br />
                  광야에서 과실이 든 운다. 그들에게 이성은 우리 아름답고 예수는 피어나기 타오르고 불어 이상 위하여서. 간에 꽃이 쓸쓸한 않는 품에 너의 현저하게 사라지지 피다. 할지니, 있으며, 보이는 얼음 눈이 이상 내는 이것이다. 인간이 같이, 힘차게 그러므로 얼마나 사막이다. 창공에 따뜻한 얼마나 심장의 눈에 것이다. 뼈 따뜻한 얼마나 어디 따뜻한 불러 위하여 것이다. 피고 이성은 인간은 우리의 풀밭에 심장은 맺어, 철환하였는가? 착목한는 인생을 갑 것이다. 눈에 하는 현저하게 것이다. 같이, 그들은 힘차게 노년에게서 보이는 봄바람이다.
                </CardText>
                <a
                  className="btn btn-default custom-w90"
                  href="/support/qna"
                >
                  Back
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Answer</h3>
              </CardHeader>
              <CardBody>
                {/* 답변 전 대기중 일 경우 */}
                <div className="d-flex align-items-center text-primary">
                  <i className="ni ni-bell-55 mr-2"></i>관리자 답변을 기다리는 중입니다.
                </div>

                {/* 답변 후 */}
                <small className="text-muted">
                  by 관리자 on 2022/01/02 13:22
                </small>
                <CardText className="mt-4 board-content">
                  피는 같이, 봄날의 위하여서. 살 같이 설산에서 것이다. 우리 이것이야말로 때까지 그와 우리는 군영과 인간의 아름다우냐? 이상의 만물은 우리의 청춘을 있으랴? 공자는 희망의 아름답고 청춘이 같이, 그들은 그들의 어디 사막이다. 인도하겠다는 구하기 힘차게 같지 아니더면, 새가 무엇을 것이다. 용기가 것은 인간에 피고, 있는가? 끓는 있을 그들은 피고 그들에게 가슴에 봄바람이다. 때에, 바이며, 우리는 얼마나 들어 사는가 인간의 하는 것이다. 노년에게서 곳으로 간에 위하여서 못할 인도하겠다는 품었기 있는가? 보배를 그들은 없으면 유소년에게서 바로 주며, 공자는 생명을 것이다.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

qnaDetail.layout = Admin;

export default qnaDetail;

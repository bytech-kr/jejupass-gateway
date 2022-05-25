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
import React,{useEffect} from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider, PaginationListStandalone, PaginationTotalStandalone, SizePerPageDropdownStandalone } from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import { dataTableNotice } from "variables/general";
import {columns, pagination, MySearch} from "utils/constants/noticeConstants";
import TableHeaderTitle from 'components/Common/TableHeaderTitle';
import RegButton from 'components/Common/RegButton';
import {useState} from "react";
import DeleteButton from "components/Common/DeleteButton";
import {commonSelectHandler} from "../../utils/commonUtils";
import {loadNoticeListApi} from "../../api/noticeApi";
import commonAlert from "../../utils/alertUtil";

function ReactBSTableNotice() {

  const componentRef = React.useRef(null);
  const [target, setTarget] = useState([]);
  const [list, setList] = useState([]);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }

  //공지사항 목록 불러오기
  useEffect(() => {
    loadNoticeListApi()
        .then(res => {
          const list = res.map(item => ({
            id: item.ntceSeq,
            title: item.title,
            registrants: item.regId,
            creation_date: `${item.ntceDe.slice(0,4)}/${item.ntceDe.slice(4,6)}/${item.ntceDe.slice(6,8)}`,
            active: item.useYn === 'Y' ? true :false,
          }))
          setList(list);
        }).catch((e) => {
      console.log(e);
      commonAlert.alert('에러 발생', '서버 오류가 발생하였습니다.', 'warning');
    })
  }, []);
  console.log(list);
  const page = pagination(list && list);

  // Row 선택 이벤트 모음
  const selectRow = commonSelectHandler(target,setTarget);


  return (
    <>
      <SimpleHeader name="Notice" parentName="SUPPORT" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                   <TableHeaderTitle
                       englishTitle="Notice List"
                       koreanTitle ="공지사항 목록"
                   />
                   <RegButton
                       url="/support/notice-write"
                       btnName="Register"
                   />
                </Row>
              </CardHeader>

              <CardBody>
                
                <PaginationProvider
                  pagination={page}
                >
                  {
                    ({
                      paginationProps,
                      paginationTableProps
                    }) => (
                      <ToolkitProvider
                        data={list && list}
                        keyField="id"
                        columns={columns}
                        search
                      >
                        {(props) => (
                          <div className="pb-4">
                            <div className="d-md-flex">
                              <div className="react-bootstrap-table-pagination">
                                <SizePerPageDropdownStandalone
                                  { ...paginationProps }
                                />
                              </div>
                              <div
                                id="datatable-basic_filter"
                                className="dataTables_filter float-none pl-0 pr-0 ml-auto pb-1"
                              >
                                <MySearch {...props.searchProps} />
                              </div>
                            </div>
                            <div className="table-responsive mx--4 w-auto">
                              <BootstrapTable
                                {...props.baseProps}
                                bootstrap4={true}
                                pagination={pagination}
                                bordered={false}
                                classes="td-preline"
                                selectRow={selectRow}
                                noDataIndication={emptyDataMessage}
                                { ...paginationTableProps }
                              />
                            </div>
                            <DeleteButton delTargets={target} />
                            <Row className="align-items-center react-bootstrap-table-pagination">
                              <Col md="6" className="mb-2 mb-md-0 d-none d-md-block">
                                <PaginationTotalStandalone
                                  { ...paginationProps }
                                />
                              </Col>
                              <Col md="6" className="d-flex">
                                <PaginationListStandalone
                                  { ...paginationProps }
                                />
                              </Col>
                            </Row>
                          </div>
                        )}
                      </ToolkitProvider>
                    )
                  }
                </PaginationProvider>
                
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

ReactBSTableNotice.layout = Admin;

export default ReactBSTableNotice;

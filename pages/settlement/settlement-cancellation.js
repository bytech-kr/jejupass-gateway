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
  Input,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import { dataTableSettlementCancellation } from "variables/general";

const columns = [
  {
    dataField: "rental_date",
    text: "대여일",
    sort: true,
  },
  {
    dataField: "reservation_person",
    text: "예약자",
    sort: true,
  },
  {
    dataField: "product_name",
    text: "상품명",
    sort: true,
  },
  {
    dataField: "rent",
    text: "대여료",
    sort: true,
  },
  {
    dataField: "insurance_fee",
    text: "보험료",
    sort: true,
  },
  {
    dataField: "uninsured_fee",
    text: "보험미가입수수료",
    sort: true,
  },
  {
    dataField: "jejupass_payment",
    text: "제주패스결제액",
    sort: true,
  },
  {
    dataField: "product_amount",
    text: "상품금액",
    sort: true,
  },
  {
    dataField: "fee",
    text: "수수료",
    sort: true,
  },
  {
    dataField: "company_payment",
    text: "업체정산액",
    sort: true,
  },
  {
    dataField: "remarks",
    text: "비고",
    sort: true,
  },
]

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 12,
  custom: true,
  totalSize: dataTableSettlementCancellation.length,
  alwaysShowAllBtns: true,
  showTotal: false,
  withFirstAndLast: false,
});

const { SearchBar } = Search;

function ReactBSTableSettlement() {
  const componentRef = React.useRef(null);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }

  return (
    <>
      <SimpleHeader name="Settlement" parentName="" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  <Col md="8">
                    <h3 className="mb-0">업체별 정산 조회</h3>
                    <p className="text-sm mb-0">
                      패널티 취소건
                    </p>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                
                <PaginationProvider
                  pagination={pagination}
                >
                  {
                    ({
                      paginationProps,
                      paginationTableProps
                    }) => (
                      <ToolkitProvider
                        data={dataTableSettlementCancellation}
                        keyField="id"
                        columns={columns}
                        search
                      >
                        {(props) => (
                          <div className="pb-4">
                            <div className="mx-0 mb-4 table-control d-md-flex">
                              <div className="d-flex align-items-center">
                                <label
                                  className="form-control-label text-nowrap mb-0 mr-2"
                                  htmlFor="inputPeriod"
                                >
                                  검색월
                                </label>
                                <Input defaultValue="" className="form-control-sm" id="inputPeriod" type="select">
                                  <option value="" disabled>선택</option>
                                  <option value="2022/04">2022/04</option>
                                  <option value="2022/03">2022/03</option>
                                  <option value="2022/02">2022/02</option>
                                  <option value="2022/01">2022/01</option>
                                </Input>
                              </div>
                            </div>
                            <div className="table-responsive mx--4 w-auto">
                              <BootstrapTable
                                {...props.baseProps}
                                hover={true}
                                bootstrap4={true}
                                pagination={pagination}
                                bordered={false}
                                noDataIndication={emptyDataMessage}
                                { ...paginationTableProps }
                              />
                            </div>
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

ReactBSTableSettlement.layout = Admin;

export default ReactBSTableSettlement;

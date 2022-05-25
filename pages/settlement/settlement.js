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

import { dataTableSettlement } from "variables/general";

const columns = [
  {
    dataField: "month",
    text: "MONTH",
    sort: true,
  },
  {
    dataField: "reservation_completed",
    text: "RESERVATION COMPLETED",
    sort: true,
  },
  {
    dataField: "reserved_amount",
    text: "RESERVED AMOUNT",
    sort: true,
  },
  {
    dataField: "penalty_cancellation",
    text: "PENALTY CANCELLATION",
    sort: true,
  },
  {
    dataField: "penalty_amount",
    text: "PENALTY AMOUNT",
    sort: true,
  },
  {
    dataField: "total_amount",
    text: "TOTAL AMOUNT",
    sort: true,
  },
]

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 12,
  custom: true,
  totalSize: dataTableSettlement.length,
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
                      정산
                    </p>
                  </Col>
                  <Col md="4" className="text-right">
                    <Button className="btn-icon" color="primary" size="sm" type="button">
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-single-02" />
                      </span>
                      <span className="btn-inner--text">Export</span>
                    </Button>
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
                        data={dataTableSettlement}
                        keyField="id"
                        columns={columns}
                        search
                      >
                        {(props) => (
                          <div className="pb-4">
                            <div className="mx-0 mb-4 table-control d-md-flex">
                              <div className="d-flex align-items-center mr-0 mr-md-4 mb-2 mb-md-0">
                                <label
                                  className="form-control-label text-nowrap mb-0 mr-2"
                                  htmlFor="inputCompanyName"
                                >
                                  Company Name
                                </label>
                                <Input defaultValue="" className="form-control-sm" id="inputCompanyName" type="select">
                                  <option value="" disabled>선택</option>
                                  <option value="Chestnut">Chestnut</option>
                                  <option value="abc1234">abc1234</option>
                                  <option value="acb2314">acb2314</option>
                                </Input>
                              </div>
                              <div className="d-flex align-items-center">
                                <label
                                  className="form-control-label text-nowrap mb-0 mr-2"
                                  htmlFor="inputPeriod"
                                >
                                  Period
                                </label>
                                <Input defaultValue="" className="form-control-sm" id="inputPeriod" type="select">
                                  <option value="" disabled>선택</option>
                                  <option value="2022">2022</option>
                                  <option value="2021">2021</option>
                                  <option value="2020">2020</option>
                                </Input>
                              </div>
                            </div>
                            <div className="table-responsive mx--4 w-auto">
                              <BootstrapTable
                                {...props.baseProps}
                                bootstrap4={true}
                                pagination={pagination}
                                bordered={false}
                                selectRow={{mode: 'checkbox'}}
                                noDataIndication={emptyDataMessage}
                                { ...paginationTableProps }
                              />
                            </div>
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

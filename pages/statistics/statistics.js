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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
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

import { dataTableApiLog } from "variables/general";

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const columns = [
  {
    dataField: "company_name",
    text: "COMPANY NAME",
    sort: true,
  },
  {
    dataField: "car_list",
    text: "CAR LIST",
    sort: true,
  },
  {
    dataField: "car_detail",
    text: "CAR DETAIL",
    sort: true,
  },
  {
    dataField: "car_reservation",
    text: "CAR RESERVATION",
    sort: true,
  },
  {
    dataField: "reservation_cancel",
    text: "RESERVATION CANCEL",
    sort: true,
  },
  {
    dataField: "reservation_detail",
    text: "RESERVATION DETAIL",
    sort: true,
  },
  {
    dataField: "reservation_inquiry",
    text: "RESERVATION INQUIRY",
    sort: true,
  },
  {
    dataField: "company_list",
    text: "COMPANY LIST",
    sort: true,
  },
  {
    dataField: "company_car_list",
    text: "COMPANY CAR LIST",
    sort: true,
  },
  {
    dataField: "check_rental_age_limit",
    text: "CHECK_RENTAL AGE LIMIT",
    sort: true,
  },
  {
    dataField: "region_code_lookup_k",
    text: "REGION_CODE LOOKUP (K)",
    sort: true,
  },
  {
    dataField: "region_code_lookup_a",
    text: "REGION_CODE LOOKUP (A)",
    sort: true,
  },
]

const pagination = paginationFactory({
  page: 1,
  custom: true,
  totalSize: dataTableApiLog.length,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  paginationTotalRenderer: customTotal,
  // sizePerPageRenderer: customSizePerPage,
});

const { SearchBar } = Search;

function ReactBSTableApiLog() {
  const componentRef = React.useRef(null);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }

  const handleReactDatetimeChange = (who, date) => {
    if (
      startDate &&
      who === "endDate" &&
      new Date(startDate._d + "") > new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else if (
      endDate &&
      who === "startDate" &&
      new Date(endDate._d + "") < new Date(date._d + "")
    ) {
      setStartDate(date);
      setEndDate(date);
    } else {
      if (who === "startDate") {
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };
  // this function adds on the day tag of the date picker
  // middle-date className which means that this day will have no border radius
  // start-date className which means that this day will only have left border radius
  // end-date className which means that this day will only have right border radius
  // this way, the selected dates will look nice and will only be rounded at the ends
  const getClassNameReactDatetimeDays = (date) => {
    if (startDate && endDate) {
    }
    if (startDate && endDate && startDate._d + "" !== endDate._d + "") {
      if (
        new Date(endDate._d + "") > new Date(date._d + "") &&
        new Date(startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };

  return (
    <>
      <SimpleHeader name="Statistics" parentName="" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  <Col md="8" className="mb-3 mb-md-0">
                    <h3 className="mb-0">API Log</h3>
                    <p className="text-sm mb-0">
                      API 로그
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
                        data={dataTableApiLog}
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
                              <FormGroup className="d-flex align-items-center mr-0 mr-md-4 mb-2 mb-md-0">
                                <label className="form-control-label text-nowrap mb-0 mr-2">
                                  Start date
                                </label>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Date Picker Here",
                                    className: "form-control form-control-sm icon-calendar"
                                  }}
                                  value={startDate}
                                  timeFormat={false}
                                  onChange={(e) =>
                                    handleReactDatetimeChange("startDate", e)
                                  }
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    classes += getClassNameReactDatetimeDays(
                                      currentDate
                                    );
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                />
                              </FormGroup>
                              <FormGroup className="d-flex align-items-center mb-0">
                                <label className="form-control-label text-nowrap mb-0 mr-2">
                                  End date
                                </label>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Date Picker Here",
                                    className: "form-control form-control-sm icon-calendar"
                                  }}
                                  value={endDate}
                                  timeFormat={false}
                                  onChange={(e) =>
                                    handleReactDatetimeChange("endDate", e)
                                  }
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    classes += getClassNameReactDatetimeDays(
                                      currentDate
                                    );
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                />
                              </FormGroup>
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
                                classes="table-api-log"
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

ReactBSTableApiLog.layout = Admin;

export default ReactBSTableApiLog;

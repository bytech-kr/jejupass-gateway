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

import { dataTableAdmin } from "variables/general";

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

const customSizePerPage = ({ options, currSizePerPage, onSizePerPageChange }) => (
  <div className="dataTables_length" id="datatable-basic_length">
    <label>
      Show{" "}
      {
        <select
          name="datatable-basic_length"
          aria-controls="datatable-basic"
          className="form-control form-control-sm"
          onChange={(e) => onSizePerPageChange(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      }{" "}
      entries.
    </label>
  </div>
);

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "company_name",
    text: "COMPANY NAME",
    sort: true,
  },
  {
    dataField: "user_name",
    text: "USER NAME",
    sort: true,
  },
  {
    dataField: "email",
    text: "E-MAIL",
    sort: true,
  },
  {
    dataField: "creation_date",
    text: "CREATION DATE",
    sort: true,
  },
  {
    dataField: "active",
    text: "ACTIVE",
    sort: true,
    formatter: (cellContent, row) => {
      if(row.active){
        return (
          <label className="custom-toggle">
            <input defaultChecked type="checkbox" />
            <span
              className="custom-toggle-slider rounded-circle"
              data-label-off="No"
              data-label-on="Yes"
            />
          </label>
        );
      }
      return (
        <label className="custom-toggle">
          <input type="checkbox" />
          <span
            className="custom-toggle-slider rounded-circle"
            data-label-off="No"
            data-label-on="Yes"
          />
        </label>
      );
    }
  },
]

const pagination = paginationFactory({
  page: 1,
  custom: true,
  totalSize: dataTableAdmin.length,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  paginationTotalRenderer: customTotal,
  sizePerPageRenderer: customSizePerPage,
});

export const MySearch = (props) => {
  let input;
  const [searchCustomMethos, setSearchCustomMethos] = React.useState(false);
  const [inputSearchText, setInputSearchText] = React.useState("");
  const onChangeInput = e => {
    setInputSearchText(e.target.value);
  }
  const handleClick = () => {
    props.onSearch(input.value);
  };
  const onKeyPress = (e) => {
    if(e.key == "Enter"){
      handleClick();
    }
  }
  const handleReset = () => {
    setInputSearchText("");
    props.onSearch("");
  }

  return (
      <FormGroup className="searchbar-custom mb-0 ml-0 ml-md-2">
        <InputGroup
            className={classnames("input-group-merge", {
              focused: searchCustomMethos,
            })}
        >
          <input
              className="form-control form-control-sm"
              placeholder="search"
              ref={ n => input = n }
              type="text"
              value={inputSearchText}
              onChange={onChangeInput}
              onFocus={(e) => setSearchCustomMethos(true)}
              onBlur={(e) => setSearchCustomMethos(false)}
              onKeyPress={onKeyPress}
          />
          <InputGroupAddon addonType="append">
            {
                inputSearchText &&
                <button className="input-group-text btn-clear" onClick={ handleReset }>
                  <i className="ni ni-fat-remove"></i>
                  <span className="sr-only">clear</span>
                </button>
            }
            <button className="input-group-text btn-search" onClick={ handleClick }>
            <span className="btn-inner--icon">
              <i className="fas fa-search text-primary"></i>
              <span className="sr-only">search</span>
            </span>
            </button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
  );
};

function ReactBSTableSetting() {
  const componentRef = React.useRef(null);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }

  return (
    <>
      <SimpleHeader name="Administrator List" parentName="Setting" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  <Col md="8" className="mb-3 mb-md-0">
                    <h3 className="mb-0">Administrator List</h3>
                    <p className="text-sm mb-0">
                      관리자 목록
                    </p>
                  </Col>
                  <Col md="4" className="text-right">
                    <Button className="btn-icon" color="primary" size="sm" type="button">
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-fat-add" />
                      </span>
                      <span className="btn-inner--text">New</span>
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
                        data={dataTableAdmin}
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
                                selectRow={{mode: 'checkbox'}}
                                noDataIndication={emptyDataMessage}
                                { ...paginationTableProps }
                              />
                            </div>
                            <div className="mb-4">
                              <Button className="btn-icon" color="danger" size="sm" type="button">
                                <span className="btn-inner--icon mr-1">
                                  <i className="icon-custom icon-trash" />
                                </span>
                                <span className="btn-inner--text">Delete</span>
                              </Button>
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

ReactBSTableSetting.layout = Admin;

export default ReactBSTableSetting;

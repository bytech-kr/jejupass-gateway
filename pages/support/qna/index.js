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
import React, {useState, useEffect} from "react";
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
import TableHeaderTitle from 'components/Common/TableHeaderTitle';
import RegButton from 'components/Common/RegButton';
import DeleteButton from 'components/Common/DeleteButton';

import { dataTableContactUs } from 'variables/general';
import { columns, getPagination } from 'utils/constants/qnaConstants';
import axiosUtil from "utils/fetch";
import { commonUtil } from "utils/commonUtils";


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
                  <i className="ni ni-fat-remove" />
                  <span className="sr-only">clear</span>
                </button>
            }
            <button className="input-group-text btn-search" onClick={ handleClick }>
            <span className="btn-inner--icon">
              <i className="fas fa-search text-primary" />
              <span className="sr-only">search</span>
            </span>
            </button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
  );
};

function ReactBSTableQna() {
  const componentRef = React.useRef(null);
  const [pagination, setPagination] = useState(getPagination([]));
  const [target, setTarget] = useState([]);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await axiosUtil.get('/api/qna/list');
    console.log(res);
    if(commonUtil.isNotEmpty(res)) {
      setData(res);
      setPagination(getPagination(res));
    }
  }, [setData, setPagination]);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }

  // Row 선택 이벤트 모음
  const selectRow = {
    mode: 'checkbox',
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log(row);
      console.log(rowIndex);
      if(isSelect) {
        setTarget([...target, row.id]);
      } else {
        setTarget(target.filter(id => id !== row.id));
      }
    },
    onSelectAll: (isSelect, rows, e) => {
      if(isSelect) {
        setTarget(rows);
      } else {
        setTarget([]);
      }
    }
  };

  return (
    <>
      <SimpleHeader name="1:1 Q&amp;A" parentName="SUPPORT" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <Row className="align-items-end">
                  {/* 헤더 컴포넌트 */}
                  <TableHeaderTitle
                      englishTitle="1:1 Q&amp;A List"
                      koreanTitle="1:1 Q&amp;A 목록"
                  />
                  {/* QNA 등록 버튼 컴포넌트 */}
                  <RegButton
                      url="/support/qna-write"
                      btnName="Register"
                  />
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
                        data={data}
                        keyField="qnaSeq"
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
                            {/* 삭제 버튼 컴포넌트 */}
                            <div className="mb-4">
                              <DeleteButton data={data} delTargets={target} setData={setData} />
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

ReactBSTableQna.layout = Admin;

export default ReactBSTableQna;

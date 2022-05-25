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
import React, {useEffect} from "react";
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

import {dataTableMembers, dataTableNotice} from "variables/general";
import CustomTotal from "../../components/Common/CustomTotal";
import CustomSizePerPage from "../../components/Common/CustomSizePerPage";
import TableHeaderTitle from '../../components/Common/TableHeaderTitle'
import DeleteButton from '../../components/Common/DeleteButton'
import {useState} from "react";
import {commonSelectHandler} from '../../utils/commonUtils'
import {loadMemberListApi} from '../../api/memberApi'
import commonAlert from '../../utils/alertUtil'


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
    dataField: "phone",
    text: "PHONE",
    sort: true,
  },
  {
    dataField: "start_date",
    text: "START DATE",
    sort: true,
  },
  {
    dataField: "status",
    text: "STATUS",
    sort: true,
    formatter: (cellContent, row) => {
      // if(row.status != null){
      // 가입
      if(row.status == 'Joined'){
        return (
            <Badge className="badge-lg" color="default">
              Joined
            </Badge>
        );
        // 승인
      } else if(row.status == 'Approved'){
        return (
            <Badge className="badge-lg" color="success">
              Approved
            </Badge>
        );
        // 대기
      } else if(row.status == 'Waiting'){
        return (
            <Badge className="badge-lg" color="info">
              Waiting
            </Badge>
        );
        // 거절
      } else if(row.status == 'Refuse'){
        return (
            <Badge className="badge-lg" color="danger">
              Refuse
            </Badge>
        );
        // 휴면
      } else if(row.status == 'Dormant'){
        return (
            <Badge className="badge-lg" color="secondary">
              Dormant
            </Badge>
        );
        // 탈퇴
      } else if(row.status == 'Withdrawal'){
        return (
            <Badge className="badge-lg" color="warning">
              Withdrawal
            </Badge>
        );
        // 기타
      } else {
        return (
            <Badge className="badge-lg" color="primary">
              Other
            </Badge>
        );
      }
    }
  },
  {
    dataField: "active",
    text: "ACTIVE",
    sort: true,
    formatter: (cellContent, row) => {
      console.log(row)
      if(row.active){
        return (
            <label className="custom-toggle">
              {/*<input defaultChecked type="checkbox"/>*/}
              <input type="checkbox"/>
              <span
                  className="custom-toggle-slider rounded-circle"
                  data-label-off="No"
                  data-label-on="Yes"
                  onClick={(e)=>{console.log(e.target.value)}}
              />
            </label>
        );
      }
      return (
          <label className="custom-toggle">
            <input type="checkbox"/>
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
  totalSize: dataTableMembers.length,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  paginationTotalRenderer: CustomTotal,
  sizePerPageRenderer: CustomSizePerPage,
});

// This is my custom search component
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

function ReactBSTableMembers() {
  const componentRef = React.useRef(null);

  const [target, setTarget] = useState([]);
  const [data, setData] = useState(dataTableMembers);
  const [list, setList] = useState([])
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  // Data 없을때 문구
  const emptyDataMessage = () => {
    return (
        <div className="text-center">No Data</div>
    );
  }
  // Row 선택 이벤트 모음
  const selectRow = commonSelectHandler(target, setTarget);

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


  // 회원 목록 불러오기
  useEffect(() => {
    loadMemberListApi()
        .then(res => {
          const list = res.map(item => ({
            id: item.userId,
            companyName : item.cpnyId,
            userName: item.userNm,
            email: item.emal,
            phone: item.hpNo,
            startDate: item.joinDe,
            status: item.aprvDe,
            active: item.useYn === 'Y' ? true :false,
          }))
          setList(list);
        }).catch((e) => {
      console.log(e);
      commonAlert.alert('에러 발생', '서버 오류가 발생하였습니다.', 'warning');
    })
  },[])

  return (
      <>
        <SimpleHeader name="Member" parentName="" />
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <Row className="align-items-end">
                    {/* 헤더 컴포넌트 */}
                    <TableHeaderTitle
                        englishTitle="Members List"
                        koreanTitle="회원목록"
                    />
                    <Col md="4" className="text-right">
                      <a href="/member/write" className="btn btn-primary btn-sm btn-icon">
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-fat-add" />
                      </span>
                        <span className="btn-inner--text">New</span>
                      </a>
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
                              data={list}
                              keyField="id"
                              columns={columns}
                              search
                          >
                            {(props) => (
                                <div className="pb-4">
                                  <div className="d-lg-flex justify-content-end mb-4">
                                    <div className="d-md-flex justify-content-end mb-2 mb-lg-0">
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
                                    <div className="d-md-flex justify-content-end">
                                      <FormGroup className="d-flex align-items-center mr-0 ml-md-4 mb-2 mb-md-0">
                                        <label htmlFor="inputStatus" className="form-control-label mb-0 mr-2">Status</label>
                                        <Input defaultValue="ALL" id="inputStatus" className="form-control-sm" type="select">
                                          <option value="ALL">ALL</option>
                                          <option value="Joined">Joined</option>
                                          <option value="Approved">Approved</option>
                                          <option value="Wating">Wating</option>
                                          <option value="Refuse">Refuse</option>
                                          <option value="Dormant">Dormant</option>
                                          <option value="Withdrawal">Withdrawal</option>
                                          <option value="Other">Other</option>
                                        </Input>
                                      </FormGroup>
                                      <FormGroup className="d-flex align-items-center mr-0 ml-md-4 mb-2 mb-md-0">
                                        <label htmlFor="inputSearch" className="form-control-label mb-0 mr-2">Search</label>
                                        <Input defaultValue="ALL" id="inputSearch" className="form-control-sm" type="select">
                                          <option value="ALL">ALL</option>
                                          <option value="id">ID</option>
                                          <option value="company">Company Name</option>
                                          <option value="email">E-mail</option>
                                        </Input>
                                      </FormGroup>
                                      <MySearch {...props.searchProps} />
                                    </div>
                                  </div>
                                  <div className="d-md-flex">
                                    <div className="react-bootstrap-table-pagination">
                                      <SizePerPageDropdownStandalone
                                          { ...paginationProps }
                                      />
                                    </div>
                                  </div>
                                  <div className="table-responsive mx--4 w-auto">
                                    <BootstrapTable
                                        {...props.baseProps}
                                        bootstrap4={true}
                                        pagination={pagination}
                                        bordered={false}
                                        // selectRow={{mode: 'checkbox'}}
                                        selectRow={selectRow}
                                        noDataIndication={emptyDataMessage}
                                        { ...paginationTableProps }
                                    />
                                  </div>
                                  <div className="mb-4">
                                    {/* 삭제 버튼 컴포넌트 */}
                                    <DeleteButton data={list}  delTargets={target} setData={setList} />
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

ReactBSTableMembers.layout = Admin;

export default ReactBSTableMembers;

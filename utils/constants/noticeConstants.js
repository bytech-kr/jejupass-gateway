import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
import paginationFactory from "react-bootstrap-table2-paginator";
import {dataTableNotice} from "../../variables/general";
import CustomTotal from "../../components/Common/CustomTotal";
import CustomSizePerPage from "../../components/Common/CustomSizePerPage";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// reactstrap components
import {
    FormGroup,
    Form,
    InputGroup,
    InputGroupAddon,
    Input,
  } from "reactstrap";

//공지사항 컬럼
export const columns = [
    {
        dataField: "id",
        text: "ID",
        sort: true,
    },
    {
        dataField: "title",
        text: "TITLE",
        sort: true,
    },
    {
        dataField: "registrants",
        text: "REGISTRANTS",
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
];

//공지사항
export const pagination = (dataTableNotice)=> paginationFactory({
    page: 1,
    custom: true,
    totalSize: dataTableNotice?.length,
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

import {Badge} from "reactstrap";
import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import moment from 'moment';

import CustomTotal from 'components/Common/CustomTotal';
import CustomSizePerPage from 'components/Common/CustomSizePerPage';

import Router from "next/router";

export const columns = [
    {
        dataField: 'qnaSeq',
        text: 'NO',
        sort: true,
    },
    {
        dataField: 'qnaTypeCd',
        text: 'TYPE',
        sort: true,
        formatter: (cellContent, row) => {
            switch (row.qnaTypeCd) {
                case '01':
                    return '[회원 문의]';
                case '02':
                    return '[API 문의]';
                case '03':
                    return '[정산 문의]';
                default:
                    return '[기타 문의]';
            }
        }
    },
    {
        dataField: 'qnaTitle',
        text: 'TITLE',
        sort: true,
        formatter: (cellContent, row) => {
            const { qnaSeq, qnaTitle } = row;
            return (
                <div onDoubleClick={() => Router.push(`/support/qna/${qnaSeq}`)}>{qnaTitle}</div>
            );
        }
    },
    {
        dataField: 'companyName',
        text: 'COMPANY NAME',
        sort: true,
    },
    {
        dataField: 'userId',
        text: 'REGISTRANTS',
        sort: true,
    },
    {
        dataField: 'qnaDe',
        text: 'CREATED DATE',
        sort: true,
        formatter: (cellContent, row) => {
            const { qnaDe } = row;
            if(qnaDe) {
                return moment(qnaDe).format('YYYY/MM/DD');
            }
        }
    },
    {
        dataField: 'answYn',
        text: 'ANSWER',
        sort: true,
        formatter: (cellContent, row) => {
            const { answYn } = row;
            return (
                <Badge className="badge-lg" color={answYn === 'Y' ? 'primary' : 'danger'}>
                    {answYn === 'Y' ? 'Done' : 'Wait'}
                </Badge>
            );
        }
    }
];

export const getPagination = (data = []) => paginationFactory({
    page: 1,
    custom: true,
    totalSize: data.length,
    alwaysShowAllBtns: true,
    showTotal: true,
    withFirstAndLast: false,
    paginationTotalRenderer: CustomTotal,
    sizePerPageRenderer: CustomSizePerPage,
});

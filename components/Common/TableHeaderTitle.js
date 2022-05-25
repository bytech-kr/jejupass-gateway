import React from "react";
import {Col} from 'reactstrap'

export default function TableHeaderTitle ({englishTitle, koreanTitle}) {
    return (
        <Col md="8" className="mb-3 mb-md-0">
            <h3 className="mb-0">{englishTitle}</h3>
            <p className="text-sm mb-0">
                {koreanTitle}
            </p>
        </Col>
    )
}
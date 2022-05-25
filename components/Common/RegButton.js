import React from 'react';
import {Col} from "reactstrap";
import Link from 'next/link';

export default function RegButton({ url, btnName = 'New' }) {
    return (
        <Col md="4" className="text-right">
            <Link href={url}>
                <a className="btn btn-primary btn-sm btn-icon">
                    <span className="btn-inner--icon mr-1">
                        <i className="ni ni-fat-add" />
                    </span>
                    <span className="btn-inner--text">{btnName}</span>
                </a>
            </Link>
        </Col>
    );
}
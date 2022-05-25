import React from 'react';
import {Button} from "reactstrap";

export default function DeleteButton({ data, delTargets, setData }) {
    const onDelete = () => {
        // console.log(data)
        // console.log(delTargets)
        setData(data.filter(item => !delTargets.includes(item.id)));
    }
    return (
        <Button className="btn-icon" color="danger" size="sm" type="button" onClick={onDelete}>
            <span className="btn-inner--icon mr-1">
               <i className="icon-custom icon-trash" />
            </span>
            <span className="btn-inner--text">Delete</span>
        </Button>
    );
}
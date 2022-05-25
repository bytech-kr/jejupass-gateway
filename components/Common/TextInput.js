import React from 'react';
import {FormGroup, Input} from "reactstrap";

export default function TextInput({ id, name, data, onChange, fieldName, placeholder, type='text', rows = 1, readOnly = false }) {
    return (
        <FormGroup>
            <label
                className="form-control-label"
                htmlFor={id}
            >
                {fieldName}
            </label>
            <Input
                id={id}
                name={name}
                type={type}
                rows={rows}
                placeholder={placeholder}
                value={data}
                onChange={onChange}
                readOnly={readOnly}
            />
        </FormGroup>
    );
}
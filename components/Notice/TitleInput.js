import React from 'react';
import {Input} from "reactstrap";

export default function TitleInput({onChange,title}) {
    return (
        <>
            <label
                className="form-control-label"
                htmlFor="inputTitle"
            >
                Title
            </label>
            <Input
                id="inputTitle"
                placeholder="제목을 입력하세요."
                type="text"
                value={title}
                onChange={onChange}
            />
        </>
    )
}
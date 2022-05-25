import React from 'react';

export default function FileInput({ id, name }) {
    return (
        <div className="custom-file">
            <input
                className="custom-file-input"
                type="file"
                id={id}
                name={name}
                lang="en"
            />
            <label
                className="custom-file-label"
                htmlFor={id}
            >
                Select file
            </label>
        </div>
    );
}
import React from 'react';

export default function ActiveBtn({onChange}) {
    return (
        <>
            <div className="form-control-label label-title">Active</div>
            <div className="form-group custom-form-group d-flex align-items-center">
                <label className="custom-toggle mr-1">
                    <input defaultChecked type="checkbox" onChange={onChange}/>
                    <span
                        className="custom-toggle-slider rounded-circle"
                        data-label-off="No"
                        data-label-on="Yes"
                    />
                </label>
            </div>
        </>
    )
        ;
}
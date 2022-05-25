import React from 'react';

const CustomTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

export default CustomTotal;

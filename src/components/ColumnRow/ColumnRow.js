import React from 'react';

const ColumnRow = ({ file, selectedColumns, onColumnSelect, onPublishAPI }) => {
  return (
    <div className="column-row">
      <div className="column-heading">{/* Display column headings here */}</div>
      {/* Display columns and selection buttons here */}
      <button onClick={onPublishAPI} className="publish-api-button">
        Publish API
      </button>
    </div>
  );
};

export default ColumnRow;

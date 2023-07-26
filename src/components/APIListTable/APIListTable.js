import React from 'react';

const APIListTable = ({ apis }) => {
  return (
    <div className="api-list-table">
      <table>
        <thead>
          <tr>
            <th>Dataset</th>
            <th>API Key</th>
            <th>Endpoint</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {apis.map((api) => (
            <tr key={api.id}>
              {/* Display API details in each row */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIListTable;

import React, { useState } from 'react';
import './Modal.css';
import { createAPI } from '../../api/apiBuilderApi';

const Modal = ({ file, closeModal }) => {
  const [endpointName, setEndpointName] = useState('');
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  const handleCheckboxChange = (e, columnId) => {
    if (e.target.checked) {
      setSelectedColumns([...selectedColumns, columnId]);
    } else {
      setSelectedColumns(selectedColumns.filter((col) => col !== columnId));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      endpoint_name: endpointName,
      selected_columns: selectedColumns,
      file_id: file.file.id,
    };

    try {
      const response = await createAPI(data); 
      setApiResponse(response); // Save the API response
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopyAccessKey = () => {
    if (apiResponse && apiResponse.access_key) {
      navigator.clipboard.writeText(apiResponse.access_key);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Publish API</h2>
        {!apiResponse ? (
          <form onSubmit={handleSubmit}>
            <label>Endpoint Name</label>
            <input
              type="text"
              value={endpointName}
              onChange={(e) => setEndpointName(e.target.value)}
              required
            />
            <label>Select Columns</label>
            {file.columns.map((column) => (
              <div key={column.id}>
                <input
                  type="checkbox"
                  id={column.id}
                  checked={selectedColumns.includes(column.id)}
                  onChange={(e) => handleCheckboxChange(e, column.id)}
                />
                <label htmlFor={column.id}>{column.name}</label>
              </div>
            ))}
            <button type="submit">Submit</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </form>
        ) : (
          <div className="api-response">
            <p>API created successfully!</p>
            <p>API Endpoint: {`http://localhost:8000/api/data${apiResponse.endpoint}/`}</p>
            <p>Selected Columns:</p>
            <ul>
              {apiResponse.selected_columns.map((column) => (
                <li key={column.id}>{column.name}</li>
              ))}
            </ul>
            <p>Access Key:</p>
            <div className="access-key-container">
              <span>{apiResponse.access_key}</span>
              <button onClick={handleCopyAccessKey}>Copy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

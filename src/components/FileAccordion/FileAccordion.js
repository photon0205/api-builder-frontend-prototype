import React, { useState } from 'react';
import './FileAccordion.css';
import Modal from '../Modal/Modal';

const FileAccordion = ({ file }) => {
  const [expandedFile, setExpandedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleExpand = () => {
    setExpandedFile(file.file === expandedFile ? null : file.file);
  };

  // Group the data for each column together
  const dataByColumn = file.columns.map((column) => {
    const columnName = column.name;
    const columnData = file.data.find((rowData) => rowData.column_name === columnName);
    return { columnName, columnData: columnData ? columnData.data : [] };
  });

  // Rearrange the data to be in a synchronized table format
  const tableData = [];
  const maxRowCount = Math.max(...dataByColumn.map(({ columnData }) => columnData.length));
  for (let i = 0; i < maxRowCount; i++) {
    const row = dataByColumn.map(({ columnData }) => columnData[i] || '');
    tableData.push(row);
  }

  return (
    <div className={`file-accordion ${file.file === expandedFile ? 'expanded' : ''}`}>
      <div key={file.file.id} className="file-item">
        <div className="file-header" onClick={handleExpand}>
          <span>
            {file.file.name}
            {file.file === expandedFile ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </span>
          <button onClick={() => setShowModal(true)}>Publish API</button>
        </div>
        {file.file === expandedFile && (
          <div className="file-details">
            <table>
              <thead>
                <tr>
                  <th>Column Name</th>
                  {dataByColumn.map(({ columnName }) => (
                    <th key={columnName}>{columnName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>Row {rowIndex + 1}</td>
                    {row.map((cellData, columnIndex) => (
                      <td key={columnIndex}>{cellData}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {showModal && (
        <Modal
          file={file}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FileAccordion;

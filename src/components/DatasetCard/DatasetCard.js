import React from 'react';
import { Link } from 'react-router-dom';
import './DatasetCard.css'; // Import the CSS file

const DatasetCard = ({ dataset, onClick }) => {
  return (
    <div className="dataset-card">
      <h3>{dataset.name}</h3>
      <Link to={`/datasets/${dataset.id}`} className="view-details-link">
        View Details
      </Link>
    </div>
  );
};

export default DatasetCard;

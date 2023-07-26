import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatasetCard from "../../components/DatasetCard/DatasetCard";
import { getAllDatasets } from "../../api/datasetsApi";
import './DatasetListPage.css'

const DatasetListPage = () => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const datasetsData = await getAllDatasets();
        setDatasets(datasetsData);
      } catch (error) {
        console.log(error)
      }
    };
    fetchDatasets();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Farming Datasets</h1>
      <div className="dataset-list">
        {datasets.map((dataset) => (
          <Link key={dataset.id} to={`/datasets/${dataset.id}`}>
            <DatasetCard dataset={dataset} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DatasetListPage;

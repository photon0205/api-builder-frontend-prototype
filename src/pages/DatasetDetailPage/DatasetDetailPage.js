import React, { useEffect, useState } from "react";
import FileAccordion from "../../components/FileAccordion/FileAccordion";
import { getAllDatasets, getFilesInDataset } from "../../api/datasetsApi";
import { useParams } from "react-router-dom";
import './DatasetDetailPage.css'

const DatasetDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [files, setFiles] = useState([]);
  const { id } = useParams()
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchDatasetDetails = async () => {
      try {
        const datasetsData = await getFilesInDataset(id);
        console.log(datasetsData);
        setDataset(datasetsData.dataset);
        setFiles(datasetsData.files);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatasetDetails();
  }, []);

  const handleColumnSelect = (column) => {
    // Implement column selection logic
  };

  const handlePublishAPI = () => {
    // Implement API publishing logic and API creation API call
  };

  const handleModalSubmit = (apiName) => {
    // Implement API creation API call and API key retrieval
  };

  return (
    <div>
      <h2>{dataset.name}</h2>
      {files.map((file) => (
        <FileAccordion file={file} />
      ))}
    </div>
  );
};

export default DatasetDetailPage;

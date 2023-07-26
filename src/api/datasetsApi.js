import api from './api';

export const getAllDatasets = async () => {
  try {
    const response = await api.get('/datasets/all/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFilesInDataset = async (datasetId) => {
  try {
    const response = await api.get(`/datasets/all-files/${datasetId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

import api from "./api";

export const createAPI = async (data) => {
  try {
    const response = await api.post(`/api/create/`, {
      selected_columns: data.selected_columns,
      endpoint_name: data.endpoint_name,
      file_id: data.file_id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllAPIs = async () => {
  try {
    const response = await api.get("/api/all/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const accessAPI = async (endpointName, apiKey) => {
  try {
    const response = await api.get(`/api/data/${endpointName}/`, {
      headers: {
        Authorization: `APIKey ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

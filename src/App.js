import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DatasetListPage from './pages/DatasetListPage/DatasetListPage';
import DatasetDetailPage from './pages/DatasetDetailPage/DatasetDetailPage';
import APIListPage from './pages/APIListPage/APIListPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DatasetListPage/>} />
      <Route path="/datasets/:id" element={<DatasetDetailPage/>} />
      <Route path="/apis" element={<APIListPage/>} />
    </Routes>
  );
};

export default App;

import React from 'react';
import APIListTable from '../../components/APIListTable/APIListTable';
import Modal from '../../components/Modal/Modal';

const APIListPage = ({ apis }) => {
  const [selectedAPI, setSelectedAPI] = React.useState(null);

  const handleAPIPreview = (api) => {
    // Implement API preview logic
  };

  return (
    <div>
      <h2>Generated APIs</h2>
      <APIListTable apis={apis} />
      <Modal
        open={selectedAPI !== null}
        onClose={() => setSelectedAPI(null)}
      >
        {/* JSON preview content */}
      </Modal>
    </div>
  );
};

export default APIListPage;

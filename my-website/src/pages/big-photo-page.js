import React from 'react';
import Layout from '@theme/Layout';
import younesMap from './younesmap.jpg'; // Adjust the path as necessary


function BigPhotoPage() {
  return (
    <Layout title="Big Photo">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={younesMap} alt="Big" style={{ width: '100%', height: 'auto', maxWidth: '1000px' }} />

      </div>
    </Layout>
  );
}

export default BigPhotoPage
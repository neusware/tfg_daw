import React from 'react';
import ContenedoresList from './ContenedoresList';

const AdminContenedores = () => {
  return (
    <div className="ml-12 p-6 bg-white rounded-xl shadow-2xl dark:bg-gray-900 min-h-screen">
      <ContenedoresList/>
    </div>
  );
};

export default AdminContenedores;

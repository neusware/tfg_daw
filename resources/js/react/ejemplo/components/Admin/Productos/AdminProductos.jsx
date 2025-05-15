import React from 'react';
import ProductosList from './ProductList';

const AdminProductos = () => {
  return (
    <div className="ml-12 p-6 bg-white rounded-xl shadow-2xl dark:bg-gray-900 min-h-screen">
      <ProductosList/>
    </div>
  );
};

export default AdminProductos;

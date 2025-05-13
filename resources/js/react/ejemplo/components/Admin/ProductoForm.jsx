// components/Productos/ProductoForm.jsx
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const ProductoForm = ({ producto, onProductoGuardado, clearEdit }) => {
  const [form, setForm] = useState({ nombre: '', descripcion: '', puntos: '' });

  useEffect(() => {
    if (producto) {
      setForm({
        nombre: producto.nombre || '',
        descripcion: producto.descripcion || '',
        puntos: producto.puntos || '',
      });
    } else {
      setForm({ nombre: '', descripcion: '', puntos: '' });
    }
  }, [producto]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${API_URL}/productos${producto ? `/${producto.id}` : ''}`, {
        method: producto ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: producto ? 'Producto actualizado' : 'Producto creado',
          timer: 1500,
          showConfirmButton: false,
        });
        setForm({ nombre: '', descripcion: '', puntos: '' });
        onProductoGuardado();
        clearEdit();
      } else {
        Swal.fire('Error', 'Algo salió mal al guardar el producto.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Error de conexión al servidor.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow p-4 rounded space-y-4 max-w-lg">
      <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre del producto"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="puntos"
        value={form.puntos}
        onChange={handleChange}
        placeholder="Puntos"
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {producto ? 'Actualizar' : 'Crear'}
        </button>
        {producto && (
          <button type="button" onClick={clearEdit} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductoForm;

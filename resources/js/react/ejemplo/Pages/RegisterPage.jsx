import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    saldo: 0,
    id_suscripcion: 1,
    puntos: 0, // añadido aunque no sea obligatorio aún
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'saldo' || name === 'id_suscripcion' ? parseFloat(value) : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const response = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || result.status !== true) {
        throw new Error(result.message || 'Error al registrar usuario');
      }

      setMensaje(result.message || 'Usuario registrado exitosamente');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Hubo un problema al registrar el usuario');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Crear cuenta</h2>

        {mensaje && <div className="text-green-600 text-sm">{mensaje}</div>}
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <input name="nombre" placeholder="Nombre" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="apellidos" placeholder="Apellidos" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;

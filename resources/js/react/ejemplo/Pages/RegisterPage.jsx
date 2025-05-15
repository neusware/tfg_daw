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
<div className="bg-primary dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 py-40">
  <div className="max-w-5xl w-full lg:flex bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700">
    
    {/* Parte izquierda */}
    <div className="lg:w-1/2 p-10 bg-gray-100 dark:bg-gray-900 flex flex-col justify-center">
      <h1 className="text-red font-extrabold tracking-widest text-3xl sm:text-6xl mb-4">EcoScan</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        ¡Bienvenido a la comunidad! Crea tu cuenta para comenzar a usar nuestra plataforma y aprovechar todo su potencial.
      </p>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Con una cuenta podrás escanear productos, analizar su impacto y contribuir a un consumo más sostenible.
      </p>
    </div>

    {/* Parte derecha: formulario */}
    <div className="lg:w-1/2 p-10">
      <form onSubmit={handleSubmit} className="space-y-6">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Crear cuenta</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Es rápido y gratuito</p>

        {mensaje && <div className="text-green-600 text-sm">{mensaje}</div>}
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 dark:text-gray-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.735 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <input
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 dark:text-gray-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <input
            name="apellidos"
            placeholder="Apellidos"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 dark:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            required
            placeholder="Correo electrónico"
            className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 dark:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </span>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
            placeholder="Contraseña"
            className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Registrarse
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          ¿Ya tienes una cuenta? <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">Inicia sesión</a>
        </p>
      </form>
    </div>
  </div>
</div>


  );
}

export default RegisterPage;

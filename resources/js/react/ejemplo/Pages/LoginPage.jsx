import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    try {
      const response = await fetch('/api/usuario-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (!response.ok || result.status !== true) {
        throw new Error(result.message || 'Credenciales incorrectas');
      }

      // Guardar token en localStorage
      localStorage.setItem('token', result.token);
      localStorage.setItem('usuario', JSON.stringify(result.usuario));
      navigate('/')

      setMensaje(result.message || 'Inicio de sesión exitoso');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error al iniciar sesión');
    }
  };

  return (
  <div className="bg-primary dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 py-40">
    <div className="max-w-5xl w-full lg:flex bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700">
      
      {/* Parte izquierda */}
      <div className="lg:w-1/2 p-10 bg-gray-100 dark:bg-gray-900 flex flex-col justify-center">
        <h1 className="text-red font-extrabold tracking-widest text-3xl sm:text-6xl mb-4">EcoScan</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Bienvenido de nuevo a la plataforma.
        </p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Inicia sesión para continuar escaneando productos, revisar tus datos y seguir tu progreso en el consumo responsable.
        </p>
      </div>

      {/* Parte derecha: formulario */}
      <div className="lg:w-1/2 p-10">
        <form onSubmit={handleSubmit} className="space-y-6">

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Iniciar sesión</h2>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">Accede a tu cuenta EcoScan</p>

          {mensaje && <div className="text-green-600 text-sm">{mensaje}</div>}
          {error && <div className="text-red-600 text-sm">{error}</div>}

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
            Iniciar sesión
          </button>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">¿Olvidaste tu contraseña?</a>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            ¿No tienes cuenta? <a href="/register" className="text-blue-600 hover:underline dark:text-blue-400">Regístrate ahora</a>
          </p>
        </form>
      </div>
    </div>
  </div>


  );
}

export default LoginPage;

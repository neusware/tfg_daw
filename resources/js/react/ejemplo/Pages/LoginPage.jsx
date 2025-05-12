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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Iniciar sesión</h2>

        {mensaje && <div className="text-green-600 text-sm">{mensaje}</div>}
        {error && <div className="text-red-600 text-sm">{error}</div>}

        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

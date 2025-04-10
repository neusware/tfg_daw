import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/registro');
  };

  const handleLogin = async () => {
    try {
      // const token = localStorage.getItem('token');
      // 'Authorization': `Bearer YOUR_TOKEN_HERE`
      const response = await fetch('/api/usuario-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.status && data.token) {

        // Si tienes un token, guardalo en sessionStorage
        sessionStorage.setItem('token', data.token);
        console.log('Token guardado en sessionStorage:', data.token);
        navigate('/inicio'); // Redirige al usuario a la página principal o a donde necesites
      } else {
        Swal.fire('Error', 'Credenciales incorrectas', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Hubo un problema al iniciar sesión', 'error');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleLogin}
              className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-200"
            >
              Iniciar sesión
            </button>
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={redirectToRegister}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              ¿No tienes una cuenta? Regístrate aquí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

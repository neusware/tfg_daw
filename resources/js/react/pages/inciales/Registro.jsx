import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Registro() {
  // Estado para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();




  //funcion para redirigir a login
  const redirectToLogin = () => {
    navigate('/');
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!email || !password || !confirmPassword) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }



    // Hacer la petición a la API para registrar al usuario
    try {
      const response = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status) {
        Swal.fire('Éxito', 'Usuario registrado correctamente', 'success');
        // Redirigir al usuario a la página de login o página principal
      } else {
        Swal.fire('Error', data.message || 'No se pudo registrar el usuario', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Hubo un problema al registrar al usuario', 'error');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Confirme su contraseña"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Registrar
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={redirectToLogin}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              ¿Tienes una cuenta? Inicia sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;


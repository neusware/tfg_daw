import React, { useState } from 'react';
import Swal from 'sweetalert2';
import TablaUsuarios from '../TablaUsuarios';

function CrearUsuario() {

    //useStates de los datos introducidos por el usuario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //funcion para el sweetAlert
  const handleClick = async () => {
    const { value: formData } = await Swal.fire({
      title: 'Crear Usuario',
      width: '60%',
      html: `
        <form>
          <div>
            <label for="email">Email:</label>
            <input id="email" type="email" class="swal2-input" placeholder="usuario@ejemplo.com" required>
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input id="password" type="password" class="swal2-input" placeholder="******" required>
          </div>
        </form>
      `,
      //confirmar que ningún campo este vacío
      preConfirm: () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
          Swal.showValidationMessage('Ambos campos son obligatorios');
          return false;
        }

        return { email, password };
      }
    });

    //si esta completo setear las variables con los valores
    if (formData) {
      setEmail(formData.email);
      setPassword(formData.password);

      //llamar a la funcion para insertar los datos
      await insertUsuario(formData);
    }
  };

  //función asíncrona para insertar los usuarios en la BBDD mediante la API
  const insertUsuario = async (data) => {
    try {

        const token = sessionStorage.getItem('token')
      const response = await fetch('/api/usuario', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body: JSON.stringify(data)
      });


      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Usuario insertado con éxito:', result);

      console.log("Resultado" + result)

      // Mostrar alerta de éxito
      Swal.fire('Éxito', 'Usuario creado correctamente', 'success');
    } catch (error) {
      console.error('Error al insertar usuario:', error);
      Swal.fire('Error', 'No se pudo crear el usuario', 'error');
    }

    //recursividad para actualizar la tabla
    <TablaUsuarios/>
  };

  return (
    <div className="">
      <button
        onClick={handleClick}
        className="px-6 py-2 w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl
      shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Crear Usuario
      </button>
    </div>
  );
}

export default CrearUsuario;


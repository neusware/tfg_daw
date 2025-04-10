import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";


function SweetEliminarInterpretacion({idDescripcion, actualizarDatos}) {
  // Estado para mostrar el mensaje
  const [mensaje, setMensaje] = useState('');

  // Función para manejar la eliminación de la descripcion
  const eliminarInterpretacion = async () => {
    // Mostrar la alerta de confirmación
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Seguro que deseas eliminar la interpretación con código ${idDescripcion}? Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6"
    });

    // Si el usuario no confirma, no hacer nada
    if (!confirmacion.isConfirmed) return;

    try {

        const token = sessionStorage.getItem('token')
      // Realizar el fetch para eliminar la muestra
      const response = await fetch('/api/interpretacion_muestra', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id: idDescripcion }), // Enviar el código de la muestra
      });

      const data = await response.json();

      // Verificar la respuesta y mostrar el mensaje adecuado
      if (data.status) {
        Swal.fire("Eliminada", "La interpretación ha sido eliminada con éxito", "success");
        actualizarDatos();
      } else {
        Swal.fire("Error", data.message || "No se pudo eliminar la interpretación", "error");
      }
    } catch (error) {
      // En caso de error en la conexión
      Swal.fire("Error", "Hubo un error al intentar eliminar la interpretación", "error");
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={eliminarInterpretacion}
        className="p-2 w-8 flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-semibold text-sx rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
      <MdDelete />
      </button>
    </div>
  );
}

export default SweetEliminarInterpretacion;

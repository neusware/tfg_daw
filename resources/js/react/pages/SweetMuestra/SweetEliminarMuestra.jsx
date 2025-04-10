import React, { useState } from 'react';
import Swal from 'sweetalert2';
import TablaMuestras from '../../TablaMuestras';
import { MdDelete } from "react-icons/md";

function SweetEliminarMuestra({codigoMuestra,actualizarDatos }) {
  // Estado para mostrar el mensaje
  const [mensaje, setMensaje] = useState('');

  // Función para manejar la eliminación de la muestra
  const eliminarMuestra = async () => {
    // Mostrar la alerta de confirmación
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Seguro que deseas eliminar la muestra con código ${codigoMuestra}? Esta acción no se puede deshacer.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6"
    });

    // Si el usuario no confirma, no hacer nada
    if (!confirmacion.isConfirmed) return;

   
      // Realizar el fetch para eliminar la muestra
      const token = sessionStorage.getItem('token');
      const response = await fetch('/api/muestra', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ codigo: codigoMuestra }), // Enviar el código de la muestra
      });

      const data = await response.json();

      // Verificar la respuesta y mostrar el mensaje adecuado
      if (data) {
        Swal.fire("Eliminada", "La muestra ha sido eliminada con éxito", "success");
        actualizarDatos();
      } else {
        Swal.fire("Error", data.message || "No se pudo eliminar la muestra", "error");
      }

  };

  return (
    <div className="flex flex-col">
      <button
        onClick={eliminarMuestra}
        className="p-2 w-8 flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-semibold text-sx rounded-xl
          shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
      <MdDelete />
      </button>


    </div>


  );
}

export default SweetEliminarMuestra;

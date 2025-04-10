import React, { useState } from 'react'
import Swal from 'sweetalert2'

function SweetEliminarImagen({ idImagen, actualizarDatos }) {

    // estado para mostrar el mensaje
    const [mensaje, setMensaje] = useState('')

    // función para manejar la eliminación de la imagen
    const eliminarImagen = async () => {

        console.log("Id enviado: ", idImagen)
        // mostrar la alerta de confirmación
        const confirmacion = await Swal.fire({
            title: "¿Estás seguro?",
            text: `¿Seguro que deseas eliminar la imagen? Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6"
        });

        // si el usuario no confirma, no hacer nada
        if (!confirmacion.isConfirmed) return;

        try {
            const token = sessionStorage.getItem('token')
            // realizar la petición para eliminar la imagen
            const response = await fetch('/api/imagen', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ id: idImagen }),
            });

            const data = await response.json(); // CORREGIDO: 'response' en minúsculas

            // verificar la respuesta de la API y mostrar el mensaje adecuado
            if (data.status) {
                Swal.fire("Eliminada", "La imagen ha sido eliminada con éxito", "success"); // CORREGIDO 'succes' -> 'success'
                actualizarDatos(); // Actualizar los datos después de la eliminación
            }
            else {
                Swal.fire("Error", data.message || "No se ha podido eliminar la imagen", "error");
            }

        } catch (error) {
            // Manejo de errores
            Swal.fire("Error", "Hubo un error al intentar eliminar la imagen", "error");
        }

    }

    return (
        <div className="flex flex-col">
            <button
                onClick={eliminarImagen}
                className="px-4 py-2 w-full bg-red-500 hover:bg-red-700 text-white font-semibold text-lg rounded-xl
                shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Eliminar
            </button>
        </div>
    )
}

export default SweetEliminarImagen;

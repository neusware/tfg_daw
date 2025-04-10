import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import TablaUsuarios from "../TablaUsuarios";
import { MdDelete } from "react-icons/md";

const EliminarUsuario = ({usuario, actualizarDatos}) => {



  const handleDelete = async () => {

    console.log(usuario)
    console.log(usuario.password)

    const confirmacion = await Swal.fire({
        title: "¿Estás seguro?",
        text: `¿Seguro que deseas borrar al usuario? Esta acción no se puede deshacer.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6"
    });

    if (!confirmacion.isConfirmed) return;

    try {

        const token = sessionStorage.getItem('token')
      const response = await fetch("/api/usuario", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body: JSON.stringify({
            id: usuario.id,
            email:usuario.email,
            password: usuario.password
        })
      });
      const data = await response.json();

      console.log(usuario.password)
      console.log(data)
      if (data.status) {

        Swal.fire("Eliminado", "El usuario ha sido eliminado correctamente", "success");
        actualizarDatos();
      } else {
        Swal.fire("Error", data.message || "No se pudo eliminar el usuario", "error");
      }
    }
    catch (error) {
      Swal.fire("Error", "Error en la conexión con el servidor", "error");
    }

    <TablaUsuarios/>
  };

  return (
  <div className="flex flex-col">
    <button
      onClick={handleDelete}
      className="p-2 w-8 flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-semibold text-sx rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
      <MdDelete />
    </button>
  </div>
  );
};

export default EliminarUsuario;

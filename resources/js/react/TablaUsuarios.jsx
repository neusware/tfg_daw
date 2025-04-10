import React, { useEffect, useState } from "react";
import EliminarUsuario from "./pages/SweetEliminarUsuario";
import EditarUsuario from "./pages/SweetEditarUsuario";

function TablaUsuarios({ isSidebarVisible }) {
  const[usuarios, setUsuarios] = useState([])



    const actualizarDatos = () => {
        //realizar la petición a la API para obtener los usuarios

        const token = sessionStorage.getItem('token')
        fetch('/api/usuario',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) {
                    setUsuarios(data.usuarios);
                }
            })
            .catch(error => console.error("Error al obtener los usuarios:", error));
    };

    useEffect(() => {
        actualizarDatos();
    }, []);

  return (
    <div className={`w-[70vw]`}>
      <table className="w-full border-gray-200 rounded-xl border">
        <thead className="bg-white">
          <tr>
            <th className="p-4 text-center text-gray-600 font-bold text-base">Id</th>
            <th className="p-4 text-center text-gray-600 font-bold text-base">Email</th>
            <th className="p-4 text-center text-gray-600 font-bold text-base">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id} className={index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}
            >
              <th className="text-center text-gray-600 font-bold">{usuario.id}</th>
              <th className="text-center text-gray-600">{usuario.email}</th>
              <th className="text-center text-gray-600 flex justify-center gap-4">
                <EliminarUsuario
                usuario={usuario}
                actualizarDatos = {actualizarDatos}
                 />
                <EditarUsuario
                usuario={usuario}
                actualizarDatos = {actualizarDatos}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;


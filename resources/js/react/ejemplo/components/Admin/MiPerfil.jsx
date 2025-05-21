import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MiPerfil() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);


//   obtener los datos del usuario

    useEffect(()=>{

        setUsuario(JSON.parse(localStorage.getItem("usuario")))
        setLoading(false)
    })

  if (loading) return <div className="text-center mt-10">Cargando perfil...</div>;
  if (!usuario) return <div className="text-center mt-10 text-red-600">Usuario no autenticado</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">👤 Mi Perfil</h1>

      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-4 border border-gray-200 dark:border-gray-700">
        <p><span className="font-semibold text-primary">📛 Nombre:</span> {usuario.nombre}</p>
        <p><span className="font-semibold text-primary">📛 Apellidos:</span> {usuario.apellidos}</p>
        <p><span className="font-semibold text-primary">📧 Email:</span> {usuario.email}</p>
        <p><span className="font-semibold text-primary">🪙 Puntos:</span> {usuario.saldo}</p>
      </div>

      <div className="text-center">


        <Link to={'/'}>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition bg-black"
            onClick={()=>{
                sessionStorage.removeItem("token");
                localStorage.removeItem("usuario");
            }}
        >
          Cerrar sesión
        </button>
        </Link>
      </div>
    </div>
  );
}

export default MiPerfil;


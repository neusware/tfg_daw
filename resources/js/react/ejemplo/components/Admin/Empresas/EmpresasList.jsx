import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';

const MySwal = withReactContent(Swal);

const EmpresasList = () => {
  const [empresas, setEmpresas] = useState([]);
  const [suscripciones, setSuscripciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  const token = localStorage.getItem('token');

  // Obtener todos los datos en paralelo
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch('/api/empresas'),
          fetch('/api/suscripciones')
        ]);

        const empresasData = await prodRes.json();
        const suscripcionesData = await catRes.json();

        setEmpresas(empresasData);
        setSuscripciones(suscripcionesData)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) return <p className='p-4'>Cargando suscripciones...</p>;

//   funcion para obtener el nombre de una categoria a partir de un id
  const getNombreSuscripcion = (idSuscripcion) => {
    const suscripcion = suscripciones.find((sus) => sus.id === idSuscripcion);
    return suscripcion ? suscripcion.tipo : 'Sin suscripcion';
  };


//   funcion para eliminar un producto
  const handleDeleteEmpresa = async (idEmpresa) => {
    const confirm = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará la empresa permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(`/api/empresas/${idEmpresa}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) throw new Error('No se pudo eliminar la empresa');

        setEmpresas(empresas.filter(e => e.id !== idEmpresa));
        Swal.fire('¡Eliminada!', 'La empresa ha sido eliminada.', 'success');
      } catch (error) {
        console.error(error);
        Swal.fire('Error', 'No se pudo eliminar la empresa.', 'error');
      }
    }
  };


//   funcion para editar un producto
  const handleEditarEmpresa = (empresa) => {
    const suscripcionOptions = suscripciones.map(sus => `<option value="${sus.id}" ${sus.id === empresa.id_suscripcion ? 'selected' : ''}>${sus.tipo}</option>`).join('');

    MySwal.fire({
      title: 'Editar Empresa',
      html: `
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${empresa.nombre || ''}">
        <label for="cif">CIF</label>
        <input id="cif" class="swal2-input" placeholder="CIF" value="${empresa.CIF || ''}">
        <label for="direccion">Direccion</label>
        <input id="direccion" class="swal2-input" placeholder="Dirección" value="${empresa.direccion || ''}">
        <label for="id_suscripcion">Tipo de Suscripcion</label>
        <select id="id_suscripcion" class="swal2-select">${suscripcionOptions}</select>
      `,
      confirmButtonText: 'Guardar cambios',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: async () => {
        const data = {
          nombre: document.getElementById('nombre').value,
          CIF: document.getElementById('cif').value,
          direccion: document.getElementById('direccion').value,
          id_suscripcion: parseInt(document.getElementById('id_suscripcion').value)
        };

        try {
          const res = await fetch(`/api/empresas/${empresa.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
          });

          if (!res.ok) throw new Error('Error al actualizar');

          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Empresa actualizada', '', 'success');

      }
    });
  };

//   funcion para crear un nuevo producto
const handleCrearEmpresa = () => {
    MySwal.fire({
      title: 'Añadir nueva empreas',
      html: `
        <label for="nombre">Nombre</label>
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <label for="cif">CIF</label>
        <input id="cif" class="swal2-input" placeholder="CIF">
        <label for="direccion">Direccion</label>
        <input id="direccion" class="swal2-input" placeholder="Dirección">
        <label for="id_suscripcion">Tipo de Suscripcion</label>
        <select id="id_suscripcion" class="swal2-select">
        ${suscripciones.map(sus => `<option value="${sus.id}">${sus.tipo}</option>`).join('')}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Crear',
      preConfirm: async () => {
        const token = localStorage.getItem('token');
        const nuevaEmpresa = {
            nombre: document.getElementById('nombre').value,
            CIF: document.getElementById('cif').value,
            direccion: document.getElementById('direccion').value,
            id_suscripcion: parseInt(document.getElementById('id_suscripcion').value)
        };

        try {
          const res = await fetch('/api/empresas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(nuevaEmpresa)
          });

          if (!res.ok) throw new Error('Error al crear la empresa');
          return true;
        } catch (error) {
          Swal.showValidationMessage(`Error: ${error.message}`);
          return false;
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Empresa creada', '', 'success');
      }
    });
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista de Empresas</h2>
      <div className="overflow-x-auto">

        {/* boton para crear nuevo producto */}
        <button onClick={()=>handleCrearEmpresa()} className='mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Crear Empresa</button>

        {/* tabla para mostrar los resultados */}
        <table className="min-w-full border text-sm text-left bg-white dark:bg-gray-800 shadow-md rounded">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">CIF</th>
              <th className="px-4 py-2 border">Suscripción</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((empresa) => (
              <tr key={empresa.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-2 border">{empresa.nombre}</td>
                <td className="px-4 py-2 border">{empresa.CIF}</td>
                <td className="px-4 py-2 border">{getNombreSuscripcion(empresa.id_suscripcion)}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button onClick={() => handleDeleteEmpresa(empresa.id)} className="bg-rose-800 text-white px-4 py-1 rounded hover:bg-red-700">Eliminar</button>
                  <button onClick={() => handleEditarEmpresa(empresa)} className="bg-indigo-800 text-white px-4 py-1 rounded hover:bg-indigo-900">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpresasList;

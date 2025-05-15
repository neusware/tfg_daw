import React, { useEffect, useState } from 'react';
import SuscripcionCard from '../../components/Suscripciones/SuscripcionCard';

function AllSuscripciones() {
  const [suscripciones, setSuscripciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch('/api/suscripciones')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar las suscripciones');
        return res.json();
      })
      .then(data => {
        setSuscripciones(data.suscripciones || data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('No se pudo cargar la lista');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Cargando suscripciones...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 m-8 pb-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Planes de Suscripción
      </h2>

      <div className="flex justify-center">
        <div className="grid w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
          {suscripciones.map((suscripcion) => (
            <SuscripcionCard key={suscripcion.id} data={suscripcion} />
          ))}
        </div>
      </div>
    </div>

  );

}

export default AllSuscripciones;

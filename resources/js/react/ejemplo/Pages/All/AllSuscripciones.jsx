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
    <div className="container mx-auto px-4 mt-10 pb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Planes de Suscripción
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {suscripciones.map((suscripcion, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-[1.03]"
          >
            <SuscripcionCard data={suscripcion} />
          </div>
        ))}
      </div>
    </div>
  );

}

export default AllSuscripciones;

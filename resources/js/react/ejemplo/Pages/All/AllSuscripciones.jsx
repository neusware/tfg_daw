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
    <div className='container mt-10'>
        {/* bucle que recorre todos los productos y los convierte a una tarjeta a cada uno de ellos utilizando el respectivo componente
        y se muestran en una lista todos juntos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            {
                suscripciones.map((suscripcion,index)=>(
                    <SuscripcionCard key={index} data={suscripcion}/>
                ))
            }
        </div>
    </div>
  );
}

export default AllSuscripciones;

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ categoriaId }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('/data/contenedores.geojson')
      .then((response) => response.json())
      .then((data) => {
        if (categoriaId) {
          const filtered = {
            ...data,
            features: data.features.filter(
              (f) => f.properties.RESIDUO === categoriaId
            ),
          };
          setGeoData(filtered);
        } else {
          setGeoData(data);
        }
      })
      .catch((error) => console.error('Error al cargar los datos GeoJSON:', error));
  }, [categoriaId]);

  const getColorByCategoria = (categoria) => {
    switch (categoria) {
      case 'ORGANICA': return '#937920';
      case 'VIDRIO': return '#2e711b';
      case 'PAPEL/CARTON': return '#4a6fba';
      case 'INERTE': return '#e9f342';
      default: return '#7d7458';
    }
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const { RESIDUO, VOLUMEN_L, 'CALLE ubic': calle } = feature.properties;
      layer.bindPopup(
        `<strong>Tipo de residuo:</strong> ${RESIDUO}<br/>
         <strong>Volumen:</strong> ${VOLUMEN_L || 'N/A'} L<br/>
         <strong>Calle:</strong> ${calle || 'Desconocida'}`
      );
    }
  };

  const pointToLayer = (feature, latlng) => {
    const color = getColorByCategoria(feature.properties?.RESIDUO);
    return L.circleMarker(latlng, {
      radius: 6,
      fillColor: color,
      color: '#1e293b',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.9,
    });
  };

  const geoJsonStyle = (feature) => ({
    color: getColorByCategoria(feature.properties.RESIDUO),
    weight: 2,
    fillOpacity: 0.5,
  });

  return (
    <MapContainer center={[37.88, -4.78]} zoom={14} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          onEachFeature={onEachFeature}
          pointToLayer={(feature, latlng) =>
            feature.geometry.type === 'Point' ? pointToLayer(feature, latlng) : null
          }
          style={(feature) =>
            feature.geometry.type !== 'Point' ? geoJsonStyle(feature) : {}
          }
        />
      )}
    </MapContainer>
  );
};

export default Map;

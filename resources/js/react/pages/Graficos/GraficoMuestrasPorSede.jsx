import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const GraficoMuestrasPorSede = () => {
  const [muestras, setMuestras] = useState([]);
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    fetch('/api/muestra',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setMuestras(data.muestras);
        }
      })
      .catch(error => console.error("Error al obtener muestras:", error));

    fetch('/api/select_sedes',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setSedes(data.sedes);
        }
      })
      .catch(error => console.error("Error al obtener sedes:", error));
  }, []);

  // Función para contar las muestras por sede
  const contarMuestrasPorSede = () => {
    const counts = sedes
      .map(sede => {
        const count = muestras.filter(muestra => muestra.idSede === sede.id).length;
        return { value: count, name: sede.nombre };
      })
      .filter(sede => sede.value > 0); // Filtramos las sedes con 0 muestras

    return counts;
  };

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Muestras por Sede",
        type: "pie",
        radius: "70%",
        data: contarMuestrasPorSede(),
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "400px", width: "100%" }} />;
};

export default GraficoMuestrasPorSede;

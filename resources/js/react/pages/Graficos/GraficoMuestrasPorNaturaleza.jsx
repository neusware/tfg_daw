import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const GraficoMuestrasPorNaturaleza = () => {
  const [muestras, setMuestras] = useState([]);
  const [naturalezas, setNaturalezas] = useState([]);

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

    fetch('/api/select_naturalezas',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setNaturalezas(data.naturalezas);
        }
      })
      .catch(error => console.error("Error al obtener naturalezas:", error));
  }, []);

  // Función para contar las muestras por naturaleza
  const contarMuestrasPorNaturaleza = () => {
    const counts = naturalezas
      .map(naturaleza => {
        const count = muestras.filter(muestra => muestra.idNaturaleza === naturaleza.id).length;
        return { value: count, name: naturaleza.nombre };
      })
      .filter(naturaleza => naturaleza.value > 0); // Filtramos las naturalezas con 0 muestras

    return counts;
  };

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Muestras por Naturaleza",
        type: "pie",
        radius: "70%",
        data: contarMuestrasPorNaturaleza(),
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

export default GraficoMuestrasPorNaturaleza;

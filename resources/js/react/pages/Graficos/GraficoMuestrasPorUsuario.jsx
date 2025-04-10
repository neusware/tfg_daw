import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const GraficoMuestrasPorUsuario = () => {
  const [muestras, setMuestras] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

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

    fetch('/api/usuario',{
        method: 'GET',
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
      .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);

  // Función para contar las muestras por usuario
  const contarMuestrasPorUsuario = () => {
    const counts = usuarios
      .map(usuario => {
        const count = muestras.filter(muestra => muestra.idUsuario === usuario.id).length;
        return { value: count, name: usuario.email };
      })
      .filter(usuario => usuario.value > 0);

    return counts;
  };

  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Muestras por Usuario",
        type: "pie",
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        startAngle: 180,
        data: contarMuestrasPorUsuario(),
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

export default GraficoMuestrasPorUsuario;

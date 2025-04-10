import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function GraficoMuestrasPorMes() {
  const [datos, setDatos] = useState({ labels: [], datasets: [] });

  useEffect(() => {

    const token = sessionStorage.getItem('token')
    fetch("/api/muestra",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    })
      .then((response) => response.json())
      .then((data) => {
        if (!data || !Array.isArray(data.muestras)) {  // Asegúrate de acceder a la propiedad 'muestras'
          console.error("Respuesta inesperada:", data);
          return;
        }

        const muestras = data.muestras; // Ahora 'data.muestras' es el array correcto

        const conteoPorMes = {};
        muestras.forEach((muestra) => {
          if (!muestra.fecha) return;
          const fecha = new Date(muestra.fecha);
          if (isNaN(fecha)) return;
          const mes = fecha.toLocaleString("es-ES", { month: "long", year: "numeric" });
          conteoPorMes[mes] = (conteoPorMes[mes] || 0) + 1;
        });

        const labels = Object.keys(conteoPorMes).sort(
          (a, b) => new Date("1 " + a) - new Date("1 " + b)
        );
        const valores = labels.map((mes) => conteoPorMes[mes]);

        setDatos({ labels, datasets: [{ label: "Muestras por mes", data: valores, borderColor: "blue", fill: false }] });
      })
      .catch((error) => console.error("Error obteniendo datos:", error));
  }, []);


  return (
    <div className="w-full h-full flex flex-col items-center">
      {datos.labels.length > 0 ? <Line data={datos} /> : <p>Cargando datos...</p>}
    </div>
  );
}

export default GraficoMuestrasPorMes;

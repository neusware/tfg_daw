import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const GraficoBarrasApiladas = () => {
  const [muestras, setMuestras] = useState([]);
  const [sedes, setSedes] = useState([]);

  useEffect(() => {

    const token = sessionStorage.getItem('token')
    // Obtener las muestras
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

    // Obtener las sedes
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

  // Mapeo de los IDs de formato a los nombres correspondientes
  const tipos = {
    1: "Fresco",
    2: "Formol",
    3: "Etanol 70%",
  };

  // Función para contar las muestras por sede y tipo
  const contarMuestrasPorSedeYTipo = () => {
    const resultados = sedes.map(sede => {
      // Filtramos las muestras por sede
      const muestrasPorSede = muestras.filter(muestra => muestra.idSede === sede.id);
      if (muestrasPorSede.length === 0) {
        return null;
      }

      // Contamos las muestras por tipo
      const tiposCount = muestrasPorSede.reduce((acc, muestra) => {
        const tipoId = muestra.idFormato;  // Obtener el ID del formato
        const tipo = tipos[tipoId] || "Desconocido";  // Convertir el ID a nombre
        acc[tipo] = (acc[tipo] || 0) + 1;
        return acc;
      }, {});
      return { name: sede.nombre, tipos: tiposCount };
    }).filter(sede => sede !== null); // Filtrar las sedes que no tienen muestras
    return resultados;
  };

  // Preparar los datos para las barras apiladas
  const prepararDatosBarras = () => {
    const datos = contarMuestrasPorSedeYTipo();

    // Definir los tipos de muestra que quieres en la leyenda
    const tiposArray = ["Fresco", "Formol", "Etanol 70%"];  // Asegúrate de que estos son los tipos correctos

    // Crear los datos de las series para las barras apiladas
    const seriesData = tiposArray.map(tipo => ({
      name: tipo,
      type: 'bar',
      stack: 'total',
      data: datos.map(sede => sede.tipos[tipo] || 0),
    }));

    const sedesNombres = datos.map(sede => sede.name);

    return { seriesData, sedesNombres };
  };

  const { seriesData, sedesNombres } = prepararDatosBarras();

  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: sedesNombres,
    },
    yAxis: {
      type: 'value',
    },
    series: seriesData,
  };

  return (
    <div className="w-full p-4">
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "100%" }}
      />
    </div>
  );
};

export default GraficoBarrasApiladas;

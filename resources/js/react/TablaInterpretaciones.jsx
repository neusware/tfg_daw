import  { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import SweetEliminarInterpretacion from "./pages/SweetDescripcion/SweetEliminarDescripcion";
import SweetUpdateDescripcion from "./pages/SweetDescripcion/SweetUpdateDescripcion";

    function TablaInterpretaciones({ isSidebarVisible }) {
    const [interpretaciones, setInterpretaciones] = useState([]);
    const [interpretacionMuestra, setInterpretacionMuestra] = useState([]);
    const [muestras, setMuestras] = useState([]);


  // Función para cargar datos de la API
  const actualizarDatos = () => {

    const token = sessionStorage.getItem('token')
    fetch("/api/interpretacion",{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && Array.isArray(data.interpretaciones)) {
          setInterpretaciones(data.interpretaciones);
        }
      })
      .catch((error) => console.error("Error al obtener interpretaciones:", error));

    fetch("/api/interpretacion_muestra",{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && Array.isArray(data.registro)) {
          setInterpretacionMuestra(data.registro);
        }
      });

    fetch("/api/muestra",{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && Array.isArray(data.muestras)) {
          setMuestras(data.muestras);
        }
      });
  };

  // Cargar datos al inicio
  useEffect(() => {
    actualizarDatos();
  }, []);


    //funcion para consultar el codigo de la muestra según el id
    const consultarCodigoMuestra = (idMuestra)=>{
        if(Array.isArray(idMuestra)) return "No disponible";
        const muestra = muestras.find((muestra)=> muestra.id === idMuestra);
        return muestra ? muestra.codigo : "No disponible"
    }

    //funcion para consultar el nombre de la interpretación
    const consultarNombreInterpretacion = (idInterpretacion)=>{
        if(Array.isArray(idInterpretacion)) return "No disponible";
        const interpretacion = interpretaciones.find((interpretacion)=> interpretacion.id === idInterpretacion);
        return interpretacion ? interpretacion.nombre : "No disponible"
    }



    return (
        <div className={`${isSidebarVisible ? 'w-[60vw]' : 'w-[70vw]'}`}>
            <table className="w-full border-gray-200 rounded-xl border">
                <thead className="bg-white">
                    <tr>
                        <th className="p-8 text-center text-gray-600 font-bold text-base">Id</th>
                        <th className="p-8 text-center text-gray-600 font-bold text-base">Código Muestra</th>
                        <th className="p-8 text-center text-gray-600 font-bold text-base">Interpretación</th>
                        <th className="p-8 text-center text-gray-600 font-bold text-base">Descripción</th>
                        <th className="p-8 text-center text-gray-600 font-bold text-base">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {interpretacionMuestra.map((interpretacion) => (
                        <tr key={interpretacion.id} className="even:bg-[#f7f7f7] odd:bg-white">
                        <td className="text-center text-gray-600 font-bold">{interpretacion.id}</td>
                        <td className="text-center text-gray-600">{consultarCodigoMuestra(interpretacion.idMuestra)}</td>
                        <td className="text-center text-gray-600">{consultarNombreInterpretacion(interpretacion.idInterpretacion)}</td>
                        <td className="text-center text-gray-600">{interpretacion.descripcion}</td>
                        <td className="p-4 text-center text-gray-600 flex justify-center gap-4">
                            <SweetEliminarInterpretacion
                            idDescripcion={interpretacion.id}
                            actualizarDatos={actualizarDatos}
                            />
                            <SweetUpdateDescripcion
                            idInterpretacionMuestra={interpretacion.id}
                            actualizarDatos={actualizarDatos}
                            />
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        );
    }

    export default TablaInterpretaciones;

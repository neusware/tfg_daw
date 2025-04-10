import React, { useEffect, useState } from 'react'
import SweetEliminarImagen from './pages/SweetImagen/SweetEliminarImagen'

function TablaImagenes() {

    const[imagenes, setImagenes] = useState([])
    const[muestras, setMuestras] = useState([])

    //funcion para actualizar datos
    const actualizarDatos = ()=>{

        const token = sessionStorage.getItem('token')
        //obtener las imagenes
        fetch('/api/imagen',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response =>response.json())
        .then(data=>{
            if(data.status){
                setImagenes(data.imagenes)
            }
        })

        //obtener las muestras
        fetch('/api/muestra',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            }

        })
        .then(response =>response.json())
        .then(data=>{
            if(data.status){
                setMuestras(data.muestras)
            }
        })


        //funcion para obtener el codigo de la muestra
        const obtenerCodigoMuestra = (idMuestra)=>{
            const muestra = muestras.find((muestra)=>muestra.id === idMuestra);
            return muestra ? muestra.codigo : "No disponible";

        }
    }
    //funcion para obtener el codigo de la muestra
    const obtenerCodigoMuestra = (idMuestra)=>{
        const muestra = muestras.find((muestra)=>muestra.id === idMuestra);
        return muestra ? muestra.codigo : "No disponible";

    }

    //mostrar los datos de la tabla en pantalla
    useEffect(()=>{
        actualizarDatos()
    },[])


    useEffect(()=>{
        actualizarDatos()
    },[])


  return (

<div className="w-[70vw]">
  <table className="w-full border-gray-200 rounded-xl border">
    <thead className="bg-white">
      <tr>
        <th className="p-4 text-center text-gray-600 font-bold text-base">Id</th>
        <th className="p-4 text-center text-gray-600 font-bold text-base">Imagen</th>
        <th className="p-4 text-center text-gray-600 font-bold text-base">Zoom</th>
        <th className="p-4 text-center text-gray-600 font-bold text-base">Muestra</th>
        <th className="p-4 text-center text-gray-600 font-bold text-base">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {imagenes.map((imagen, index) => (
        <tr key={imagen.id} className={index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}>
          <td className="text-center text-gray-600">{imagen.id}</td>
          <td className="text-center">
            <img src={imagen.ruta} className="w-40 mx-auto" alt="Imagen" />
          </td>
          <td className="text-center text-gray-600">{imagen.zoom}</td>
          <td className="text-center text-gray-600">{obtenerCodigoMuestra(imagen.idMuestra)}</td>
          <td className="text-center text-gray-600">
            <SweetEliminarImagen idImagen={imagen.id} actualizarDatos={actualizarDatos} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  )
}

export default TablaImagenes

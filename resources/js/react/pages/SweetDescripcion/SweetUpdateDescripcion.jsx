import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

function SweetUpdateDescripcion({ idInterpretacionMuestra, actualizarDatos }) {
  const [interpretacionesMuestras, setInterpretacionesMuestras] = useState([]);
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [idInterpretacion, setIdInterpretacion] = useState()


  // Obtener interpretaciones al cargar el componente
  useEffect(() => {

      setIdInterpretacion(idInterpretacion);
      console.log("Id recibido", idInterpretacion)

    const token = sessionStorage.getItem("token");

    fetch("/api/interpretacion_muestra", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status && Array.isArray(data.registro)) {
          setInterpretacionesMuestras(data.registro);
        } else {
          console.error("El formato de los datos no es válido", data);
        }
      })
      .catch((error) => console.error("Error al obtener interpretaciones:", error));
  }, []);

  // Actualizar la descripción cuando se reciban los datos
  useEffect(() => {
    if (interpretacionesMuestras.length > 0) {
      const descripcion = buscarDescripcion(idInterpretacionMuestra);
      setNuevaDescripcion(descripcion);
    }
  }, [interpretacionesMuestras, idInterpretacionMuestra]);

  // Función para encontrar la descripción
  const buscarDescripcion = (id) => {
    const interpretacionEncontrada = interpretacionesMuestras.find((item) => item.id === id);
    return interpretacionEncontrada ? interpretacionEncontrada.descripcion : "Descripción no encontrada";
  };

  // Función para actualizar la descripción
  const actualizarDescripcion = () => {
    const descripcionActual = buscarDescripcion(idInterpretacionMuestra);
    console.log("Descripción actual encontrada:", descripcionActual);

    Swal.fire({
      title: "Actualizar Descripción",
      input: "text",
      inputValue: descripcionActual, // Usar la descripción encontrada
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      cancelButtonText: "Cancelar",
      preConfirm: (valorIngresado) => {
        if (!valorIngresado.trim()) {
          Swal.showValidationMessage("La descripción no puede estar vacía");
        }
        return valorIngresado;
      },
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        const descripcionActualizada = resultado.value;
        const token = sessionStorage.getItem("token");

        const datosEnviados = {
          id: Number(idInterpretacionMuestra), // Corregido
          descripcion: descripcionActualizada,
        };

        console.log("Datos enviados a la API:", datosEnviados);

        fetch("/api/interpretacion_muestra", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(datosEnviados),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Respuesta de la API:", data);
            if (data.status) {
              setNuevaDescripcion(descripcionActualizada);
              Swal.fire("Actualizada", "La descripción ha sido actualizada con éxito", "success");
              actualizarDatos();
            } else {
              Swal.fire("Error", `No se pudo actualizar: ${data.message}`, "error");
            }
          })
          .catch((error) => {
            console.error("Error en la actualización:", error);
            Swal.fire("Error", "Hubo un error al intentar actualizar la descripción", "error");
          });
      }
    });
  };

  return (
    <button
      onClick={actualizarDescripcion}
      className="p-2 w-8 flex items-center justify-center bg-[#6892D5] hover:bg-blue-600 text-white font-semibold text-sx rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      <FaEdit />
    </button>
  );
}

export default SweetUpdateDescripcion;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function CrearInterpretacion({}) {
  const [tiposEstudio, setTiposEstudio] = useState([]);
  const [interpretaciones, setInterpretaciones] = useState([]);
  const [interpretacionesFiltradas, setInterpretacionesFiltradas] = useState([]);
  const [tipoEstudioSeleccionado, setTipoEstudioSeleccionado] = useState("");
  const [muestras, setMuestras] = useState([]);

  // Obtener tipos de estudio desde la API
  useEffect(() => {
    const token = sessionStorage.getItem('token')
    fetch("/api/tipo_de_estudio",{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setTiposEstudio(data.tipos_de_estudio);
        }
      })
      .catch((error) => console.error("Error al obtener tipos de estudio:", error));
  }, []);

  // Obtener interpretaciones desde la API
  useEffect(() => {

    const token = sessionStorage.getItem('token')
    fetch("/api/interpretacion",{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setInterpretaciones(data.interpretaciones);
        }
      })
      .catch((error) => console.error("Error al obtener interpretaciones:", error));
  }, []);

  // Obtener muestras desde la API
  const token = sessionStorage.getItem('token')
  useEffect(() => {
    fetch("/api/muestra",{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setMuestras(data.muestras);
        }
      })
      .catch((error) => console.error("Error al obtener muestras:", error));
  }, []);

  // Filtrar interpretaciones según el tipo de estudio seleccionado
  const handleTipoEstudioChange = (event) => {
    const tipoEstudioId = event.target.value;
    setTipoEstudioSeleccionado(tipoEstudioId);

    const interpretacionesFiltradas = interpretaciones.filter(
      (interpretacion) => Number(interpretacion.idTipoEstudio) === Number(tipoEstudioId)
    );

    setInterpretacionesFiltradas(interpretacionesFiltradas);

    console.log("Tipo de estudio seleccionado: ", tipoEstudioId);
    console.log("Interpretaciones filtradas: ", interpretacionesFiltradas);
  };

  // Mostrar el formulario de creación de interpretación con Swal
  const handleClick = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Agregar Interpretación",
      width: "40vw",
      html: `
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Tipo de Estudio:
          </label>
          <select id="idTipoEstudio" class="swal2-input">
            <option value="">Selecciona un tipo de estudio</option>
            ${tiposEstudio.map((estudio) => `<option value="${estudio.id}">${estudio.nombre}</option>`).join("")}
          </select>

          <label class="block text-sm font-medium text-gray-700 mt-2">
            Nombre de la Interpretación:
          </label>
          <select id="nombreInterpretacion" class="swal2-input">
            <option value="">Selecciona una interpretación</option>
          </select>

          <label class="block text-sm font-medium text-gray-700 mt-2">
            Código de Muestra:
          </label>
          <select id="codigoMuestra" class="swal2-input">
            <option value="">Selecciona una muestra</option>
            ${muestras.map((muestra) => `<option value="${muestra.id}">${muestra.codigo}</option>`).join("")}
          </select>

          <label class="block text-sm font-medium text-gray-700 mt-2">
            Descripción:
          </label>
          <input type="text" id="descripcionInterpretacion" class="swal2-input" placeholder="Ingrese la descripción"/>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      didOpen: () => {
        const selectTipoEstudio = document.querySelector("#idTipoEstudio");
        const selectInterpretacion = document.querySelector("#nombreInterpretacion");

        selectTipoEstudio.addEventListener("change", (event) => {
          handleTipoEstudioChange(event);

          const interpretacionesFiltradas = interpretaciones.filter(
            (interpretacion) => Number(interpretacion.idTipoEstudio) === Number(event.target.value)
          );

          selectInterpretacion.innerHTML = `
            <option value="">Selecciona una interpretación</option>
            ${interpretacionesFiltradas
              .map((interpretacion) => `<option value="${interpretacion.id}">${interpretacion.nombre}</option>`)
              .join("")}
          `;
        });
      },
      preConfirm: () => {
        const idTipoEstudio = document.getElementById("idTipoEstudio").value;
        const idInterpretacion = document.getElementById("nombreInterpretacion").value;
        const idMuestra = document.getElementById("codigoMuestra").value;
        const descripcion = document.getElementById("descripcionInterpretacion").value;

        if (!idTipoEstudio || !idInterpretacion || !idMuestra || !descripcionInterpretacion) {
          Swal.showValidationMessage("Todos los campos son obligatorios");
          return false;
        }

        return { idMuestra,idInterpretacion, descripcion };
      },
    });

    if (formValues) {
      console.log("Enviando datos a la API:", formValues);

      try {
        const response = await fetch("/api/interpretacion_muestra", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

          },
          body: JSON.stringify(formValues),
        });

        console.log(response)
        const data = await response.json();

        if (data.status) {
          Swal.fire("Éxito", "Interpretación agregada correctamente", "success");
          
        } else {
          Swal.fire("Error", data.message || "No se pudo agregar la interpretación", "error");
        }
      } catch (error) {
        console.error("Error al enviar datos:", error);
        Swal.fire("Error", "Hubo un problema al conectar con el servidor", "error");
      }
    }
  };

  return (
    <div className=" ">
      <button
        onClick={handleClick}
        className="px-4 py-2 w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
        Crear Interpretación
      </button>
    </div>
  );
}

export default CrearInterpretacion;

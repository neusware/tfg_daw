import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function SweetInsertarImagen() {
  const [muestras, setMuestras] = useState([]);
  const [url_Imagen, setUrl_Imagen] = useState("");

  // Obtener muestras desde la API
  const token = sessionStorage.getItem('token')
  useEffect(() => {
    fetch('/api/muestra',{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setMuestras(data.muestras);
        }
      })
      .catch(error => console.error("Error al obtener muestras: ", error));
  }, []);

  // Subir imagen a Cloudinary
  const changeUploadImage = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "subida_nota"); // Reemplázalo si el preset es incorrecto
    data.append("cloud_name", "dyx8ejbed"); // Asegúrate de que sea tu nombre de Cloudinary

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dyx8ejbed/image/upload", {
        method: "POST",  // Aquí estaba el error antes
        body: data,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error en la subida: ${errorText}`);
      }

      const result = await response.json();
      console.log("Imagen subida con éxito:", result.secure_url);
      setUrl_Imagen(result.secure_url); // Guardar la URL en el estado
      return result.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      Swal.fire("Error", "No se pudo subir la imagen a Cloudinary", "error");
      return null;
    }
  };

  // Insertar imagen
  const insertarImagen = async () => {
    setUrl_Imagen(""); // Resetear la URL

    // 🔹 Primero, solicitar datos (Zoom y Muestra)
    const { value: formValues } = await Swal.fire({
      title: 'Datos de la Imagen',
      html: `
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-2">Zoom:</label>
            <input type="number" id="zoom" class="swal2-input" min="1" max="10" step="0.1" placeholder="Ingrese el zoom" />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-2">Código de Muestra:</label>
            <select id="codigoMuestra" class="swal2-select">
              ${muestras.map(muestra => `<option value="${muestra.id}">${muestra.codigo}</option>`).join('')}
            </select>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Siguiente',
      focusConfirm: false,
      preConfirm: () => {
        const zoomValue = document.getElementById('zoom').value;
        const idMuestraValue = document.getElementById('codigoMuestra').value;


        if (!zoomValue || !idMuestraValue) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return false;
        }

        return { zoomValue, idMuestraValue };
      }
    });

    if (!formValues) return; // Si el usuario cancela

    // 🔹 Guardar los valores
    const zoom = formValues.zoomValue;
    const idMuestra = formValues.idMuestraValue;
    console.log("ID de la muestra: ",idMuestra )

    // 🔹 Segundo, solicitar imagen
    const { value: file } = await Swal.fire({
      title: 'Subir Imagen',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
      },
      showCancelButton: true,
      confirmButtonText: 'Subir',
      preConfirm: async (file) => {
        if (!file) {
          Swal.showValidationMessage('Debe seleccionar una imagen');
          return false;
        }
        return await changeUploadImage(file); // Subir imagen y devolver la URL
      }
    });

    if (!file) return; // Si el usuario cancela

    const imageURL = await changeUploadImage(file);


    // 🔹 Enviar los datos a la API
    fetch('/api/imagen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
     },
      body: JSON.stringify({
        ruta: imageURL,
        zoom: zoom,
        idMuestra: idMuestra
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          Swal.fire("Éxito", "Imagen insertada correctamente", "success");

        } else {
          Swal.fire("Error", "No se pudo insertar la imagen", "error");
        }
      })
      .catch(error => {
        Swal.fire("Error", "Hubo un problema al insertar la imagen", "error");
        console.error(error);
      });
  };

  return (
    <div>
      <button
        onClick={insertarImagen}
        className="px-8 py-2 w-full bg-green-500 hover:bg-green-700 text-white font-semibold text-lg rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Insertar Imagen
      </button>
    </div>
  );
}

export default SweetInsertarImagen;

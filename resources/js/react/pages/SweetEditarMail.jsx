import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const EditarEmailUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener usuarios desde la API
  useEffect(() => {
    fetch("/api/select_usuarios")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.usuarios)) {
          setUsuarios(data.usuarios);
        } else {
          console.error("La propiedad 'usuarios' no existe o no es un array:", data);
          setUsuarios([]);
        }
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleEdit = async () => {
    if (usuarios.length === 0) {
      Swal.fire("Error", "No hay usuarios disponibles para editar", "error");
      return;
    }


    const inputOptions = usuarios.reduce((options, usuario) => {
      options[usuario.id] = `${usuario.email}`;
      return options;
    }, {});


    const { value: userId } = await Swal.fire({
      title: "Editar Email de Usuario",
      text: "Selecciona el usuario cuyo email deseas editar:",
      icon: "info",
      input: "select",
      inputOptions: inputOptions,
      inputPlaceholder: "Selecciona un usuario",
      showCancelButton: true,
      confirmButtonText: "Siguiente",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33"
    });


    if (!userId) return;

    const usuarioSeleccionado = usuarios.find((user) => user.id === parseInt(userId));


    const { value: formValues } = await Swal.fire({
      title: "Confirmar Edición de Email",
      html: `
        <p>Vas a editar el email de <strong>${usuarioSeleccionado.nombre}</strong> (${usuarioSeleccionado.email}).</p>
        <input id="old_email" class="swal2-input" value="${usuarioSeleccionado.email}" disabled>
        <input id="new_email" type="email" class="swal2-input" placeholder="Ingresa el nuevo email">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar Cambios",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const newEmail = document.getElementById("new_email").value;
        if (!newEmail) {
          Swal.showValidationMessage("Debes ingresar un nuevo email");
        }
        return {
          id: usuarioSeleccionado.id,
          old_email: usuarioSeleccionado.email,
          new_email: newEmail
        };
      }
    });


    if (!formValues) return;

    try {
      const response = await fetch("/api/update_usuario_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      // Esperar la respuesta JSON
      const data = await response.json();

      if (data.status) {
        setUsuarios(usuarios.map((user) =>
          user.id === formValues.id ? { ...user, email: formValues.new_email } : user
        ));
        Swal.fire("Éxito", "El email ha sido actualizado correctamente", "success");
      } else {
        Swal.fire("Error", data.message || "No se pudo actualizar el email", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error en la conexión con el servidor", "error");
    }
  };

  return (
  <div className="flex flex-col">
    <button
      onClick={handleEdit}
      className="px-8 py-2 w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl
      shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Editar
    </button>
  </div>
  );
};

export default EditarEmailUsuario;

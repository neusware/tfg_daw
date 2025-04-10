import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const EditarContraseñaUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener usuarios desde la API
  useEffect(() => {
    fetch("/api/select_usuarios")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.usuarios)) {
          setUsuarios(data.usuarios);  // Establece el array de usuarios
        } else {
          console.error("La propiedad 'usuarios' no existe o no es un array:", data);
          setUsuarios([]);  // Evita el error y establece un array vacío
        }
      })
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  const handleEditPassword = async () => {
    if (usuarios.length === 0) {
      Swal.fire("Error", "No hay usuarios disponibles para editar", "error");
      return;
    }

    // Crear las opciones del select solo si usuarios es un array
    const inputOptions = usuarios.reduce((options, usuario) => {
      options[usuario.id] = `${usuario.nombre} (${usuario.email})`;
      return options;
    }, {});

    // Mostrar SweetAlert con select de usuarios
    const { value: userId } = await Swal.fire({
      title: "Editar Contraseña de Usuario",
      text: "Selecciona el usuario cuya contraseña deseas editar:",
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

    // Si no se selecciona un usuario, salir
    if (!userId) return;

    const usuarioSeleccionado = usuarios.find((user) => user.id === parseInt(userId));

    // Mostrar SweetAlert para editar la contraseña
    const { value: formValues } = await Swal.fire({
      title: "Confirmar Edición de Contraseña",
      html: `
        <p>Vas a editar la contraseña de <strong>${usuarioSeleccionado.nombre}</strong> (${usuarioSeleccionado.email}).</p>
        <input id="old_password" type="password" class="swal2-input" placeholder="Contraseña actual">
        <input id="new_password" type="password" class="swal2-input" placeholder="Ingresa la nueva contraseña">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar Cambios",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const oldPassword = document.getElementById("old_password").value;
        const newPassword = document.getElementById("new_password").value;

        if (!oldPassword) {
          Swal.showValidationMessage("Debes ingresar la contraseña actual");
        } else if (!newPassword) {
          Swal.showValidationMessage("Debes ingresar la nueva contraseña");
        }

        return {
          id: usuarioSeleccionado.id,
          old_password: oldPassword,
          new_password: newPassword
        };
      }
    });

    // Si no se ingresa la contraseña o la nueva contraseña, salir
    if (!formValues) return;

    // Enviar datos al backend para actualizar la contraseña
    try {
      const response = await fetch("/api/update_usuario_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });

      const data = await response.json();
      console.log(data)

      if (data.status) {
        Swal.fire("Éxito", "La contraseña ha sido actualizada correctamente", "success");
      } else {
        Swal.fire("Error", data.message || "No se pudo actualizar la contraseña", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error en la conexión con el servidor", "error");
    }
  };


  return (
  <div className="flex flex-col">
    <button
      onClick={handleEditPassword}
      className="px-8 py-2 w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl
       shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Editar
    </button>
  </div>
  );
};

export default EditarContraseñaUsuario;

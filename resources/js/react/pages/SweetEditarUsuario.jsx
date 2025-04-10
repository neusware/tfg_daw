import Swal from "sweetalert2";
import TablaUsuarios from "../TablaUsuarios";
import { FaEdit } from "react-icons/fa";

const EditarUsuario = ({ usuario, actualizarDatos }) => {
  const handleEdit = async () => {
    if (!usuario || !usuario.id || !usuario.email) {
      Swal.fire("Error", "No se ha proporcionado un usuario válido", "error");
      return;
    }


    const { value: opcion } = await Swal.fire({
      title: "Editar Usuario",
      text: "¿Qué deseas editar?",
      icon: "question",
      input: "radio",
      inputOptions: {
        email: "Email",
        password: "Contraseña",
      },
      showCancelButton: true,
      confirmButtonText: "Siguiente",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });

    if (!opcion) return;


    const { value: valores } = await Swal.fire({
      title: `Editar ${opcion === "email" ? "Email" : "Contraseña"}`,
      html: opcion === "email"
        ? `
          <input id="old_value" type="email" class="swal2-input" placeholder="Email actual" value="${usuario.email}" disabled>
          <input id="new_value" type="email" class="swal2-input" placeholder="Nuevo email">
        `
        : `
          <input id="old_value" type="password" class="swal2-input" placeholder="Contraseña actual">
          <input id="new_value" type="password" class="swal2-input" placeholder="Nueva contraseña">
        `,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      preConfirm: () => {
        const oldValue = document.getElementById("old_value").value;
        const newValue = document.getElementById("new_value").value;

        if (!newValue) {
          Swal.showValidationMessage("El nuevo valor no puede estar vacío");
          return false;
        }

        return { oldValue, newValue };
      },
    });

    if (!valores) return;


    const endpoint = opcion === "email" ? "/usuario_email" : "/usuario_password";

    const bodyData = opcion === "email"
      ? {
          id: usuario.id,
          old_email: usuario.email,
          new_email: valores.newValue,
        }
      : {
          id: usuario.id,
          old_password: valores.oldValue,
          new_password: valores.newValue,
        };



    try {

        const token = sessionStorage.getItem('token')
      const response = await fetch("/api"+endpoint, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok && data.status) {
        Swal.fire("Éxito", `El ${opcion === "email" ? "email" : "contraseña"} ha sido actualizado`, "success");
        actualizarDatos();
      } else {
        Swal.fire("Error", data.message || "No se pudo actualizar el usuario", "error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      Swal.fire("Error", "Error en la conexión con el servidor", "error");
    }

    <TablaUsuarios/>
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleEdit}
        className="p-2 w-8 flex items-center justify-center bg-[#6892D5] hover:bg-blue-600 text-white font-semibold text-sx rounded-xl
        shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaEdit />
      </button>
    </div>
  );
};

export default EditarUsuario;


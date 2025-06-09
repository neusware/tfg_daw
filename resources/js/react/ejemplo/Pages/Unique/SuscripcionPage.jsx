import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/dist/sweetalert2.min.css";

const MySwal = withReactContent(Swal);

function SuscripcionPage() {
  const { id } = useParams();
  const [suscripcion, setSuscripcion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/suscripciones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSuscripcion(data || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener la suscripción:", err);
        setLoading(false);
      });
  }, [id]);

  const handleComprar = () => {
    MySwal.fire({
      title: `Pagar suscripción de ${suscripcion.tipo}`,
      html: `
        <input id="swal-nombre" class="swal2-input" placeholder="Nombre del titular"/>
        <input id="swal-tarjeta" class="swal2-input" placeholder="Número de tarjeta" maxlength="19"/>
        <input id="swal-vencimiento" class="swal2-input" placeholder="MM/AA" maxlength="5"/>
        <input id="swal-cvv" class="swal2-input" placeholder="CVV" maxlength="3"/>
      `,
      didOpen: () => {
        const tarjetaInput = document.getElementById("swal-tarjeta");
        const vencimientoInput = document.getElementById("swal-vencimiento");
        const cvvInput = document.getElementById("swal-cvv");

        // Solo números en número de tarjeta
        tarjetaInput.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/\D/g, "");
        });

        // Autocompletar MM/AA
        vencimientoInput.addEventListener("input", (e) => {
          let value = e.target.value.replace(/\D/g, "").slice(0, 4);
          if (value.length >= 3) {
            value = value.slice(0, 2) + "/" + value.slice(2);
          }
          e.target.value = value;
        });

        // Solo 3 dígitos en CVV
        cvvInput.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
        });
      },
      showCancelButton: true,
      confirmButtonText: "Pagar ahora",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nombre = document.getElementById("swal-nombre").value.trim();
        const tarjeta = document.getElementById("swal-tarjeta").value.trim();
        const vencimiento = document.getElementById("swal-vencimiento").value.trim();
        const cvv = document.getElementById("swal-cvv").value.trim();

        const regexVencimiento = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!nombre || !tarjeta || !vencimiento || !cvv) {
          Swal.showValidationMessage("Por favor, completa todos los campos");
          return false;
        }
        if (!/^\d+$/.test(tarjeta)) {
          Swal.showValidationMessage("El número de tarjeta debe contener solo dígitos");
          return false;
        }
        if (!regexVencimiento.test(vencimiento)) {
          Swal.showValidationMessage("Formato de vencimiento inválido (MM/AA)");
          return false;
        }
        if (!/^\d{3}$/.test(cvv)) {
          Swal.showValidationMessage("El CVV debe tener exactamente 3 dígitos");
          return false;
        }

        return true;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "¡Pago exitoso!",
          text: "Gracias por adquirir la suscripción.",
          confirmButtonText: "Cerrar",
        });
      }
    });
  };

  if (loading)
    return <div className="text-center mt-10">Cargando suscripción...</div>;

  if (!suscripcion)
    return (
      <div className="text-center mt-10 text-red-600">
        Suscripción no encontrada
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Suscripción: {suscripcion.tipo}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {suscripcion.descripcion}
        </p>

        <div className="flex justify-center mb-6">
          <img
            src={suscripcion.imagen || "https://via.placeholder.com/200"}
            alt={suscripcion.tipo}
            className="rounded-xl shadow-lg w-48 h-48 object-cover"
          />
        </div>

        <p className="text-2xl font-bold text-primary mb-4">
          {suscripcion.precio} €
        </p>

        <button
          onClick={handleComprar}
          className="bg-primary hover:bg-red text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          Comprar Suscripción
        </button>
      </div>
    </div>
  );
}

export default SuscripcionPage;

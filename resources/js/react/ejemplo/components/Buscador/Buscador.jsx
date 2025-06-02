import React from 'react';
import Button from '../Shared/Button';

function Buscador() {
  return (
  <section className="bg-second lg:grid lg:place-content-center dark:bg-gray-900">
    <div
      className="mx-auto w-screen h-[85vh] max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
    >
      {/* Texto a la izquierda */}
      <div className="max-w-prose text-left">
        <h1 className="text-4xl font-bold text-white sm:text-5xl dark:text-white capitalize">
          Escanea, conoce y
          <strong className="text-red uppercase"> decide mejor </strong>
          lo que consumes
        </h1>

        <p className="mt-4 text-white text-base text-pretty sm:text-lg/relaxed dark:text-gray-200">
          Con EcoScan accedes a información detallada sobre productos alimenticios con solo escanear el QR del envase. Ingredientes, alérgenos, origen, sostenibilidad y mucho más, al instante.
        </p>

        <div className="mt-4 flex gap-4 sm:mt-6">
          <a className="inline-block rounded border border-indigo-600 bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red"
            href="#">
            Empezar ahora
          </a>

          <a
            className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            href="#"
          >
            Saber más
          </a>
        </div>
      </div>

      {/* Imagen a la derecha */}
      <div className="mt-8 md:mt-0 flex justify-center">
        <img
          src="https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2025/02/27/persona-eligiendo-leche-en-el-supermercado.jpeg"
          alt="EcoScan app demostración"
          className="w-full max-w-xl rounded-xl shadow-lg"
        />
      </div>
    </div>
  </section>


  );
}

export default Buscador;

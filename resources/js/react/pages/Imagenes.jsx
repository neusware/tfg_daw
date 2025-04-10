import React, { useState } from 'react';
import TablaImagenes from '../TablaImagenes';
import SweetInsertarImagen from './SweetImagen/SweetInsertarImagen';

function Imagenes() {
    const [url_Imagen, setUrl_Imagen] = useState("");

    // Función para insertar una imagen usando fetch
    const changeUploadImage = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();

        data.append("file", file);
        data.append("upload_preset", "subida_nota");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dyx8ejbed/image/upload", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                throw new Error(`Error en la subida: ${response.statusText}`);
            }

            const result = await response.json();
            setUrl_Imagen(result.secure_url);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
    };

    // Función para eliminar una imagen
    const deleteImagen = () => {
        setUrl_Imagen("");
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex-col justify-center bg-white rounded-xl border-gray-200 border-2 w-[75vw] mt-10 ">
                <div className="flex flex-row">
                <h3 className="w-1/2 text-base text-left text-gray-600 m-8 ml-[6%] font-bold">Todas las imágenes</h3>
                <div className="w-1/2 text-center p-6">
                    <SweetInsertarImagen />
                </div>
                </div>

                <div className="flex justify-left sm:justify-center mb-7 overflow-auto">
                <div className="col-span-1 lg:col-span-2 w-full max-w-4xl mr-40">
                    <TablaImagenes />
                </div>
                </div>
            </div>
        </div>


    );
}

export default Imagenes;



/*
        <div>
            <h1>Selecciona la imagen</h1>
            <div>
                <input type="file"  onChange={changeUploadImage} />
                {url_Imagen && (
                    <div>
                        <img src={url_Imagen} alt="Imagen subida" />
                        <button onClick={deleteImagen}>Eliminar Imagen</button>
                    </div>
                )}
            </div>
        </div>

*/

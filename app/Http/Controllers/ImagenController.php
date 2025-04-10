<?php
// filepath: /c:/xampp/htdocs/app/Http/Controllers/Api/ImagenController.php


namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Imagen;
use Illuminate\Support\Facades\Validator;

class ImagenController extends Controller
{
    public function select()
    {
        $imagenes = Imagen::all();
        
        if ($imagenes) {
            $data = [
                "status" => true,
                "message" => "Imágenes recuperadas",
                "imagenes" => $imagenes
            ];
            
            return response()->json($data, 200);
        } else {
            $data = [
                "status" => false,
                "message" => "No se recuperaron imágenes",
            ];

            return response()->json($data, 500);
        }
    }

    public function insert(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            "ruta" => "required|string",
            "zoom" => "required|string",
            "idMuestra" => "required|exists:muestra,id"
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => false,
                "message" => "Error de validación",
                "errors" => $validator->errors()
            ];

            return response()->json($data, 421);
        } else {
            $imagen = new Imagen;

            foreach ($request->json()->all() as $clave => $valor) {
                $imagen->$clave = $valor;
            }

            if ($imagen->save()) {
                $data = [
                    "status" => true,
                    "message" => "Imagen insertada correctamente",
                    "imagen" => $imagen
                ];

                return response()->json($data, 201);
            } else {
                $data = [
                    "status" => false,
                    "message" => "Error al interactuar con la base de datos",
                ];

                return response()->json($data, 500);
            }
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            "id" => "required|exists:imagen,id",
            "ruta" => "required|string",
            "zoom" => "required|string",
            "idMuestra" => "required|exists:muestra,id"
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => false,
                "message" => "Error de validación",
                "errors" => $validator->errors()
            ];

            return response()->json($data, 200);
        } else {
            $imagen = Imagen::find($request->id);

            if ($imagen) {
                $imagen->ruta = $request->ruta;
                $imagen->zoom = $request->zoom;
                $imagen->idMuestra = $request->idMuestra;

                if ($imagen->save()) {
                    $data = [
                        "status" => true,
                        "message" => "Imagen actualizada con éxito",
                        "imagen" => $imagen
                    ];

                    return response()->json($data, 200);
                } else {
                    $data = [
                        "status" => false,
                        "message" => "Error al interactuar con la base de datos"
                    ];

                    return response()->json($data, 500);
                }
            } else {
                $data = [
                    "status" => false,
                    "message" => "Error al interactuar con la base de datos"
                ];

                return response()->json($data, 500);
            }
        }
    }

    public function delete(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            "id" => "required|exists:imagen,id"
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => false,
                "message" => "Error en la validación",
                "errors" => $validator->errors()
            ];

            return response()->json($data, 421);
        } else {
            $imagen = Imagen::find($request->id);

            if ($imagen) {
                $imagen->delete();

                $data = [
                    "status" => true,
                    "message" => "Imagen eliminada",
                    "imagen" => $imagen
                ];

                return response()->json($data, 200);
            } else {
                $data = [
                    "status" => false,
                    "message" => "Error al interactuar con la base de datos",
                    "errors" => $validator->errors()
                ];

                return response()->json($data, 500);
            }
        }
    }
}
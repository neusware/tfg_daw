<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tipo_de_estudio;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class TipodeEstudioController extends Controller
{
    public function select()
    {


        $tipos_de_estudio = Tipo_de_estudio::all();

        if ($tipos_de_estudio) {

            //elaboro el json
            $data = [
                "status" => true,
                "message" => "Tipos de estudio recuperados",
                "tipos_de_estudio" => $tipos_de_estudio
            ];

            return response()->json($data, 200);
        } else {


            //elaboro el json
            $data = [
                "status" => false,
                "message" => "No se recuperaron tipos de estudio",
            ];

            return response()->json($data, 500);
        }
    }


    public function insert(Request $request)
    {

        $validator = Validator::make($request->json()->all(), [
            "nombre" => "required"
        ]);

        if ($validator->fails()) {
            $data = [
                "status" => false,
                "message" => "Error de validación",
                "errors" => $validator->errors()
            ];

            return response()->json($data, 421);
        } else {

            $tipo_de_estudio = new Tipo_de_estudio;

            foreach ($request->json()->all() as $clave => $valor) {
                $tipo_de_estudio->$clave = $valor;
            }

            if ($tipo_de_estudio->save()) {

                $data = [
                    "status" => true,
                    "message" => "Tipo de estudio insertado correctamente",
                    "tipo_de_estudio" => $tipo_de_estudio
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

            "id" => "required | exists:tipo_de_estudio,id",
            "nombre" => "required | string "
        ]);

        if ($validator->fails()) {

            $data = [

                "status" => false,
                "message" => "Error de validación",
                "errors" => $validator->errors()
            ];

            return response()->json($data, 200);
        } else {

            //recupero el registro
            $tipo_de_estudio = Tipo_de_estudio::find($request->id);

            if ($tipo_de_estudio) {

                $tipo_de_estudio->nombre = $request->nombre;

                if ($tipo_de_estudio->save()) {

                    $data = [

                        "status" => true,
                        "message" => "Tipo de estudio actualizado con éxito",
                        "tipo_de_estudio" => $tipo_de_estudio

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
            "id" => "required | exists:tipo_de_estudio,id"
        ]);

        if ($validator->fails()) {

            $data = [

                "status" => false,
                "message" => "Error en la validación",
                "errors" => $validator->errors()

            ];


            return response()->json($data, 421);
        } else {

            //recupero y elimino
            $tipo_de_estudio = Tipo_de_estudio::find($request->id);

            if ($tipo_de_estudio) {

                //elimino
                $tipo_de_estudio->delete();

                //elaboro el JSON
                $data = [

                    "status" => true,
                    "message" => "Se he eliminado el tipo de estudio",
                    "tipo de estudio" => $tipo_de_estudio

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

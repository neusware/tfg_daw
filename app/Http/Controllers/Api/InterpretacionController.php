<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Interpretacion;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class InterpretacionController extends Controller
{
    public function select()
    {
        $interpretaciones = Interpretacion::all();

        if ($interpretaciones) {
            // Elaboro el JSON
            $data = [
                'status' => true,
                'message' => 'Interpretaciones recuperadas',
                'interpretaciones' => $interpretaciones
            ];

            // Respondo
            return response()->json($data, 200);
        } else {
            // Elaboro el JSON
            $data = [
                'status' => false,
                'message' => 'No se encontraron interpretaciones',
                'interpretaciones' => null
            ];

            // Respondo
            return response()->json($data, 200);
        }
    }

    public function insert(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required',
            'codigo' => 'required',
            'idTipoEstudio' => 'required|exists:tipo_de_estudio,id'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => false,
                'message' => 'Datos incorrectos',
                'errors' => $validator->errors()
            ];
            return response()->json($data, 200);
        } else {
            // Creo el objeto
            $interpretacion = new Interpretacion();
            // Modifico sus atributos según el request
            $interpretacion->nombre = $request->nombre;
            $interpretacion->codigo = $request->codigo;
            $interpretacion->idTipoEstudio = $request->idTipoEstudio;

            // Guardo
            if ($interpretacion->save()) {
                $data = [
                    'status' => true,
                    'message' => 'Interpretación insertada',
                    'interpretaciones' => $interpretacion
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al insertar la interpretación',
                    'interpretaciones' => null
                ];
                return response()->json($data, 500);
            }
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:interpretacion,id',
            'nombre' => 'required|string'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => false,
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ];
            return response()->json($data, 400);
        } else {
            // Busco el registro
            $interpretacion = Interpretacion::find($request->id);

            // Trato de modificar
            if ($interpretacion && $interpretacion->nombre != $request->nombre) {
                // Modifico
                $interpretacion->nombre = $request->nombre;

                // Salvo
                if ($interpretacion->save()) {
                    $data = [
                        'status' => true,
                        'message' => 'Interpretación actualizada',
                        'interpretacion' => $interpretacion
                    ];
                    return response()->json($data, 200);
                } else {
                    $data = [
                        'status' => false,
                        'message' => 'Error al interactuar con la base de datos'
                    ];
                    return response()->json($data, 500);
                }
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al interactuar con la base de datos'
                ];
                return response()->json($data, 500);
            }
        }
    }

    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:interpretacion,id'
        ]);

        if ($validator->fails()) {
            // Elaboro
            $data = [
                'status' => false,
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors()
            ];
            return response()->json($data, 421);
        } else {
            // Recupero el registro
            $interpretacion = Interpretacion::find($request->id);

            // Compruebo
            if ($interpretacion) {
                // Elimino comprobando
                if ($interpretacion->delete()) {
                    $data = [
                        'status' => true,
                        'message' => 'Interpretación eliminada',
                        'interpretacion' => $interpretacion
                    ];
                    return response()->json($data, 200);
                } else {
                    $data = [
                        'status' => false,
                        'message' => 'Error al interactuar con la base de datos'
                    ];
                    return response()->json($data, 500);
                }
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al interactuar con la base de datos'
                ];
                return response()->json($data, 500);
            }
        }
    }
}



































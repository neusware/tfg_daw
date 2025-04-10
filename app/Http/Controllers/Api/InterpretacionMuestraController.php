<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Interpretacion;
use App\Http\Controllers\Controller;
use App\Models\Interpretacion_Muestra;
use App\Models\InterpretacionMuestra;
use Illuminate\Support\Facades\Validator;

class InterpretacionMuestraController extends Controller
{

    /**
     * Selecciona y devuelve los datos necesarios.
     *
     * @return \Illuminate\Http\JsonResponse La respuesta JSON con los datos seleccionados.
     *
     * @api {get} /interpretacion-muestra Obtener todas las interpretaciones de muestra
     * @apiName GetInterpretacionesMuestra
     * @apiGroup Interpretacion - Muestra
     * @apiVersion 1.0.0
     * @apiDescription Recupera todas las interpretaciones de muestras existentes.
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo del resultado.
     * @apiSuccess {Object[]} registro Lista de interpretaciones recuperadas.
     * @apiSuccessExample {json} Respuesta exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Interpretaciones recuperadas",
     *       "registro": [
     *         {
     *           "id": 1,
     *           "idMuestra": 2,
     *           "idInterpretacion": 3,
     *           "descripcion": "descripcion 1"
     *         },
     *         {
     *           "id": 2,
     *           "idMuestra": 3,
     *           "idInterpretacion": 4,
     *           "descripcion": "descripcion 2"
     *         }
     *       ]
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo del error.
     * @apiErrorExample {json} Respuesta de error:
     *     HTTP/1.1 204 OK
     *     {
     *       "status": false,
     *       "message": "No se encontraron interpretaciones"
     *     }
     */
    function select()
    {

        $registros = Interpretacion_Muestra::all();

        if ($registros) {

            //elaboro el json
            $data = [
                'status' => true,
                'message' => 'Interpretaciones recuperadas',
                'registro' => $registros
            ];

            //respondo
            return response()->json($data, 200);
        } else {

            //elaboro el json
            $data = [
                'status' => false,
                'message' => 'No se encontraron interpretaciones'
            ];

            //respondo
            return response()->json($data, 204); //solicitud procesada pero no content a devolver
        }
    }

    // JSON TIPO {"idMuestra":2,"idInterpretacion":3,"descripcion":"nueva descripcion"}
    /**
     * Inserta una nueva muestra en la base de datos.
     *
     * @param \Illuminate\Http\Request $request La solicitud HTTP que contiene los datos de la muestra.
     * @return \Illuminate\Http\JsonResponse La respuesta JSON con el resultado de la operación.
     *
     * @api {post} /interpretacion-muestra Insertar interpretación de muestra
     * @apiName InsertInterpretacionMuestra
     * @apiGroup Interpretacion - Muestra
     * @apiVersion 1.0.0
     * @apiDescription Inserta una nueva interpretación de muestra en la base de datos.
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} registro Datos de la muestra insertada.
     * @apiSuccessExample {json} Respuesta exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Interpretación de muestra guardada",
     *       "registro": {
     *         "idMuestra": 2,
     *         "idInterpretacion": 3,
     *         "descripcion": "nueva descripcion"
     *       }
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo de la operación.
     * @apiError {Object} errors Detalles de los errores de validación.
     * @apiErrorExample {json} Error de validación:
     *     HTTP/1.1 400 BAD REQUEST
     *     {
     *       "status": false,
     *       "message": "Error de validación",
     *       "errors": {
     *         "idMuestra": ["El campo idMuestra es obligatorio."],
     *         "idInterpretacion": ["El campo idInterpretacion es obligatorio."],
     *         "descripcion": ["El campo descripcion es obligatorio."]
     *       }
     *     }
     * @apiErrorExample {json} Error del servidor:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al guardar la interpretación de muestra"
     *     }
     */
    function insert(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'idMuestra' => 'required| exists:muestra,id',
            'idInterpretacion' => 'required|exists:interpretacion,id',
            'descripcion' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => false,
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ];
            return response()->json($data, 200);
        } else {

            //creo el objeto a partir del request
            $registro = new Interpretacion_Muestra();
            $registro->idMuestra = $request->idMuestra;
            $registro->idInterpretacion = $request->idInterpretacion;
            $registro->descripcion = $request->descripcion;

            //guardo en la base de datos
            if ($registro->save()) {
                $data = [
                    'status' => true,
                    'message' => 'Interpretación de muestra guardada',
                    'registro' => $registro
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al guardar la interpretación de muestra'
                ];
                return response()->json($data, 500);
            }
        }
    }

    //update (descripción) por id
    /**
     * Actualiza la descripción de una interpretación de muestra.
     *
     * @param \Illuminate\Http\Request $request La solicitud HTTP que contiene los datos de la muestra.
     * @return \Illuminate\Http\JsonResponse La respuesta JSON con el resultado de la operación.
     * @api {put} /interpretacion-muestra Actualizar interpretación de muestra
     * @apiName UpdateRegistro
     * @apiGroup Interpretacion - Muestra
     * @apiVersion 1.0.0
     * @apiDescription Actualiza la descripción de una interpretación de muestra por su id.
     * @apiParam {Number} id El ID del registro.
     * @apiParam {String} descripcion La nueva descripción de la interpretación de la muestra.
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} registro Datos de la muestra actualizada.
     * @apiSuccessExample {json} Respuesta exitosa:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Interpretación de muestra actualizada",
     *       "registro": {
     *         "id": 1,
     *         "idMuestra": 2,
     *         "idInterpretacion": 3,
     *         "descripcion": "nueva descripcion"
     *       }
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo del error.
     * @apiError {Object} errors Detalles de los errores de validación.
     * @apiErrorExample {json} Error de validación:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": false,
     *       "message": "Error de validación",
     *       "errors": {
     *         "id": ["El campo id es obligatorio."],
     *         "descripcion": ["El campo descripcion es obligatorio."]
     *       }
     *     }
     * @apiErrorExample {json} Error del servidor:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al actualizar la interpretación de muestra"
     *     }
     */
    function update(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:interpretacion_muestra,id',
            'descripcion' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => false,
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ];

            return response()->json($data, 200);
        } else {


            //recupero el objeto a partir del request
            $registro = Interpretacion_Muestra::find($request->id);

            //edito la descripcion
            $registro->descripcion = $request->descripcion;

            //almaceno
            if ($registro->save()) {
                $data = [
                    'status' => true,
                    'message' => 'Interpretación de muestra actualizada',
                    'registro' => $registro
                ];
                return response()->json($data, 200);
            } else {

                $data = [
                    'status' => false,
                    'message' => 'Error al actualizar la interpretación de muestra'
                ];
                return response()->json($data, 500);
            }
        }
    }


    //delete

    /**
     * @api {delete} /interpretacion-muestra Eliminar interpretación de muestra
     * @apiName DeleteRegistro
     * @apiGroup Interpretacion - Muestra
     * @apiVersion 1.0.0
     * @apiDescription Elimina una interpretación de muestra específica por su id.
     *
     * @apiParam {Number} id ID de la interpretación de muestra a eliminar.
     *
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Interpretación de muestra eliminada",
     *       "registro": {
     *         "id": 1,
     *         "idMuestra": 2,
     *         "idInterpretacion": 3,
     *         "descripcion": "nueva descripcion"
     *       }
     *     }
     *
     * @apiError {String} error Mensaje de error.
     * @apiErrorExample {json} Error de servidor:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al eliminar la interpretación de muestra"
     *     }
     * @apiErrorExample {json} Error de validación:
     *     HTTP/1.1 400 Bad Request
     *     {
    *     {
    *       "status": false,
    *       "message": "Error de validación",
    *       "errors": {
    *         "id": ["El campo id es obligatorio."]
    *       }
    *     }
     */
    function delete(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:interpretacion_muestra,id'
        ]);

        if ($validator->fails()) {
            $data = [
                'status' => false,
                'message' => 'Error de validación',
                'errors' => $validator->errors()
            ];

            return response()->json($data, 200);
        } else {

            //recupero
            $registro = Interpretacion_Muestra::find($request->id);

            //elimino
            if ($registro->delete()) {
                $data = [
                    'status' => true,
                    'message' => 'Interpretación de muestra eliminada',
                    'registro' => $registro
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'status' => false,
                    'message' => 'Error al eliminar la interpretación de muestra',
                ];
                return response()->json($data, 400);
            }
        }
    }
}

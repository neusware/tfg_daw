<?php

namespace App\Http\Controllers\Api;

use App\Models\Muestra;
use Barryvdh\DomPDF\Facade\PDF;
use App\Models\Naturaleza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class MuestraController extends Controller

/*
JSON tipo

    Naturaleza con Organo
    {
    "fecha": "2025-01-01",
    "organo": "Páncreas",
    "idUsuario": 1,
    "idNaturaleza": 1,
    "idFormato": 1,
    "idSede": 3,
    "idCalidad": 1
    }

    Naturaleza sin Organo
    {
    "fecha": "2025-01-01",
    "idUsuario": 1,
    "idNaturaleza": 5,
    "idFormato": 1,
    "idSede": 3,
    "idCalidad": 1
        }
    }

*/
{
    public function download($id)
    {
        // Obtener los datos de la muestra con la relación de imágenes
        $data = Muestra::with([
            'usuario', 
            'naturaleza', 
            'imagen', 
            'sede', 
            'formato', 
            'calidad', 
            'interpretacion' => function($query) {
                $query->withPivot('descripcion');
            }
        ])->findOrFail($id);
    
        $dataArray = $data->toArray();
    
        // Generar el PDF con los datos obtenidos
        $pdf = PDF::loadView('vista_pdf', ['data' => $dataArray]);
    
        // Retornar el PDF
        return $pdf->stream('muestra.pdf');
    }
    

    /**
     * @api {get} /api/select_muestras Obtener todas las muestras
     * @apiName SeleccionarMuestras
     * @apiGroup Muestras
     * @apiVersion 1.0.0
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object[]} muestras Lista de muestras ordenadas por idNaturaleza.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Muestras encontradas",
     *       "muestras": [
     *         {
     *           "id": 1,
     *           "idNaturaleza": 2,
     *           ...
     *         },
     *         ...
     *       ]
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje de error.
     *
     * @apiErrorExample {json} Error - Sin registros:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": false,
     *       "message": "No hay muestras en la base de datos"
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje de error.
     *
     * @apiErrorExample {json} Error de validación:
     *     HTTP/1.1 422 OK
     *     {
     *       "status": false,
     *       "message": "Error en la validación",
     *      "errors": {
     *         "fecha": ["El campo fecha es obligatorio."],
     *         "idUsuario": ["El campo idUsuario es obligatorio."],
     *         ...
     *      }
     */
    public function select_muestras()
    {
        $muestras = Muestra::all();

        if ($muestras->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No hay muestras en la base de datos'
            ], 200);
        }

        return response()->json([
            'status' => true,
            'message' => 'Muestras encontradas',
            'muestras' => $muestras
        ], 200);

    }
    /*
    JSON TIPO

    {
    "fecha": "2025-01-01",
    "organo": "Corazón",
    "idUsuario": 1,
    "idNaturaleza": 5,
    "idFormato": 1,
    "idSede": 3,
    "idCalidad": 1
    }

    OPCIONAL par clave-valor "órgano"
    */
    /**
     * Inserta una nueva muestra en la base de datos.
     *
     * @param \Illuminate\Http\Request $request La solicitud HTTP que contiene los datos de la muestra.
     *
     * @return \Illuminate\Http\JsonResponse Respuesta JSON con el estado de la operación y los datos de la muestra insertada.
     *
     * @api {post} /api/insert_muestra Insertar muestra
     * @apiName InsertarMuestra
     * @apiGroup Muestras
     *
     * @apiParam {Date} fecha Fecha de la muestra (requerido).
     * @apiParam {String} [organo] Órgano de la muestra (opcional).
     * @apiParam {Number} idUsuario ID del usuario (requerido).
     * @apiParam {Number} idNaturaleza ID de la naturaleza (requerido).
     * @apiParam {Number} idFormato ID del formato (requerido).
     * @apiParam {Number} idSede ID de la sede (requerido).
     * @apiParam {Number} idCalidad ID de la calidad (requerido).
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} muestra Datos de la muestra insertada.
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Muestra insertada correctamente",
     *       "muestra": {
     *         "fecha": "2025-01-01",
     *         "organo": "Corazón",
     *         "codigo": "B25001",
     *         "idUsuario": 1,
     *         "idNaturaleza": 5,
     *         "idFormato": 1,
     *         "idSede": 3,
     *         "idCalidad": 1
     *       }
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje de error.
     * @apiError {Object} errors Errores de validación.
     *
     * @apiErrorExample {json} Error de Validación:
     *     HTTP/1.1 422 Unprocessable Entity
     *     {
     *       "status": false,
     *       "message": "Error en la validacion",
     *       "errors": {
     *         "fecha": ["El campo fecha es obligatorio."],
     *         "idUsuario": ["El campo idUsuario es obligatorio."],
     *         ...
     *       }
     *     }
     *
     * @apiErrorExample {json} Error al Insertar:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": false,
     *       "message": "Error al insertar la muestra"
     *     }
     */
    public function insert_muestra(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'fecha' => 'required|date',
            'organo' => 'nullable|string',
            'idUsuario' => 'required|exists:usuario,id',
            'idNaturaleza' => 'required|exists:naturaleza,id',
            'idFormato' => 'required|exists:formato,id',
            'idSede' => 'required|exists:sede,id',
            'idCalidad' => 'required|exists:calidad,id',
        ]);

        if ($validator->fails()) {
            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors()
            ];

            //respondo
            return response()->json($data, 422); //request understood but not valid data recieved

        } else {

            // Obtener el año de la fecha
            $year = date('y', strtotime($request->fecha));

            // Consulta para contar el número de muestras existentes con el mismo idNaturaleza y año
            /* $count = Muestra::where('idNaturaleza', $request->idNaturaleza)
            ->whereYear('fecha', $year)
            ->count(); */
            $count = Muestra::where('idNaturaleza', $request->idNaturaleza)
                ->whereYear('fecha', '20' . $year)
                ->count();

            //! Generar el código de la muestra not always EX, it depends on the natureID, asique consulta a la tabla naturaleza con el idNaturaleza y saco el codigo

            // query codigo naturaleza
            $codigoNaturaleza = Naturaleza::where('id', $request->idNaturaleza)->value('codigo');

            //concat
            /*  $codigo = $codigoNaturaleza . $request->idNaturaleza . $year . str_pad($count + 1, 3, '0', STR_PAD_LEFT); */
            $codigo = $codigoNaturaleza . $year . str_pad($count + 1, 3, '0', STR_PAD_LEFT);


            //crear la muestra campo a campo desde el request
            $muestra = new Muestra();
            $muestra->fecha = $request->fecha;
            $muestra->organo = $request->organo;
            $muestra->codigo = $codigo; //codigo generado
            $muestra->idUsuario = $request->idUsuario;
            $muestra->idNaturaleza = $request->idNaturaleza;
            $muestra->idFormato = $request->idFormato;
            $muestra->idSede = $request->idSede;
            $muestra->idCalidad = $request->idCalidad;


            //guardo registro
            if ($muestra->save()) {
                return response()->json([
                    'status' => true,
                    'message' => 'Muestra insertada correctamente',
                    'muestra' => $muestra
                ], 200); //200
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Error al insertar la muestra'
                ], 422);
            }
        }
    }


    /* JSON TIPO (codigo + al menos 1 campo a modificar)
        {
            "codigo": "B25001" --> campo por el que busca
            "fecha": "2025-01-02",
            "organo": "Hígado",
            "idUsuario": 2,
            "idNaturaleza": 3,
            "idFormato": 2,
            "idSede": 4,
            "idCalidad": 2
        }
    */
    /**
     * Actualiza una muestra existente en la base de datos.
     *
     * @api {put} /api/update_muestra Actualizar muestra
     * @apiName UpdateMuestra
     * @apiGroup Muestras
     * @apiVersion 1.0.0
     *
     * @apiParam {String} codigo Código de la muestra (requerido).
     * @apiParam {Date} [fecha] Fecha de la muestra (opcional y existente).
     * @apiParam {String} [organo] Órgano de la muestra (opcional y existente).
     * @apiParam {Integer} [idUsuario] ID del usuario asociado (opcional y existente).
     * @apiParam {Integer} [idNaturaleza] ID de la naturaleza de la muestra (opcional y existente).
     * @apiParam {Integer} [idFormato] ID del formato de la muestra (opcional y existente).
     * @apiParam {Integer} [idSede] ID de la sede asociada (opcional y existente).
     * @apiParam {Integer} [idCalidad] ID de la calidad de la muestra (opcional y existente).
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje descriptivo de la operación.
     * @apiSuccess {Object} muestra Datos de la muestra actualizada.
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Muestra actualizada correctamente",
     *       "muestra": {
     *         "codigo": "B25001",
     *         "fecha": "2025-01-02",
     *         "organo": "Hígado",
     *         "idUsuario": 2,
     *         "idNaturaleza": 3,
     *         "idFormato": 2,
     *         "idSede": 4,
     *         "idCalidad": 2
     *       }
     *     }
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje descriptivo de la operación.
     * @apiError {Object} errors Detalles de los errores de validación.
     *
     * @apiErrorExample {json} Respuesta de error:
     *     HTTP/1.1 400 Bad Request
     *     {
     *       "status": false,
     *       "message": "Error en la validacion",
     *       "errors": {
     *         "codigo": [
     *           "El campo codigo es obligatorio."
     *         ]
     *       }
     *     }
     *
     */
    public function update_muestra(Request $request)
    {

        //validaciones
        $validator = Validator::make($request->json()->all(), [
            'codigo' => 'required|exists:muestra,codigo',
            'fecha' => 'nullable|date',
            'organo' => 'nullable|string',
            'idUsuario' => 'nullable|exists:usuario,id',
            'idNaturaleza' => 'nullable|exists:naturaleza,id',
            'idFormato' => 'nullable|exists:formato,id',
            'idSede' => 'nullable|exists:sede,id',
            'idCalidad' => 'nullable|exists:calidad,id',
        ]);

        if ($validator->fails()) {
            //genero json
            $data = [
                'status' => false,
                'message' => 'Error en la validacion',
                'errors' => $validator->errors(),
            ];

            return response()->json($data, 400);
        } else {

            //recupero la muestra x codigo, sin que siga buscando
            $muestra = Muestra::where('codigo', $request->codigo)->first();

            if ($muestra) {

                //compruebo qué campos vienen el el request, y cambio si es necesario | data.has(key);
                $campos = ['fecha', 'organo', 'idUsuario', 'idNaturaleza', 'idFormato', 'idSede', 'idCalidad'];
                foreach ($campos as $campo) {
                    if ($request->has($campo)) {
                        $muestra->$campo = $request->$campo;
                    }
                }

                //guardo
                if ($muestra->save()) {

                    //elaboro json y respondo
                    return response()->json([
                        'status' => true,
                        'message' => 'Muestra actualizada correctamente',
                        'muestra' => $muestra
                    ], 200);
                } else {

                    return response()->json([
                        'status' => false,
                        'message' => 'Error al actualizar la muestra'
                    ], 500);
                }
            }
        }
    }
           //todo sample apidoc request
            /**
             * Elimina una muestra por su código.
             *
             * @api {delete} /api/delete_muestra Eliminar muestra
             * @apiName DeleteMuestra
             * @apiGroup Muestras
             *
             * @apiParam (Request Body) {String} codigo El código de la muestra a eliminar (requerido).
             *
             * @apiSuccess {Boolean} status Indica el estado de la operación.
             * @apiSuccess {String} message Mensaje descriptivo de la operación.
             * @apiSuccess {Object} muestra La muestra eliminada.
             * @apiSuccessExample {json} Respuesta de Éxito:
             *     HTTP/1.1 200 OK
             *     {
             *       "status": true,
             *       "message": "Muestra eliminada correctamente",
             *       "muestra": {
             *         "codigo": "B25001",
             *         "fecha": "2025-01-02",
             *         "organo": "Hígado",
             *         "idUsuario": 2,
             *         "idNaturaleza": 3,
             *         "idFormato": 2,
             *         "idSede": 4,
             *         "idCalidad": 2
             *       }
             *     }
             *
             * @apiError {Boolean} status Indica el estado de la operación.
             * @apiError {String} message Mensaje descriptivo de la operación.
             * @apiError {Object} errors Errores de validación.
             *
             * @apiErrorExample {json} Error de Validación:
             *     HTTP/1.1 422 Unprocessable Entity
             *     {
             *       "status": false,
             *       "message": "Error en la validacion",
             *       "errors": {
             *         "codigo": [
             *           "El campo codigo es obligatorio."
             *         ]
             *       }
             *     }
             *
             * @apiErrorExample {json} Error al Eliminar:
             *     HTTP/1.1 500 Internal Server Error
             *     {
             *       "status": false,
             *       "message": "Error al eliminar la muestra"
             *     }
             */
            function delete_muestra(Request $request)
            {

                //validaciones
                $validator = Validator::make($request->json()->all(), [
                    'codigo' => 'required|exists:muestra,codigo'
                ]);

                if ($validator->fails()) {

                    //genero json
                    $data = [
                        'status' => false,
                        'message' => 'Error en la validacion',
                        'errors' => $validator->errors()
                    ];

                    //respondo
                    return response()->json($data, 422);
                } else {

                    //recupero la muestra x codigo, no dejo que siga buscando
                    $muestra = Muestra::where('codigo', $request->codigo)->first();

                    //elimino la muestra
                    if ($muestra->delete()) {

                        //elaboro json y respondo
                        return response()->json([
                            'status' => true,
                            'message' => 'Muestra eliminada correctamente',
                            'muestra' => $muestra
                        ], 200);
                    } else {
                        return response()->json([
                            'status' => false,
                            'message' => 'Error al eliminar la muestra'
                        ], 500);
                    }
                }
            }

}


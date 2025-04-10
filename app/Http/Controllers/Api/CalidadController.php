<?php

namespace App\Http\Controllers\Api;

use App\Models\Calidad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CalidadController extends Controller
{

    /**
     * @api {get} /api/select_calidades Obtener todas las calidades
     * @apiName GetCalidades
     * @apiGroup Calidades
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje de éxito.
     * @apiSuccess {Object[]} calidades Lista de calidades.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Calidades encontradas",
     *       "calidades": [
     *         {            
     *          "id": 1,
     *          "nombre": "Toma válida para examen",
     *          "codigo": "C1",
     *          "idTipoEstudio": 1
     *         ...
     *         },
     *         ...
     *       ]
     *     }
     *
     * @apiError {Boolean} status Estado de la operación.
     * @apiError {String} message Mensaje de error.
     *
     * @apiErrorExample {json} Respuesta de Error:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": false,
     *       "message": "No se recuperaron calidades de la base de datos"
     *     }
     */
    public function select_calidades()
    {
        $calidades = Calidad::all();

        if ($calidades->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No se recuperaron calidades de la base de datos'
            ], 200);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Calidades encontradas',
                'calidades' => $calidades
            ], 200);
        }
    }
}

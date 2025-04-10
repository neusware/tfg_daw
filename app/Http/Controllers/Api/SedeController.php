<?php

namespace App\Http\Controllers\Api;

use App\Models\Sede;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SedeController extends Controller
{

    /**
     * @api {get} /api/select_sedes Obtener todas las sedes
     * @apiName GetSedes
     * @apiGroup Sedes
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje de éxito.
     * @apiSuccess {Object[]} sedes Lista de sedes.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Sedes encontradas",
     *       "sedes": [
     *         {
     *           "id": 1,
     *           "nombre": "Sede Central",
     *           ...
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
     *       "message": "No se recuperaron sedes de la base de datos"
     *     }
     */
    public function select_sedes()
    {
        $sedes = Sede::all();

        if ($sedes->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No se recuperaron sedes de la base de datos'
            ], 200);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Sedes encontradas',
                'sedes' => $sedes
            ], 200);
        }
    }
}

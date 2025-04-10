<?php

namespace App\Http\Controllers\Api;

use App\Models\Naturaleza;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NaturalezaController extends Controller
{

    /**
     * @api {get} /api/select_naturalezas Seleccionar todas las naturalezas
     * @apiName GetNaturalezas
     * @apiGroup Naturalezas
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje de éxito.
     * @apiSuccess {Object[]} naturalezas Lista de naturalezas.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Naturalezas encontradas",
     *       "naturalezas": [
     *         {
     *           "id": 1,
     *           "nombre": "Biopsia",
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
     *       "message": "No se recuperaron naturalezas de la base de datos"
     *     }
     */
    public function select_naturalezas()
    {
        $naturalezas = Naturaleza::all();

        if ($naturalezas->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No se recuperaron naturalezas de la base de datos'
            ], 200);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Naturalezas encontradas',
                'naturalezas' => $naturalezas
            ], 200);
        }
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Models\Formato;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FormatoController extends Controller
{
    /**
     * @api {get} /api/select_formatos Obtener todos los formatos
     * @apiName GetFormatos
     * @apiGroup Formatos
     *
     * @apiSuccess {Boolean} status Estado de la operación.
     * @apiSuccess {String} message Mensaje de éxito.
     * @apiSuccess {Object[]} formatos Lista de formatos.
     *
     * @apiSuccessExample {json} Respuesta de Éxito:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": true,
     *       "message": "Formatos encontrados",
     *       "formatos": [
     *         {
     *           "id": 1,
     *           "nombre": "Fresco",
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
     *       "message": "No se recuperaron formatos de la base de datos"
     *     }
     */
    public function select_formatos()
    {
        $formatos = Formato::all();

        if ($formatos->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No se recuperaron formatos de la base de datos'
            ], 200);
        } else {
            return response()->json([
                'status' => true,
                'message' => 'Formatos encontrados',
                'formatos' => $formatos
            ], 200);
        }
    }
}

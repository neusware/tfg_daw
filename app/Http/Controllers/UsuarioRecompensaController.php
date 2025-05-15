<?php

namespace App\Http\Controllers;

use App\Models\UsuarioRecompensa;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class UsuarioRecompensaController extends Controller
{
    /**
     * Listar todas las relaciones usuario-recompensa.
     */
    public function index()
    {
        $relaciones = UsuarioRecompensa::all();
        return response()->json($relaciones, Response::HTTP_OK);
    }

    /**
     * Asignar una recompensa a un usuario.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_usuario' => 'required|exists:usuario,id',
            'id_recompensa' => 'required|exists:recompensas,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        // Verificar si la relación ya existe para evitar duplicados
        $existente = UsuarioRecompensa::where('id_usuario', $request->id_usuario)
                                      ->where('id_recompensa', $request->id_recompensa)
                                      ->first();

        if ($existente) {
            return response()->json(['message' => 'El usuario ya tiene asignada esta recompensa.'], Response::HTTP_CONFLICT);
        }

        $relacion = UsuarioRecompensa::create($request->all());
        return response()->json($relacion, Response::HTTP_CREATED);
    }

    /**
     * Mostrar una relación específica usuario-recompensa por su ID.
     * Nota: Generalmente se buscará por id_usuario e id_recompensa, no por el ID de la tabla pivote.
     */
    public function show($id)
    {
        $relacion = UsuarioRecompensa::find($id);
        if (!$relacion) {
            return response()->json(['message' => 'Relación no encontrada.'], Response::HTTP_NOT_FOUND);
        }
        return response()->json($relacion, Response::HTTP_OK);
    }

    /**
     * Eliminar la asignación de una recompensa a un usuario.
     * Se espera recibir id_usuario e id_recompensa como parámetros en la URL o en el cuerpo de la solicitud.
     */
    public function destroy(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_usuario' => 'required|exists:usuario,id',
            'id_recompensa' => 'required|exists:recompensas,id',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), Response::HTTP_BAD_REQUEST);
        }

        $relacion = UsuarioRecompensa::where('id_usuario', $request->id_usuario)
                                     ->where('id_recompensa', $request->id_recompensa)
                                     ->first();

        if (!$relacion) {
            return response()->json(['message' => 'La relación especificada no existe.'], Response::HTTP_NOT_FOUND);
        }

        $relacion->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Obtener todas las recompensas de un usuario específico.
     */
    public function recompensasPorUsuario($id_usuario)
    {
        $recompensas = UsuarioRecompensa::where('id_usuario', $id_usuario)->with('recompensa')->get();
        return response()->json($recompensas, Response::HTTP_OK);
    }

    /**
     * Obtener todos los usuarios que tienen una recompensa específica.
     */
    public function usuariosPorRecompensa($id_recompensa)
    {
        $usuarios = UsuarioRecompensa::where('id_recompensa', $id_recompensa)->with('usuario')->get();
        return response()->json($usuarios, Response::HTTP_OK);
    }
}

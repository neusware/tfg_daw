<?php

namespace App\Http\Controllers;

use App\Models\Recompensas;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RecompensaController extends Controller
{
    /**
     * Mostrar todas las recompensas.
     */
    public function index()
    {
        $recompensas = Recompensas::all();
        return response()->json($recompensas, Response::HTTP_OK);
    }

    /**
     * Crear una nueva recompensa.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'foto' => 'nullable|string',
            'cantidad' => 'required|integer|min:0',
            'precio_pts' => 'required|integer|min:0',
        ]);

        $recompensa = Recompensas::create($validated);
        return response()->json($recompensa, Response::HTTP_CREATED);
    }

    /**
     * Mostrar una recompensa específica.
     */
    public function show($id)
    {
        $recompensa = Recompensas::findOrFail($id);
        return response()->json($recompensa, Response::HTTP_OK);
    }

    /**
     * Actualizar una recompensa existente.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'descripcion' => 'nullable|string',
            'foto' => 'nullable|string',
            'cantidad' => 'sometimes|integer|min:0',
            'precio_pts' => 'sometimes|integer|min:0',
        ]);

        $recompensa = Recompensas::findOrFail($id);
        $recompensa->update($validated);
        return response()->json($recompensa, Response::HTTP_OK);
    }

    /**
     * Eliminar una recompensa.
     */
    public function destroy($id)
    {
        $recompensa = Recompensas::findOrFail($id);
        $recompensa->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Obtener los usuarios asociados a una recompensa específica.
     */
    public function usuariosPorRecompensa($id)
    {
        $recompensa = Recompensas::with('usuarios')->findOrFail($id);
        return response()->json($recompensa->usuarios, Response::HTTP_OK);
    }
}

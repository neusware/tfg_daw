<?php

namespace App\Http\Controllers;

use App\Models\Suscripcion;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuscripcionController extends Controller
{
    /**
     * Mostrar todas las suscripciones.
     */
    public function index()
    {
        $suscripciones = Suscripcion::with(['usuarios', 'empresas'])->get();
        return response()->json($suscripciones, Response::HTTP_OK);
    }

    /**
     * Crear una nueva suscripción.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tipo' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'precio' => 'required|numeric|min:0',
        ]);

        $suscripcion = Suscripcion::create($validated);
        return response()->json($suscripcion, Response::HTTP_CREATED);
    }

    /**
     * Mostrar una suscripción específica.
     */
    public function show($id)
    {
        $suscripcion = Suscripcion::with(['usuarios', 'empresas'])->findOrFail($id);
        return response()->json($suscripcion, Response::HTTP_OK);
    }

    /**
     * Actualizar una suscripción existente.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'tipo' => 'sometimes|string|max:255',
            'descripcion' => 'nullable|string',
            'precio' => 'sometimes|numeric|min:0',
        ]);

        $suscripcion = Suscripcion::findOrFail($id);
        $suscripcion->update($validated);
        return response()->json($suscripcion, Response::HTTP_OK);
    }

    /**
     * Eliminar una suscripción.
     */
    public function destroy($id)
    {
        $suscripcion = Suscripcion::findOrFail($id);
        $suscripcion->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
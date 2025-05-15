<?php

namespace App\Http\Controllers;

use App\Models\Contenedor;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ContenedorController extends Controller
{
    /**
     * Mostrar todos los contenedores.
     */
    public function index()
    {
        $contenedores = Contenedor::with('categorias')->get();
        return response()->json($contenedores, Response::HTTP_OK);
    }

    /**
     * Crear un nuevo contenedor.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tipo' => 'required|string|max:255',
            'color' => 'required|string|max:255',
        ]);

        $contenedor = Contenedor::create($validated);
        return response()->json($contenedor, Response::HTTP_CREATED);
    }

    /**
     * Mostrar un contenedor específico.
     */
    public function show($id)
    {
        $contenedor = Contenedor::with('categorias')->findOrFail($id);
        return response()->json($contenedor, Response::HTTP_OK);
    }

    /**
     * Actualizar un contenedor existente.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'tipo' => 'sometimes|string|max:255',
            'color' => 'sometimes|string|max:255',
        ]);

        $contenedor = Contenedor::findOrFail($id);
        $contenedor->update($validated);
        return response()->json($contenedor, Response::HTTP_OK);
    }

    /**
     * Eliminar un contenedor.
     */
    public function destroy($id)
    {
        $contenedor = Contenedor::findOrFail($id);
        $contenedor->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
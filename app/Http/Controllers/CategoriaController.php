<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CategoriaController extends Controller
{
    /**
     * Mostrar todas las categorías.
     */
    public function index()
    {
        $categorias = Categoria::with('contenedor', 'productos')->get();
        return response()->json($categorias, Response::HTTP_OK);
    }

    /**
     * Crear una nueva categoría.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'id_contenedor' => 'required|exists:contenedor,id',
        ]);

        $categoria = Categoria::create($validated);
        return response()->json($categoria, Response::HTTP_CREATED);
    }

    /**
     * Mostrar una categoría específica.
     */
    public function show($id)
    {
        $categoria = Categoria::with('contenedor', 'productos')->findOrFail($id);
        return response()->json($categoria, Response::HTTP_OK);
    }

    /**
     * Actualizar una categoría existente.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'descripcion' => 'nullable|string',
            'id_contenedor' => 'sometimes|exists:contenedor,id',
        ]);

        $categoria = Categoria::findOrFail($id);
        $categoria->update($validated);
        return response()->json($categoria, Response::HTTP_OK);
    }

    /**
     * Eliminar una categoría.
     */
    public function destroy($id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
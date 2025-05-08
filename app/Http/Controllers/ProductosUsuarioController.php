<?php

namespace App\Http\Controllers;

use App\Models\ProductosUsuario;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductosUsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productosUsuarios = ProductosUsuario::with(['usuario', 'producto'])->get();
        return response()->json($productosUsuarios, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_usuario' => 'required|exists:usuario,id',
            'id_producto' => 'required|exists:producto,id',
        ]);

        $productosUsuario = ProductosUsuario::create($validated);
        return response()->json($productosUsuario, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $productosUsuario = ProductosUsuario::with(['usuario', 'producto'])->findOrFail($id);
        return response()->json($productosUsuario, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_usuario' => 'sometimes|exists:usuario,id',
            'id_producto' => 'sometimes|exists:producto,id',
        ]);

        $productosUsuario = ProductosUsuario::findOrFail($id);
        $productosUsuario->update($validated);
        return response()->json($productosUsuario, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $productosUsuario = ProductosUsuario::findOrFail($id);
        $productosUsuario->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
<?php

namespace App\Http\Controllers\Api;

use App\Models\Producto;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::all();

        if ($productos->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No se encontraron productos.'
            ], 200);
        }

        return response()->json([
            'status' => true,
            'message' => 'Productos encontrados.',
            'productos' => $productos
        ], 200);
    }


    /* Request tipo
    {
        "nombre": "Producto de ejemplo",
        "descripcion": "Descripción del producto de ejemplo",
        "ingredientes": "Ingrediente1, Ingrediente2",
        "fabricante": "Fabricante de ejemplo",
        "composicion": "Composición de ejemplo",
        "puntos": 100,
        "imagen": "https://example.com/imagen.jpg",
        "enlace_qr": "https://example.com/qr",
        "id_categoria": 1,
        "id_empresa": 1
    }
    */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'descripcion' => 'nullable|string',
            'ingredientes' => 'nullable|string',
            'fabricante' => 'nullable|string',
            'composicion' => 'nullable|string',
            'puntos' => 'required|integer',
            'imagen' => 'nullable|string',
            'enlace_qr' => 'nullable|string',
            'id_categoria' => 'required|exists:categoria,id',
            'id_empresa' => 'required|exists:empresa,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Error en la validación.',
                'errors' => $validator->errors()
            ], 400);
        }

        $producto = Producto::create($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Producto creado exitosamente.',
            'producto' => $producto
        ], 201);
    }

    public function show($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json([
                'status' => false,
                'message' => 'Producto no encontrado.'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Producto encontrado.',
            'producto' => $producto
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'nullable|string|max:255',
            'descripcion' => 'nullable|string',
            'ingredientes' => 'nullable|string',
            'fabricante' => 'nullable|string',
            'composicion' => 'nullable|string',
            'puntos' => 'nullable|integer',
            'imagen' => 'nullable|string',
            'enlace_qr' => 'nullable|string',
            'id_categoria' => 'nullable|exists:categoria,id',
            'id_empresa' => 'nullable|exists:empresa,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Error en la validación.',
                'errors' => $validator->errors()
            ], 400);
        }

        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json([
                'status' => false,
                'message' => 'Producto no encontrado.'
            ], 404);
        }

        $producto->update($request->all());

        return response()->json([
            'status' => true,
            'message' => 'Producto actualizado exitosamente.',
            'producto' => $producto
        ], 200);
    }

    public function destroy($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json([
                'status' => false,
                'message' => 'Producto no encontrado.'
            ], 404);
        }

        $producto->delete();

        return response()->json([
            'status' => true,
            'message' => 'Producto eliminado exitosamente.'
        ], 200);
    }
}
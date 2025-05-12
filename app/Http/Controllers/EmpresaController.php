<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmpresaController extends Controller
{
    /**
     * Mostrar todas las empresas.
     */
    public function index()
    {
        $empresas = Empresa::with('suscripcion', 'productos')->get();
        return response()->json($empresas, Response::HTTP_OK);
    }

    /**
     * Crear una nueva empresa.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'CIF' => 'required|string|max:20|unique:empresa,CIF',
            'direccion' => 'nullable|string',
            'id_suscripcion' => 'required|exists:suscripcion,id',
        ]);

        $empresa = Empresa::create($validated);
        return response()->json($empresa, Response::HTTP_CREATED);
    }

    /**
     * Mostrar una empresa específica.
     */
    public function show($id)
    {
        $empresa = Empresa::with('suscripcion', 'productos')->findOrFail($id);
        return response()->json($empresa, Response::HTTP_OK);
    }

    /**
     * Actualizar una empresa existente.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => 'sometimes|string|max:255',
            'CIF' => 'sometimes|string|max:20|unique:empresa,CIF,' . $id,
            'direccion' => 'nullable|string',
            'id_suscripcion' => 'sometimes|exists:suscripcion,id',
        ]);

        $empresa = Empresa::findOrFail($id);
        $empresa->update($validated);
        return response()->json($empresa, Response::HTTP_OK);
    }

    /**
     * Eliminar una empresa.
     */
    public function destroy($id)
    {
        $empresa = Empresa::findOrFail($id);
        $empresa->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
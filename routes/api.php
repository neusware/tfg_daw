<?php

use Illuminate\Http\Request;
use App\Models\Tipo_de_estudio;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatosController;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SedeController;
use App\Http\Controllers\Api\CalidadController;
use App\Http\Controllers\Api\FormatoController;
use App\Http\Controllers\Api\MuestraController;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\ImagenController;
use App\Http\Controllers\TipodeEstudioController;
use App\Http\Controllers\Api\NaturalezaController;
use App\Http\Controllers\Api\InterpretacionController;
use App\Http\Controllers\Api\InterpretacionMuestraController;
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\ProductosUsuarioController;

//ruta tipo sanctum
Route::get('/usuario-sanctum', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::get('/datos', [DatosController::class, 'index']);

// Route::post('/login', [AuthController::class, 'loginUser'])->name('api-login');

//API endpoints v1.2

//----------------Desprotegidas

//!login
Route::post('usuario-login',  [UsuarioController::class,'login']);

//!sign up
//insert
Route::post('/usuario', [UsuarioController::class, 'insert_usuario']);

// ------------ Protegidas : agrupadas por controlador y middleware de autenticación

// -- Usuarios
Route::controller(UsuarioController::class)->middleware('auth:sanctum')->group(function(){

    Route::get('usuario', [UsuarioController::class, 'select_usuarios']); //select
    Route::put('/usuario_email',  'update_email');    //update email por id
    Route::put('/usuario_password', 'update_password'); //update password por id
    Route::delete('/usuario', 'delete_usuario');    //delete por id
});

// -- Productos
Route::controller(ProductoController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/productos', 'index'); // Obtener todos los productos
    Route::post('/productos', 'store'); // Crear un nuevo producto
    Route::get('/productos/{id}', 'show'); // Obtener un producto por ID
    Route::put('/productos/{id}', 'update'); // Actualizar un producto por ID
    Route::delete('/productos/{id}', 'destroy'); // Eliminar un producto por ID
});

// -- Productos-Usuario
Route::controller(ProductosUsuarioController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/productos-usuario', 'index');
    Route::post('/productos-usuario', 'store');
    Route::get('/productos-usuario/{id}', 'show');
    Route::put('/productos-usuario/{id}', 'update');
    Route::delete('/productos-usuario/{id}', 'destroy');
});

//! estalínea
require __DIR__.'/auth.php';
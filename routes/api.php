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
use App\Http\Controllers\ContenedorController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\SuscripcionController;
use App\Http\Controllers\EmpresaController;

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

// -- Contenedores
Route::controller(ContenedorController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/contenedores', 'index'); // Obtener todos los contenedores
    Route::post('/contenedores', 'store'); // Crear un nuevo contenedor
    Route::get('/contenedores/{id}', 'show'); // Obtener un contenedor por ID
    Route::put('/contenedores/{id}', 'update'); // Actualizar un contenedor por ID
    Route::delete('/contenedores/{id}', 'destroy'); // Eliminar un contenedor por ID
});

// -- Categorías
Route::controller(CategoriaController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/categorias', 'index'); // Obtener todas las categorías
    Route::post('/categorias', 'store'); // Crear una nueva categoría
    Route::get('/categorias/{id}', 'show'); // Obtener una categoría por ID
    Route::put('/categorias/{id}', 'update'); // Actualizar una categoría por ID
    Route::delete('/categorias/{id}', 'destroy'); // Eliminar una categoría por ID
});

// -- Suscripciones
Route::controller(SuscripcionController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/suscripciones', 'index'); // Obtener todas las suscripciones
    Route::post('/suscripciones', 'store'); // Crear una nueva suscripción
    Route::get('/suscripciones/{id}', 'show'); // Obtener una suscripción por ID
    Route::put('/suscripciones/{id}', 'update'); // Actualizar una suscripción por ID
    Route::delete('/suscripciones/{id}', 'destroy'); // Eliminar una suscripción por ID
});

// -- Empresas
Route::controller(EmpresaController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/empresas', 'index'); // Obtener todas las empresas
    Route::post('/empresas', 'store'); // Crear una nueva empresa
    Route::get('/empresas/{id}', 'show'); // Obtener una empresa por ID
    Route::put('/empresas/{id}', 'update'); // Actualizar una empresa por ID
    Route::delete('/empresas/{id}', 'destroy'); // Eliminar una empresa por ID
});

//! estalínea
require __DIR__.'/auth.php';
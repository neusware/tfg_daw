<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

use App\Http\Controllers\Api\UsuarioController;

use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\ProductosUsuarioController;
use App\Http\Controllers\ContenedorController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\SuscripcionController;
use App\Http\Controllers\EmpresaController;
use App\Http\Controllers\RecompensaController; // Añadir esta línea
use App\Http\Controllers\UsuarioRecompensaController; // Añadir esta línea

//ruta tipo sanctum
// Route::get('/usuario-sanctum', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

//API endpoints

//----------------Desprotegidas

//!login
Route::post('usuario-login',  [UsuarioController::class,'login']);

    /*
        {
        "status": true,
        "message": "Has iniciado sesión en la API",
        "token": "5|MBQob35B80GYedLCoZAWFVBzi22dVmID4b4RBIks47f88e6e",  *******************
            "usuario": {
                "id": 1,
                "nombre": "Nombre del usuario",
                "apellidos": "Apellidos del usuario",
                "email": "email@example.com",
                "password": "$2y$12$eb5/4odtlQDdVfYEw7gD3uA./O1GlEUYap6UwP.6LWoWP5kCVFa4K",
                "saldo": "100.50",
                "id_suscripcion": 1,
                "created_at": "2025-05-08T10:37:53.000000Z",
                "updated_at": "2025-05-08T10:37:53.000000Z"
            }
        }
    } */

//!sign up
//insert
Route::post('/usuario', [UsuarioController::class, 'insert_usuario']);

// !selects
Route::get('/categorias', [CategoriaController::class, 'index']); // Obtener todas las categorías
Route::get('/contenedores', [ContenedorController::class, 'index']); // Obtener todos los contenedores
Route::get('/productos', [ProductoController::class, 'index']); // Obtener todos los productos
Route::get('/recompensas', [RecompensaController::class, 'index']); // Obtener todas las recompensas
Route::get('/suscripciones', [SuscripcionController::class, 'index']); // Obtener todas las suscripciones

// ------------ Protegidas : agrupadas por controlador y middleware de autenticación

// -- Usuarios
Route::controller(UsuarioController::class)->middleware('auth:sanctum')->group(function(){
    Route::get('usuario', [UsuarioController::class, 'select_usuarios']); //select
    Route::put('/usuario_email',  'update_email');    //update email por id
    Route::put('/usuario_password', 'update_password'); //update password por id
    Route::delete('/usuario', 'delete_usuario');    //delete por id
});

// -- Productos sin autenticacion
Route::get('/productos', [ProductoController::class, 'index']);
Route::get('/productos/{id}', [ProductoController::class, 'show']);


// -- Productos con autenticacion
Route::controller(ProductoController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/productos', 'store'); // Crear un nuevo producto
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

// -- Contedores sin autenticación
Route::get('/contenedores', [ContenedorController::class, 'index']); // Obtener todos los contenedores
Route::get('/contenedores/{id}', [ContenedorController::class, 'show']); // Obtener un contenedor por ID

// -- Contenedores con autenticacion
Route::controller(ContenedorController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/contenedores', 'store'); // Crear un nuevo contenedor
    Route::put('/contenedores/{id}', 'update'); // Actualizar un contenedor por ID
    Route::delete('/contenedores/{id}', 'destroy'); // Eliminar un contenedor por ID
});

// -- Categorías sin autenticación
Route::get('/categorias',[CategoriaController::class,'index']); // Obtener todas las categorías
Route::get('/categorias/{id}',[CategoriaController::class, 'show']); // Obtener una categoría por ID


// -- Categorías con autenticación
Route::controller(CategoriaController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/categorias', 'store'); // Crear una nueva categoría
    Route::put('/categorias/{id}', 'update'); // Actualizar una categoría por ID
    Route::delete('/categorias/{id}', 'destroy'); // Eliminar una categoría por ID
});

// -- Suscripciones sin autenticación
Route::get('/suscripciones',[SuscripcionController::class, 'index']); // Obtener todas las suscripciones
Route::get('/suscripciones/{id}', [SuscripcionController::class, 'show']); // Obtener una suscripción por ID

// -- Suscripciones con autenticación
Route::controller(SuscripcionController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/suscripciones', 'store'); // Crear una nueva suscripción
    Route::put('/suscripciones/{id}', 'update'); // Actualizar una suscripción por ID
    Route::delete('/suscripciones/{id}', 'destroy'); // Eliminar una suscripción por ID
});

// -- Empresas sin autenticación
Route::get('/empresas', [EmpresaController::class, 'index']); // Obtener todas las empresas
Route::get('/empresas/{id}',[EmpresaController::class, 'show']); // Obtener una empresa por ID

// -- Empresas con autenticación
Route::controller(EmpresaController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/empresas',  'store'); // Crear una nueva empresa
    Route::put('/empresas/{id}', 'update'); // Actualizar una empresa por ID
    Route::delete('/empresas/{id}', 'destroy'); // Eliminar una empresa por ID
});

// -- Recompensas sin autenticacion
// -- Recompensas con autenticacion
Route::controller(RecompensaController::class)->middleware('auth:sanctum')->group(function () {
    Route::post('/recompensas', 'store'); // Crear una nueva recompensa
    Route::get('/recompensas/{id}', 'show'); // Obtener una recompensa por ID
    Route::put('/recompensas/{id}', 'update'); // Actualizar una recompensa por ID
    Route::delete('/recompensas/{id}', 'destroy'); // Eliminar una recompensa por ID
    Route::get('/recompensas/{id}/usuarios', 'usuariosPorRecompensa'); // Obtener usuarios por recompensa
});

// -- UsuarioRecompensas (Tabla Pivote)
Route::controller(UsuarioRecompensaController::class)->middleware('auth:sanctum')->group(function () {
    Route::get('/usuario-recompensas', 'index'); // Listar todas las relaciones
    Route::post('/usuario-recompensas', 'store'); // Asignar recompensa a usuario
    Route::get('/usuario-recompensas/{id}', 'show'); // Mostrar una relación específica (por ID)
    Route::delete('/usuario-recompensas', 'destroy'); // Eliminar asignación (espera id_usuario e id_recompensa)
    Route::get('/usuarios/{id_usuario}/recompensas', 'recompensasPorUsuario'); // Recompensas de un usuario
    Route::get('/recompensas/{id_recompensa}/usuarios_asignados', 'usuariosPorRecompensa'); // Usuarios con una recompensa específica (espera id_recompensa)
});

//! estalínea
require __DIR__.'/auth.php';
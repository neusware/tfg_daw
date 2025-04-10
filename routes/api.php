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

// ------------ Agrupadas por controlador y middleware de autenticación

Route::controller(MuestraController::class)->middleware('auth:sanctum')->group(function(){

    Route::get('usuario', [UsuarioController::class, 'select_usuarios']);

    //update email por id
    Route::put('/usuario_email',  'update_email');

    //update password por id
    Route::put('/usuario_password', 'update_password');

    //delete por id
    Route::delete('/usuario', 'delete_usuario');

});

//! estalínea
require __DIR__.'/auth.php';
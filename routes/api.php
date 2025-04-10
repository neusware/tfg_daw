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

//----------------Muestras

Route::controller(MuestraController::class)->middleware('auth:sanctum')->group(function(){

    //select
    Route::get('/muestra', 'select_muestras');

    //insert
    Route::post('/muestra',  'insert_muestra');

    //update
    Route::put('/muestra',  'update_muestra');

    //delete
    Route::delete('/muestra', 'delete_muestra');

});

//----------------Naturalezas

    //select
    Route::get('/select_naturalezas', [NaturalezaController::class, 'select_naturalezas'])->middleware('auth:sanctum');

//---------------Formatos

    //select
    Route::get('/select_formatos', [FormatoController::class, 'select_formatos'])->middleware('auth:sanctum');

//----------------Sedes

    //select
    Route::get('/select_sedes', [SedeController::class, 'select_sedes'])->middleware('auth:sanctum');

//----------------Calidades

    //select
    Route::get('/select_calidades', [CalidadController::class, 'select_calidades'])->middleware('auth:sanctum');

    //Route::post('/insert_calidad',[CalidadController::class, 'insert_calidad']);

    //Route::put('/update_calidad',[CalidadController::class, 'update_calidad']);

    //Route::delete('/delete_calidad',[CalidadController::class, 'delete_calidad']);


//----------------Interpretaciones

Route::controller(InterpretacionController::class)->middleware('auth:sanctum')->group(function(){

    //select
    Route::get('/interpretacion', 'select');

    //insert
    Route::post('/interpretacion', 'insert');

     //update
    Route::put('/interpretacion',  'update');

    //delete
    Route::delete('/interpretacion',  'delete');

});

//---------------------------------Interpretaciones  - Muestra

Route::controller(InterpretacionMuestraController::class)->middleware('auth:sanctum')->group(function(){

    //select
    Route::get('/interpretacion_muestra', [InterpretacionMuestraController::class, 'select']);

    //insert
    Route::post('/interpretacion_muestra', [InterpretacionMuestraController::class, 'insert']);

    //update
    Route::put('/interpretacion_muestra', [InterpretacionMuestraController::class, 'update']);

    //delete
    Route::delete('/interpretacion_muestra', [InterpretacionMuestraController::class, 'delete']);

});

//-------------------------------Tipos de estudio

Route::controller(TipodeEstudioController::class)->middleware('auth:sanctum')->group(function(){

    //select
    Route::get('tipo_de_estudio',  'select');

    //insert
    Route::post('tipo_de_estudio',  'insert');

    // update
    Route::put('tipo_de_estudio', 'update');

    //delete
    Route::delete('tipo_de_estudio',  'delete');

});


//--------------------------------- Imagenes

Route::controller(ImagenController::class)->middleware('auth:sanctum')->group(function(){

    //select
    Route::get('imagen', 'select');

    //insert
    Route::post('imagen','insert');

    //update
    Route::put('imagen', 'update');

    //delete
    Route::delete('imagen','delete');

});

//! estalínea
require __DIR__.'/auth.php';
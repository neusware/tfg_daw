<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\MuestraController;




//ruta basica para probar react
Route::get('/', function () {
    return view('welcome');
})->name('welcome');

// permite que al escribir un enlace en la barra de navegacion aun siendo SPA se pueda redirigir
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');


Route::get('/api-login', function () {
    return view('login');
});



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/datos', [DatosController::class, 'index']);

Route::get('/datos2', [DatosController::class, 'index'])
->middleware('auth');

require __DIR__.'/auth.php';




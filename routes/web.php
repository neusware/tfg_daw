<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\MuestraController;


// Ruta domPdf
Route::get('/descargar/{id}', [MuestraController::class, 'download']);



//ruta basica para probar react
Route::get('/', function () {
    return view('welcome');
})->name('welcome');


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




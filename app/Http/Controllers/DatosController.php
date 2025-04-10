<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DatosController extends Controller
{
    public function index(){

        return response()->json(User::all());
    }
}

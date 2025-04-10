<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class Authenticate
{
    public function handle(Request $request, Closure $next, ...$guards)
    {
        Log::info('Middleware Authenticate ejecutado');
        Log::info('Token recibido: ' . $request->header('Authorization'));

        if (Auth::guard($guards)->guest()) {
            return response()->json([
                'message' => 'No estás autenticado'
            ], 401);
        }

        return $next($request);
    }
}
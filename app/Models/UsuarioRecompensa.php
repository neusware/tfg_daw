<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioRecompensa extends Model
{
    use HasFactory;

    protected $table = 'usuario_recompensa';

    protected $fillable = ['id_usuario', 'id_recompensa'];
}

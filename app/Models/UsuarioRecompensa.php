<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioRecompensa extends Model
{
    use HasFactory;

    protected $table = 'usuario_recompensa';

    protected $fillable = ['id_usuario', 'id_recompensa'];

    /**
     * Obtener el usuario asociado a esta entrada de la tabla pivote.
     */
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario');
    }

    /**
     * Obtener la recompensa asociada a esta entrada de la tabla pivote.
     */
    public function recompensa()
    {
        return $this->belongsTo(Recompensas::class, 'id_recompensa');
    }
}

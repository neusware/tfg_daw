<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recompensas extends Model
{
    use HasFactory;

    protected $table = 'recompensas';

    protected $fillable = ['nombre', 'descripcion', 'foto', 'cantidad', 'precio_pts'];

    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'usuario_recompensa', 'id_recompensa', 'id_usuario');
    }
}

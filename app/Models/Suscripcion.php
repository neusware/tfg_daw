<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suscripcion extends Model
{
    use HasFactory;

    protected $table = 'suscripcion';

    protected $fillable = ['tipo', 'descripcion', 'precio'];

    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'id_suscripcion');
    }

    public function empresas()
    {
        return $this->hasMany(Empresa::class, 'id_suscripcion');
    }
}

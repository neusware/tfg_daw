<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contenedor extends Model
{
    use HasFactory;

    protected $table = 'contenedor';

    protected $fillable = ['tipo', 'color'];

    public function categorias()
    {
        return $this->hasMany(Categoria::class, 'id_contenedor');
    }
}

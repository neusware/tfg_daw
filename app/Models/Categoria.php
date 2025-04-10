<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categoria';

    protected $fillable = ['nombre', 'descripcion', 'id_contenedor'];

    public function contenedor()
    {
        return $this->belongsTo(Contenedor::class, 'id_contenedor');
    }

    public function productos()
    {
        return $this->hasMany(Producto::class, 'id_categoria');
    }
}

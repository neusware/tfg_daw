<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $table = 'producto';

    protected $fillable = [
        'nombre', 'descripcion', 'ingredientes', 'fabricante', 
        'tipo_de_composicion', 'puntos', 'imagen', 'enlace_qr', 
        'id_categoria', 'id_empresa'
    ];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'id_categoria');
    }

    public function empresa()
    {
        return $this->belongsTo(Empresa::class, 'id_empresa');
    }

    public function usuarios()
    {
        return $this->belongsToMany(Usuario::class, 'productos_usuario', 'id_producto', 'id_usuario');
    }
}

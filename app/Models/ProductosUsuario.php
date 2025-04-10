<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductosUsuario extends Model
{
    use HasFactory;

    protected $table = 'productos_usuario';

    protected $fillable = ['id_usuario', 'id_producto'];

}

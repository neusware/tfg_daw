<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{   
    //uso de trait para factoria y token
    use HasFactory, HasApiTokens;
    use HasFactory;

    protected $table = 'usuario';

    protected $fillable = ['nombre', 'apellidos', 'email', 'contraseña', 'saldo', 'id_suscripcion'];

    public function suscripcion()
    {
        return $this->belongsTo(Suscripcion::class, 'id_suscripcion');
    }

    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'productos_usuario', 'id_usuario', 'id_producto');
    }

    public function recompensas()
    {
        return $this->belongsToMany(Recompensas::class, 'usuario_recompensa', 'id_usuario', 'id_recompensa');
    }
}

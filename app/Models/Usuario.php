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

    protected $table = 'usuario';
    protected $primaryKey = 'id';

    protected $fillable = ['email', 'password'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->hasMany(Muestra::class,'idUsuario');
    }
}

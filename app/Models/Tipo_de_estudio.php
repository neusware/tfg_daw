<?php
// filepath: /C:/xampp/htdocs/app/Models/Tipo_de_estudio.php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo_de_Estudio extends Model
{
    use HasFactory;

    protected $table = 'tipo_de_estudio';
    protected $primaryKey = 'id';

    protected $fillable = ['nombre'];

    protected $hidden = ['created_at', 'updated_at'];

    public function calidad(){
        return $this->hasMany(Calidad::class,'idTipoEstudio');
    }

    public function interpretacion(){
        return $this->hasMany(Interpretacion::class,'idTipoEstudio');
    }
}
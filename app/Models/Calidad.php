<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calidad extends Model
{
    use HasFactory;

    protected $table = 'calidad';

    protected $primaryKey = 'id';

    protected $fillable = ['nombre', 'codigo','idTipoEstudio'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->hasMany(Muestra::class,'idCalidad');
    }

    public function tipoEstudio(){
        return $this->belongsTo(TipoEstudio::class,'idTipoEstudio');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Muestra extends Model
{
    use HasFactory;

    protected $table = 'muestra'; //! Especifica el nombre de la tabla

    protected $primaryKey = 'id';

    protected $fillable = ['fecha', 'organo','codigo','idUsuario','idNaturaleza','idFormato','idSede','idCalidad'];

    protected $hidden = ['created_at', 'updated_at'];

    public function usuario(){
        return $this->belongsTo(Usuario::class,'idUsuario');
    }
    
    public function naturaleza(){
        return $this->belongsTo(Naturaleza::class,'idNaturaleza');
    }

    public function imagen(){
        return $this->hasMany(Imagen::class,'idMuestra');
    }

    public function formato(){
        return $this->belongsTo(Formato::class,'idFormato');
    }

    public function sede(){
        return $this->belongsTo(Sede::class,'idSede');
    }

    public function calidad(){
        return $this->belongsTo(Calidad::class,'idCalidad');
    }

    public function interpretacion()
    {
        return $this->belongsToMany(Interpretacion::class, 'interpretacion_muestra', 'idMuestra', 'idInterpretacion')
        ->withPivot('descripcion');
    }
}

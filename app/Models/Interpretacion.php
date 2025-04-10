<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interpretacion extends Model
{
    use HasFactory;

    protected $table = 'interpretacion';
    protected $primaryKey = 'id';

    protected $fillable = ['nombre', 'codigo', 'idTipoEstudio'];

    protected $hidden = ['created_at', 'updated_at'];

    public function tipoEstudio(){
        return $this->belongsTo(Tipo_de_Estudio::class,'idTipoEstudio');
    }

    public function muestra()
    {
        return $this->belongsToMany(Muestra::class, 'interpretacion_muestra', 'idInterpretacion', 'idMuestra');
    }


}

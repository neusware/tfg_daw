<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interpretacion_Muestra extends Model
{
    protected $table = 'interpretacion_muestra';

    protected $fillable = [
        'idmuestra',
        'idInterpretacion',
        'descripcion'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    //idmuestra belongs to id in table muestra
    public function muestra(){
        return $this->belongsTo(Muestra::class, 'idMuestra');
    }

    //interpretacion_id belongs to id in table interpretacion
    public function interpretacion(){
        return $this->belongsTo(Interpretacion::class, 'idInterpretacion');
    }

}

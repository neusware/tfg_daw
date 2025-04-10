<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;

    protected $table = 'imagen';

    protected $primaryKey = 'id';

    protected $fillable = ['ruta', 'zoom', 'idMuestra'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->belongsTo(Muestra::class,'idMuestra');
    }
}

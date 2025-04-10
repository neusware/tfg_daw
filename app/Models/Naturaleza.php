<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Naturaleza extends Model
{
    use HasFactory;

    protected $table = 'naturaleza';
    protected $primaryKey = 'id';

    protected $fillable = ['nombre', 'codigo'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->hasMany(Muestra::class,'idNaturaleza');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sede extends Model
{
    use HasFactory;
    protected $table = 'sede';

    protected $primaryKey = 'id';

    protected $fillable = ['nombre', 'codigo'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->hasMany(Muestra::class,'idSede');
    }
}

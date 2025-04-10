<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formato extends Model
{
    use HasFactory;

    protected $table = 'formato';
    protected $primaryKey = 'id';

    protected $fillable = ['nombre'];

    protected $hidden = ['created_at', 'updated_at'];

    public function muestra(){
        return $this->hasMany(Muestra::class,'idFormato');
    }
}

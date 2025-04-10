<?php

namespace Database\Seeders;

use App\Models\Tipo_de_estudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TipoEstudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tipo_de_estudio::insert([
            ['nombre' => 'ESTUDIO CITOLÓGICO CÉRVICO-VAGINAL'], 
            ['nombre' => 'ESTUDIO HEMATOLÓGICO COMPLETO'],
            ['nombre' => 'ESTUDIO MICROSCÓPICO Y QUÍMICO DE ORINA'],
            ['nombre' => 'ESTUDIO CITOLÓGICO DE ESPUTO'],
            ['nombre' => 'ESTUDIO CITOLÓGICO BUCAL']
        ]);
    }
}

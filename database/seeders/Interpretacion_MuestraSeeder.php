<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class Interpretacion_MuestraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('interpretacion_muestra')->insert([
            ['idMuestra' => 1, 'idInterpretacion' => 1, 'descripcion' => 'descripcion 1'], 
            ['idMuestra' => 2, 'idInterpretacion' => 2, 'descripcion' => 'descripcion 2'],
        ]);
    }
}

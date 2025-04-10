<?php

namespace Database\Seeders;

use App\Models\Muestra;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MuestraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Muestra::create([
            'fecha' => '2025-01-01',
            'codigo' => 'EX25001',
            'idUsuario' => 1,
            'idNaturaleza' => 5, //extension sanguinea
            'idFormato' => 1, //fresco
            'idSede' => 1, //albacete
            'idCalidad' => 1, //'codigo' => 'C1', 'nombre' => 'Toma válida para examen', 'idTipoEstudio' => 1
        ]);
        Muestra::create([
            'fecha' => '2025-01-01',
            'organo' => 'Pulmón',
            'codigo' => 'B25001',
            'idUsuario' => 1,
            'idNaturaleza' => 1, //Biopsia
            'idFormato' => 2, //formol
            'idSede' => 2, //alicante
            'idCalidad' => 1, //'codigo' => 'C1', 'nombre' => 'Toma válida para examen', 'idTipoEstudio' => 1
        ]);
        // 20 muestras adicionales aleatorias
        for ($i = 0; $i < 50; $i++) {
            Muestra::create([
                'fecha' => '2025-' . str_pad(rand(1, 12), 2, '0', STR_PAD_LEFT) . '-' . str_pad(rand(1, 28), 2, '0', STR_PAD_LEFT),
                'codigo' => 'EX' . rand(10000, 99999),
                'idUsuario' => rand(1, 2),
                'idNaturaleza' => rand(1, 5), // valores aleatorios entre 1 y 5
                'idFormato' => rand(1, 3), // valores aleatorios entre 1 y 3 (fresco, formol, etanol)
                'idSede' => rand(1, 10), // valores aleatorios entre 1 y 3 (sedes)
                'idCalidad' => rand(1, 4), // valores aleatorios entre 1 y 2
            ]);
        }
    }
}

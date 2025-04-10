<?php

namespace Database\Seeders;

use App\Models\Naturaleza;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NaturalezaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Naturaleza::insert([
            ['nombre' => 'Biopsia', 'codigo' => 'B'],
            ['nombre' => 'Biopsias veterinarias', 'codigo' => 'BV'],
            ['nombre' => 'Cavidad bucal', 'codigo' => 'CB'],
            ['nombre' => 'Citología vaginal', 'codigo' => 'CV'],
            ['nombre' => 'Extensión sanguínea', 'codigo' => 'EX'],
            ['nombre' => 'Orinas', 'codigo' => 'O'],
            ['nombre' => 'Esputos', 'codigo' => 'E'],
            ['nombre' => 'Semen', 'codigo' => 'ES'],
            ['nombre' => 'Improntas', 'codigo' => 'I'],
            ['nombre' => 'Frotis', 'codigo' => 'F'],
        ]);
    }
}

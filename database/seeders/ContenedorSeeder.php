<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContenedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contenedor')->insert([
            [
                'tipo' => 'Plástico',
                'color' => 'Azul',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Metal',
                'color' => 'Gris',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Cartón',
                'color' => 'Marrón',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Vidrio',
                'color' => 'Verde',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

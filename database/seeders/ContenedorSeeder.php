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
                'color' => 'Amarillo',
                'imagen' => 'https://www.solocontenedores.com/wp-content/uploads/04015amarillo.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Organico',
                'color' => 'Marron',
                'imagen' => 'https://www.solocontenedores.com/wp-content/uploads/04015-SOLO-marron.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Cartón y Papel',
                'color' => 'Azul',
                'imagen' => 'https://www.solocontenedores.com/wp-content/uploads/04015azul.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Vidrio',
                'color' => 'Verde',
                'imagen' => 'https://www.todocontenedores.com/imagen1_amplia/152632184973643.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Restos',
                'color' => 'Gris',
                'imagen' => 'https://www.solocontenedores.com/wp-content/uploads/04015-SOLO-gris.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Punto Limpio',
                'color' => 'Null',
                'imagen' => 'https://escudolegal.es/wp-content/uploads/2022/12/punto-limpio-que-es.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

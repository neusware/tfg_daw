<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categoria')->insert([
            [
                'nombre' => 'Envases de Plástico',
                'descripcion' => 'Envases y productos fabricados a partir de plástico reciclable o no reciclable.',
                'id_contenedor' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Desechos Orgánicos',
                'descripcion' => 'Restos de alimentos y otros desechos biodegradables de origen orgánico.',
                'id_contenedor' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Cartón y Papel',
                'descripcion' => 'Materiales reciclables como cartón y papel, usados principalmente en embalajes.',
                'id_contenedor' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Envases de Vidrio',
                'descripcion' => 'Envases hechos de vidrio, como botellas y frascos, que pueden ser reciclados fácilmente.',
                'id_contenedor' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Residuos No Reciclables',
                'descripcion' => 'Materiales que no pueden ser reciclados, como pañuelos de papel, cerámica o textiles.',
                'id_contenedor' => 5,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Residuos Especiales',
                'descripcion' => 'Residuos peligrosos que requieren un tratamiento especial, como baterías y productos químicos.',
                'id_contenedor' => 6,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);        
        
    }
}

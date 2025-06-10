<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmpresaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('empresa')->insert([
            [
                'nombre' => 'Supermercado Día',
                'CIF' => 'A12345678',
                'direccion' => 'Calle Leonardo Da Vinci 12, Madrid, España',
                'id_suscripcion' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Mercadona',
                'CIF' => 'B98765432',
                'direccion' => 'Avenida Juan Ramón Jimenez, 45, Barcelona, España',
                'id_suscripcion' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Deza',
                'CIF' => 'C11223344',
                'direccion' => 'Plaza Central, 789, Valencia, España',
                'id_suscripcion' => 3, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
    }
}

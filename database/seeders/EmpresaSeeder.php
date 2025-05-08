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
                'nombre' => 'Empresa A',
                'CIF' => 'A12345678',
                'direccion' => 'Calle Ficticia, 123, Madrid, España',
                'id_suscripcion' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Empresa B',
                'CIF' => 'B98765432',
                'direccion' => 'Avenida Real, 456, Barcelona, España',
                'id_suscripcion' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Empresa C',
                'CIF' => 'C11223344',
                'direccion' => 'Plaza Central, 789, Valencia, España',
                'id_suscripcion' => 3, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SuscripcionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('suscripcion')->insert([
            [
                'tipo' => 'Gratuita',
                'descripcion' => 'Acceso limitado, solo para usuarios que deseen probar el servicio.',
                'precio' => 0.00,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Básica',
                'descripcion' => 'Acceso a funcionalidades básicas y algunos servicios adicionales.',
                'precio' => 9.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo' => 'Premium',
                'descripcion' => 'Acceso completo a todos los servicios, características premium y soporte prioritario.',
                'precio' => 49.99,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

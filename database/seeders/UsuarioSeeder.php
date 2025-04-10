<?php

namespace Database\Seeders;

use App\Models\Usuario;
use Illuminate\Database\Seeder;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::insert([
            ['email' => 'ird0007@alu.medac.es', 'password' => 'nacho123'],
            ['email' => 'ija0001@alu.medac.es', 'password' => 'ivan123'],
            ['email' => 'rmr0026@alu.medac.es', 'password' => 'ramon123'],
            ['email' => 'aam0021@alu.medac.es', 'password' => 'toni123']
        ]);
    }
}

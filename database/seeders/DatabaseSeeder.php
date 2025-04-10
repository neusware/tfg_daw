<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(TipoEstudioSeeder::class);
        $this->call(UsuarioSeeder::class);
        $this->call(NaturalezaSeeder::class);
        $this->call(FormatoSeeder::class);
        $this->call(SedeSeeder::class);
        $this->call(CalidadSeeder::class);
        $this->call(InterpretacionSeeder::class);
        $this->call(MuestraSeeder::class);
        $this->call(Interpretacion_MuestraSeeder::class);
    }
}

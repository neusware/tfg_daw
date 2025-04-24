<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('producto')->insert([
            [
                'nombre' => 'Botella de agua mineral 1.5L',
                'descripcion' => 'Botella de plástico PET utilizada para contener agua mineral.',
                'ingredientes' => 'Plástico PET',
                'fabricante' => 'Aguas del Sur S.A.',
                'composicion' => 'Plástico PET reciclable',
                'puntos' => 10,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 1, // Plástico
                'id_empresa' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Cáscara de plátano',
                'descripcion' => 'Desecho orgánico biodegradable proveniente de frutas.',
                'ingredientes' => 'Materia orgánica natural',
                'fabricante' => 'Naturaleza',
                'composicion' => 'Materia orgánica',
                'puntos' => 5,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 2, // Orgánico
                'id_empresa' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Caja de cereales',
                'descripcion' => 'Caja de cartón reciclable que contiene cereales de desayuno.',
                'ingredientes' => 'Cartón, tinta vegetal',
                'fabricante' => 'Desayunos Saludables S.L.',
                'composicion' => 'Cartón reciclable',
                'puntos' => 9,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 3, // Cartón y Papel
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Frasco de mermelada',
                'descripcion' => 'Frasco de vidrio reutilizable para conservar mermeladas.',
                'ingredientes' => 'Vidrio, tapa metálica',
                'fabricante' => 'Dulces del Valle',
                'composicion' => 'Vidrio reciclable',
                'puntos' => 12,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 4, // Vidrio
                'id_empresa' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Pañuelo de papel usado',
                'descripcion' => 'Desecho no reciclable que debe ir al contenedor de restos.',
                'ingredientes' => 'Papel no reciclable',
                'fabricante' => 'Higiene Plus',
                'composicion' => 'Celulosa',
                'puntos' => 2,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 5, // Restos
                'id_empresa' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Pila alcalina',
                'descripcion' => 'Pila usada que debe llevarse a un punto limpio por su contenido tóxico.',
                'ingredientes' => 'Zinc, dióxido de manganeso',
                'fabricante' => 'Energía Max',
                'composicion' => 'Metales y electrolitos',
                'puntos' => 15,
                'imagen' => ' ',
                'enlace_qr' => ' ',
                'id_categoria' => 6, // Punto Limpio
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        
    }
}

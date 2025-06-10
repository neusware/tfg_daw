<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecompensaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('recompensas')->insert([
            [
                'nombre' => '10% en Carrefour',
                'descripcion' => 'Descuento en compras superiores a 50€.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 100,
                'precio_pts' => 500,
            ],
            [
                'nombre' => 'Cupón 5€ Lidl',
                'descripcion' => 'Redimible en caja, sin mínimo de compra.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 50,
                'precio_pts' => 400,
            ],
            [
                'nombre' => '2x1 en Dia',
                'descripcion' => 'Válido en productos seleccionados online.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 70,
                'precio_pts' => 350,
            ],
            [
                'nombre' => '15% en Mercadona',
                'descripcion' => 'Un solo uso por cuenta.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 80,
                'precio_pts' => 600,
            ],
            [
                'nombre' => 'Cupón 10€ Alcampo',
                'descripcion' => 'Acumulable con otras ofertas.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 30,
                'precio_pts' => 800,
            ],
            [
                'nombre' => '20% en frescos Eroski',
                'descripcion' => 'Solo válido fines de semana.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 60,
                'precio_pts' => 450,
            ],
            [
                'nombre' => '3x2 en Auchan',
                'descripcion' => 'En bebidas seleccionadas.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 90,
                'precio_pts' => 550,
            ],
            [
                'nombre' => '10% limpieza Consum',
                'descripcion' => 'Compra mínima de 30€.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 40,
                'precio_pts' => 300,
            ],
            [
                'nombre' => 'Envío gratis',
                'descripcion' => 'Para pedidos online superiores a 40€.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 100,
                'precio_pts' => 200,
            ],
            [
                'nombre' => 'Vale 7€ El Corte Inglés',
                'descripcion' => 'Válido en productos de supermercado.',
                'foto' => 'https://cdn-icons-png.flaticon.com/512/2666/2666513.png',
                'cantidad' => 35,
                'precio_pts' => 700,
            ],
        ]);
    }
}

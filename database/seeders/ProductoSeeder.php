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
                'imagen' => 'https://5sentidos.es/wp-content/uploads/2023/12/Agua-Mineral-Font-Vella-Botella-1.5-Litros-600px-1200x900.png',
                'enlace_qr' => ' ',
                'id_categoria' => 1, // Plástico
                'id_empresa' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Botella de vidrio verde',
                'descripcion' => 'Contenedor reutilizable ideal para reciclaje de vidrio.',
                'ingredientes' => 'Vidrio',
                'fabricante' => 'GlassCo',
                'composicion' => 'Silicato de sodio y calcio',
                'puntos' => 5,
                'imagen' => 'https://www.vicrisol.com/wp-content/uploads/BOTELLA-CUADRADA-12CM-COLOR-VERDE-1.png',
                'enlace_qr' => ' ',
                'id_categoria' => 4,
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
                'imagen' => 'https://www.luismartinezmarketing.es/wp-content/uploads/Frontal-Caja_Kelloggs.jpg',
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
                'imagen' => 'https://st2.depositphotos.com/1009168/6992/i/450/depositphotos_69923827-stock-photo-strawberry-jam-in-jar.jpg ',
                'enlace_qr' => ' ',
                'id_categoria' => 4, // Vidrio
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Lata de CocaCola',
                'descripcion' => 'Refresco de cola.',
                'ingredientes' => 'Aluminio',
                'fabricante' => 'CanMetal',
                'composicion' => 'Aluminio 100%',
                'puntos' => 7,
                'imagen' => 'https://www.comprar-bebidas.com/media/catalog/product/cache/5/image/767x1021/9df78eab33525d08d6e5fb8d27136e95/c/o/coca-cola-lata-33cl-caja-24unid.jpeg',
                'enlace_qr' => '',
                'id_categoria' => 4,
                'id_empresa' => 3,
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
                'imagen' => 'https://www.unionferretera.com/32777-large_default/pila-alcalina-duracell-plus-9v.jpg ',
                'enlace_qr' => ' ',
                'id_categoria' => 6, // Punto Limpio
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Yogurt Danone',
                'descripcion' => 'Contenedor de plástico reciclable postconsumo.',
                'ingredientes' => 'Polipropileno',
                'fabricante' => 'Lácteos Frescos',
                'composicion' => 'Plástico tipo 5 (PP)',
                'puntos' => 6,
                'imagen' => 'https://www.tutrebol.es/64104-thickbox_default/yogur-sabor-fruta-bosque-danone-pack-4x120-grs.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Inerte
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Perfume Lacoste',
                'descripcion' => 'Envase de vidrio para reciclaje especializado.',
                'ingredientes' => 'Vidrio y metal',
                'fabricante' => 'Aromas Finos',
                'composicion' => 'Vidrio templado y válvula metálica',
                'puntos' => 11,
                'imagen' => 'https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-ES-Site/Sites-master/es/dw753640be/LC016A02_000_24.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4,
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Cáscara de huevo',
                'descripcion' => 'Residuo de cocina compostable y biodegradable.',
                'ingredientes' => 'Carbonato cálcico',
                'fabricante' => 'Granja Natural',
                'composicion' => 'Materia orgánica mineral',
                'puntos' => 4,
                'imagen' => 'https://bachoco.blob.core.windows.net/website/93224ded-4855-41a3-b3b9-dc49740ecb9a.png',
                'enlace_qr' => '',
                'id_categoria' => 2,
                'id_empresa' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

    }
}

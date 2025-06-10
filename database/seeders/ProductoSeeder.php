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
                'nombre' => 'Bacon en tiras Nuestra Alacena de Dia bandeja 2 x 100 g',
                'descripcion' => 'Bandeja plástica para la conservación de bacon en tiras.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 600, // 300 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 15g/100g
                        'grasas' => 56, // 28g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja de plástico reciclable con film superior.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273750/273750_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Pechuga de pavo Nuestra Alacena de Dia sobre 2 x 200 g',
                'descripcion' => 'Sobre de plástico para fiambre de pavo loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Pechuga de pavo',
                        'cantidad' => 400,
                        'unidad' => 'g',
                        'calorias' => 400, // 100 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 80, // 20g/100g
                        'grasas' => 4, // 1g/100g
                        'carbohidratos' => 4, // 1g/100g
                        'notas' => 'Bajo en grasa'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Envoltorio de plástico flexible reciclable.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273810/273810_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Jamón cocido extra Nuestra Alacena de Dia sobre 2 x 225 g',
                'descripcion' => 'Sobre de plástico para jamón cocido extra loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón de cerdo',
                        'cantidad' => 450,
                        'unidad' => 'g',
                        'calorias' => 675, // 150 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 90, // 20g/100g
                        'grasas' => 14, // 3g/100g
                        'carbohidratos' => 5, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Sobre de plástico multicapa para mantener la frescura.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273957/273957_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Jamón cocido extra 97% carne Nuestra Alacena de Dia sobre 150 g',
                'descripcion' => 'Sobre de plástico para jamón cocido extra de alta calidad.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón de cerdo',
                        'cantidad' => 150,
                        'unidad' => 'g',
                        'calorias' => 225, // 150 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 20g/100g
                        'grasas' => 5, // 3g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Envoltorio de plástico flexible reciclable.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273737/273737_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Bacon en lonchas Nuestra Alacena de Dia sobre 200 g',
                'descripcion' => 'Sobre de plástico para bacon loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 600, // 300 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 15g/100g
                        'grasas' => 56, // 28g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Sobre de plástico reciclable con atmósfera protectora.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273749/273749_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Jamón de cebo ibérico 50% Nuestra Alacena de Dia bandeja 90 g',
                'descripcion' => 'Bandeja de plástico para jamón ibérico loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón ibérico de cebo',
                        'cantidad' => 90,
                        'unidad' => 'g',
                        'calorias' => 315, // 350 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 27, // 30g/100g
                        'grasas' => 23, // 25g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Curación natural'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja plástica con separador y faja de cartón.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274057/274057_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico (bandeja plástica)
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Paleta de cebo ibérica 50% Nuestra Alacena de Dia bandeja 100 g',
                'descripcion' => 'Bandeja de plástico para paleta ibérica loncheada.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Paleta ibérica de cebo',
                        'cantidad' => 100,
                        'unidad' => 'g',
                        'calorias' => 350, // 350 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 30g/100g
                        'grasas' => 25, // 25g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Curación natural'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja plástica con separador y faja de cartón.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274058/274058_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico (bandeja plástica)
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Jamón Serrano reserva Nuestra Alacena de Dia bandeja 200 g',
                'descripcion' => 'Bandeja de plástico para jamón serrano loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón serrano',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 500, // 250 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 60, // 30g/100g
                        'grasas' => 24, // 12g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja de plástico reciclable con film protector.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274051/274051_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'MEDIAS LONCHAS Jamón Serrano Nuestra Alacena de Dia bandeja 100 g',
                'descripcion' => 'Bandeja de plástico para medias lonchas de jamón serrano.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón serrano',
                        'cantidad' => 100,
                        'unidad' => 'g',
                        'calorias' => 250, // 250 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 30g/100g
                        'grasas' => 12, // 12g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja plástica con film protector.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274052/274052_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'LONCHAS EXTRAFINAS Jamón Serrano Nuestra Alacena de Dia bandeja 120 g',
                'descripcion' => 'Bandeja de plástico para lonchas extrafinas de jamón serrano.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Jamón serrano',
                        'cantidad' => 120,
                        'unidad' => 'g',
                        'calorias' => 300, // 250 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 36, // 30g/100g
                        'grasas' => 14, // 12g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja plástica con film protector.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274053/274053_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Chorizo extra Nuestra Alacena de Dia bandeja 2 x 100 g',
                'descripcion' => 'Bandeja de plástico para chorizo extra loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 900, // 450 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 50, // 25g/100g
                        'grasas' => 80, // 40g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja de plástico reciclable con atmósfera protectora.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/273988/273988_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Salchichón extra Nuestra Alacena de Dia bandeja 2 x 100 g',
                'descripcion' => 'Bandeja de plástico para salchichón extra loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 800, // 400 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 60, // 30g/100g
                        'grasas' => 60, // 30g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja de plástico reciclable con atmósfera protectora.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274140/274140_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Lomo embuchado Nuestra Alacena de Dia bandeja 2 x 70 g',
                'descripcion' => 'Bandeja de plástico para lomo embuchado loncheado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Lomo de cerdo',
                        'cantidad' => 140,
                        'unidad' => 'g',
                        'calorias' => 420, // 300 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 49, // 35g/100g
                        'grasas' => 22, // 16g/100g
                        'carbohidratos' => 0, // ~0g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bandeja de plástico reciclable con film protector.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274063/274063_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Espetec extra Casa Tarradellas bolsa 180 g',
                'descripcion' => 'Bolsa de plástico para espetec extra.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 180,
                        'unidad' => 'g',
                        'calorias' => 720, // 400 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 54, // 30g/100g
                        'grasas' => 54, // 30g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Casa Tarradellas',
                'composicion' => 'Bolsa de plástico impresa con cierre.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/37114/37114_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Fuet extra Nuestra Alacena de Dia bolsa 2 x 170 g',
                'descripcion' => 'Bolsa de plástico para fuet extra.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Carne de cerdo',
                        'cantidad' => 340,
                        'unidad' => 'g',
                        'calorias' => 1360, // 400 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 102, // 30g/100g
                        'grasas' => 102, // 30g/100g
                        'carbohidratos' => 3, // 1g/100g
                        'notas' => 'Sin gluten'
                    ]
                ]),
                'fabricante' => 'Nuestra Alacena de Dia',
                'composicion' => 'Bolsa de plástico impresa con cierre.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/274138/274138_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso semicurado Mahón Quesería del Mundo 220 g',
                'descripcion' => 'Envoltorio de plástico para queso semicurado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 220,
                        'unidad' => 'g',
                        'calorias' => 880, // 400 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 55, // 25g/100g
                        'grasas' => 77, // 35g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Quesería del Mundo',
                'composicion' => 'Envoltorio de plástico microperforado con etiqueta de papel.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/300005/300005_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso mozzarella rallado Dia Láctea bolsa 200 g',
                'descripcion' => 'Bolsa de plástico con cierre para queso mozzarella rallado.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 600, // 300 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 50, // 25g/100g
                        'grasas' => 40, // 20g/100g
                        'carbohidratos' => 4, // 2g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Dia Láctea',
                'composicion' => 'Bolsa de plástico flexible reciclable con cierre zip.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/13096/13096_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso semicurado ibérico Quesería del Mundo 175 g',
                'descripcion' => 'Envoltorio de plástico para queso semicurado ibérico.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 175,
                        'unidad' => 'g',
                        'calorias' => 700, // 400 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 44, // 25g/100g
                        'grasas' => 61, // 35g/100g
                        'carbohidratos' => 2, // 1g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Quesería del Mundo',
                'composicion' => 'Envoltorio de plástico microperforado con etiqueta de papel.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/300006/300006_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso mezcla 4 quesos rallado Dia Láctea bolsa 200 g',
                'descripcion' => 'Bolsa de plástico para queso rallado mezcla de 4 quesos.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 200,
                        'unidad' => 'g',
                        'calorias' => 640, // 320 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 50, // 25g/100g
                        'grasas' => 44, // 22g/100g
                        'carbohidratos' => 4, // 2g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Dia Láctea',
                'composicion' => 'Bolsa de plástico flexible reciclable con cierre zip.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/50652/50652_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso sándwich Dia Láctea sobre 160 g',
                'descripcion' => 'Sobre de plástico para queso en lonchas para sándwich.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 160,
                        'unidad' => 'g',
                        'calorias' => 480, // 300 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 40, // 25g/100g
                        'grasas' => 32, // 20g/100g
                        'carbohidratos' => 3, // 2g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Dia Láctea',
                'composicion' => 'Sobre de plástico flexible reciclable.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/302962/302962_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso fresco natural Dia Láctea tarrina 4 x 62.5 g',
                'descripcion' => 'Tarrina de plástico con tapa de aluminio para queso fresco.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 250,
                        'unidad' => 'g',
                        'calorias' => 375, // 150 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 12g/100g
                        'grasas' => 25, // 10g/100g
                        'carbohidratos' => 8, // 3g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Dia Láctea',
                'composicion' => 'Tarrina plástica con tapa de aluminio protectora.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/115669/115669_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso mozzarella fresca Selección Mundial de Dia bolsa 125 g',
                'descripcion' => 'Bolsa de plástico que contiene mozzarella fresca en suero.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 125,
                        'unidad' => 'g',
                        'calorias' => 313, // 250 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'Italia',
                        'proteinas' => 25, // 20g/100g
                        'grasas' => 25, // 20g/100g
                        'carbohidratos' => 3, // 2g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'Selección Mundial de Dia',
                'composicion' => 'Bolsa plástica sellada para líquidos.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/108698/108698_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Queso fresco de vaca El Cencerro de Dia tarrina 250 g',
                'descripcion' => 'Tarrina de plástico para queso fresco de vaca.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Leche de vaca pasteurizada',
                        'cantidad' => 250,
                        'unidad' => 'g',
                        'calorias' => 375, // 150 kcal/100g
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 30, // 12g/100g
                        'grasas' => 25, // 10g/100g
                        'carbohidratos' => 8, // 3g/100g
                        'notas' => 'Contiene lactosa'
                    ]
                ]),
                'fabricante' => 'El Cencerro de Dia',
                'composicion' => 'Tarrina plástica con tapa de aluminio protectora.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/115196/115196_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'nombre' => 'Vino tinto tempranillo syrah Pinta en Copas botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto tempranillo syrah.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo syrah',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 555, // 74 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Pinta en Copas',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/265818/265818_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto crianza D.O Rioja Señorío de Ondas botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto crianza D.O. Rioja.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Señorío de Ondas',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/40350/40350_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto Castillo de Velasco brik 1 l',
                'descripcion' => 'Brik de cartón para vino tinto.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tinta',
                        'cantidad' => 1000,
                        'unidad' => 'ml',
                        'calorias' => 720, // 72 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.7, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Castillo de Velasco',
                'composicion' => 'Brik de cartón con interior de aluminio y tapón de plástico.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/112887/112887_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 3, // Cartón y Papel
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto crianza D.O. Valdepeñas Viña Albalí botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto crianza D.O. Valdepeñas.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Viña Albalí',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/102900/102900_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto joven D.O. La Mancha Ribera de Algodor botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto joven D.O. La Mancha.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 555, // 74 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Ribera de Algodor',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/28638/28638_ISO_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto reserva D.O. Rioja Castillo de Haro botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto reserva D.O. Rioja.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 585, // 78 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Castillo de Haro',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/263404/263404_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto Syrah Señorío de Ayerbe botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto Syrah.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva Syrah',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 560, // 75 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Señorío de Ayerbe',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/222272/222272_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto Castillo de Velasco garrafa 2 l',
                'descripcion' => 'Garrafa de plástico para vino tinto.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tinta',
                        'cantidad' => 2000,
                        'unidad' => 'ml',
                        'calorias' => 1440, // 72 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 1.4, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 6, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Castillo de Velasco',
                'composicion' => 'Garrafa de plástico con tapón de rosca.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/79741/79741_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto Carta de plata botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto Carta de Plata.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tinta',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Carta de Plata',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/29355/29355_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto Valle rojo garrafa 5 l',
                'descripcion' => 'Garrafa de plástico para vino tinto Valle Rojo.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tinta',
                        'cantidad' => 5000,
                        'unidad' => 'ml',
                        'calorias' => 3600, // 72 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 3.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 15, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Valle Rojo',
                'composicion' => 'Garrafa de plástico con tapón de rosca.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/296347/296347_347_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 1, // Envases de Plástico
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto ecológico D.O. Jumilla Sismicus botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto ecológico D.O. Jumilla.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva monastrell',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 560, // 75 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos, ecológico'
                    ]
                ]),
                'fabricante' => 'Sismicus',
                'composicion' => 'Botella de vidrio con etiqueta de papel reciclable y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/267012/267012_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto roble D.O. Ribera del Duero Arco del Sol botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto roble D.O. Ribera del Duero.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Arco del Sol',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/263700/263700_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto cabernet sauvignon IGP Señorío de Ayerbe botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto cabernet sauvignon.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva cabernet sauvignon',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 560, // 75 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Señorío de Ayerbe',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/9273/297273_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto reserva D.O. Valdepeñas Viña Albalí botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto reserva D.O. Valdepeñas.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 585, // 78 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Viña Albalí',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/46244/46244_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto reserva D.O. Cariñena Geraldino botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto reserva D.O. Cariñena.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva garnacha',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 585, // 78 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Geraldino',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/267781/267781_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto crianza D.O. Rioja Ederra botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto crianza D.O. Rioja.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Ederra',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/3475/3475_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto D.O. Navarra Viña Ardanche botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto D.O. Navarra.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 555, // 74 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Viña Ardanche',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/13034/13034_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto crianza D.O. Castilla La Mancha Ribera de Algodor botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto crianza D.O. Castilla La Mancha.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Ribera de Algodor',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/222265/222265_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto D.O. Simón brik 1 l',
                'descripcion' => 'Brik de cartón para vino tinto D.O. Simón.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tinta',
                        'cantidad' => 1000,
                        'unidad' => 'ml',
                        'calorias' => 720, // 72 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.7, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'Simón',
                'composicion' => 'Brik de cartón con interior de aluminio y tapón de plástico.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/35430/35430_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 3, // Cartón y Papel
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nombre' => 'Vino tinto crianza D.O. Rioja El coto botella 75 cl',
                'descripcion' => 'Botella de vidrio para vino tinto crianza D.O. Rioja.',
                'ingredientes' => json_encode([
                    [
                        'nombre' => 'Uva tempranillo',
                        'cantidad' => 750,
                        'unidad' => 'ml',
                        'calorias' => 570, // 76 kcal/100ml
                        'porcentaje' => 100,
                        'tipo' => 'base',
                        'origen' => 'España',
                        'proteinas' => 0.5, // 0.07g/100ml
                        'grasas' => 0, // 0g/100ml
                        'carbohidratos' => 2.3, // 0.3g/100ml
                        'notas' => 'Contiene sulfitos'
                    ]
                ]),
                'fabricante' => 'El Coto',
                'composicion' => 'Botella de vidrio con etiqueta de papel y tapón de corcho.',
                'puntos' => rand(10, 50),
                'imagen' => 'https://www.dia.es/product_images/102921/102921_0_ES.jpg',
                'enlace_qr' => '',
                'id_categoria' => 4, // Envases de Vidrio
                'id_empresa' => 1, // Dia
                'created_at' => now(),
                'updated_at' => now(),
            ],

    [
        'nombre' => 'Body milk hidratante aloe vera y ácido hialurónico Imaqe de Dia botella 400 ml',
        'descripcion' => 'Botella de plástico para body milk hidratante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Aloe vera',
                'cantidad' => 400,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Con ácido hialurónico'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/293728/293728_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Crema hidratante universal todo tipo de pieles Nivea lata 250 ml',
        'descripcion' => 'Lata metálica para crema hidratante universal.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Glicerina',
                'cantidad' => 250,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'Alemania',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Apta para todo tipo de pieles'
            ]
        ]),
        'fabricante' => 'Nivea',
        'composicion' => 'Lata de aluminio con tapa metálica.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/823/823_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico (lata reciclable en contenedor de envases)
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Body milk nutritivo cuidado intensivo piel seca/muy seca Nivea botella 400 ml',
        'descripcion' => 'Botella de plástico para body milk nutritivo.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Aceite de almendras',
                'cantidad' => 400,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'Alemania',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Para piel seca/muy seca'
            ]
        ]),
        'fabricante' => 'Nivea',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/161258/161258_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Crema reparadora para pies con urea Imaqe de Dia tubo 125 ml',
        'descripcion' => 'Tubo de plástico para crema reparadora de pies.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Urea',
                'cantidad' => 125,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Repara piel agrietada'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Tubo de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/290114/290114_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Gel frío calmante para pies y piernas Imaqe de Dia tubo 125 ml',
        'descripcion' => 'Tubo de plástico para gel frío calmante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Mentol',
                'cantidad' => 125,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Efecto refrescante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Tubo de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/290115/290115_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Gel de ducha avena botella 1 l',
        'descripcion' => 'Botella de plástico para gel de ducha de avena.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Extracto de avena',
                'cantidad' => 1000,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Hidratante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/273851/273851_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Esponja de baño flor acción exfoliante Imaqe de Dia bolsa 1 unidad',
        'descripcion' => 'Bolsa de plástico para esponja de baño exfoliante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Fibra sintética',
                'cantidad' => 1,
                'unidad' => 'unidad',
                'calorias' => 0, // Sin calorías
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g
                'grasas' => 0, // 0g
                'carbohidratos' => 0, // 0g
                'notas' => 'Acción exfoliante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Bolsa de plástico con esponja de fibra sintética.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/293505/293505_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Gel de ducha Tradición con aceites esenciales Imaqe de Dia botella 750 ml',
        'descripcion' => 'Botella de plástico para gel de ducha con aceites esenciales.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Aceites esenciales',
                'cantidad' => 750,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Aroma tradicional'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/300928/300928_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Gel de ducha hidratante de almendras y miel Imaqe de Dia botella 750 ml',
        'descripcion' => 'Botella de plástico para gel de ducha hidratante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Extracto de almendras',
                'cantidad' => 750,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Con miel'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/273855/273855_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Gel de ducha aloe vera Instituto Español botella 1.25 l',
        'descripcion' => 'Botella de plástico para gel de ducha con aloe vera.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Aloe vera',
                'cantidad' => 1250,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // g0g/100ml
                'carbohidratos' => 0, // g0g/100ml
                'notas' => 'Hidratante'
            ]
        ]),
        'fabricante' => 'Instituto Español',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/231201/231201_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pasta de dientes Colgate Triple Action tubo 75 ml',
        'descripcion' => 'Tubo de plástico para pasta de dientes.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Fluoruro de sodio',
                'cantidad' => 75,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'EE.UU.',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Triple acción'
            ]
        ]),
        'fabricante' => 'Colgate',
        'composicion' => 'Tubo de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/7407/7407_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pasta de dientes Colgate Total Prevención Activa Original tubo 75 ml',
        'descripcion' => 'Tubo de plástico para pasta de dientes preventiva.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Fluoruro de sodio',
                'cantidad' => 75,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'EE.UU.',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Prevención activa'
            ]
        ]),
        'fabricante' => 'Colgate',
        'composicion' => 'Tubo de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/254483/254483_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pasta de dientes blanqueante Imaqe de Dia tubo 75 ml',
        'descripcion' => 'Tubo de plástico para pasta de dientes blanqueante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Bicarbonato de sodio',
                'cantidad' => 75,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Efecto blanqueante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Tubo de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/294278/294278_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Enjuague bucal protección dientes y encías Imaqe de Dia botella 500 ml',
        'descripcion' => 'Botella de plástico para enjuague bucal.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Cloruro de cetilpiridinio',
                'cantidad' => 500,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Protección dental'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón de rosca.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/284058/284058_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Cepillo de dientes medio Imaqe de Dia blister 3 unidades',
        'descripcion' => 'Blíster de plástico para cepillos de dientes.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Cerdas de nylon',
                'cantidad' => 3,
                'unidad' => 'unidades',
                'calorias' => 0, // Sin calorías
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g
                'grasas' => 0, // 0g
                'carbohidratos' => 0, // 0g
                'notas' => 'Dureza media'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Blíster de plástico con soporte de cartón.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/295767/295767_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Desodorante roll-on antitranspirante con extracto de rosa mosqueta Imaqe de Dia bote 50 ml',
        'descripcion' => 'Bote de plástico para desodorante roll-on.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Extracto de rosa mosqueta',
                'cantidad' => 50,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Antitranspirante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Bote de plástico reciclable con aplicador roll-on.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/274533/274533_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Desodorante antitranspirante con extracto de rosa mosqueta Imaqe de Dia spray 200 ml',
        'descripcion' => 'Aerosol de aluminio para desodorante antitranspirante.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Extracto de rosa mosqueta',
                'cantidad' => 200,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Antitranspirante'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Aerosol de aluminio con válvula de plástico.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/274501/274501_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico (aerosol reciclable en contenedor de envases)
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Desodorante roll-on dermo extra control duplo Sanex bote 100 ml',
        'descripcion' => 'Bote de plástico para desodorante roll-on duplo.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Clorhidrato de aluminio',
                'cantidad' => 100,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Dermo extra control'
            ]
        ]),
        'fabricante' => 'Sanex',
        'composicion' => 'Bote de plástico reciclable con aplicador roll-on.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/288479/288479_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Desodorante roll-on black and white mujer Imaqe de Dia bote 50 ml',
        'descripcion' => 'Bote de plástico para desodorante roll-on femenino.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Clorhidrato de aluminio',
                'cantidad' => 50,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Protección contra manchas'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Bote de plástico reciclable con aplicador roll-on.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/274534/274534_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Desodorante roll-on antitranspirante para pieles sensibles Imaqe de Dia bote 50 ml',
        'descripcion' => 'Bote de plástico para desodorante roll-on para pieles sensibles.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Clorhidrato de aluminio',
                'cantidad' => 50,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Para pieles sensibles'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Bote de plástico reciclable con aplicador roll-on.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/274532/274532_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Champú familiar botella 1 l',
        'descripcion' => 'Botella de plástico para champú familiar.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Lauril sulfato de sodio',
                'cantidad' => 1000,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Uso diario'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/290117/290117_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Champú para pelo rizado Método Curly Imaqe de Dia botella 400 ml',
        'descripcion' => 'Botella de plástico para champú para pelo rizado.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Aceite de coco',
                'cantidad' => 400,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Método Curly'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/297147/297147_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Champú pelo teñido keratina profesional Imaqe de Dia botella 750 ml',
        'descripcion' => 'Botella de plástico para champú para pelo teñido.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Keratina',
                'cantidad' => 750,
                'unidad' => 'ml',
                'calorias' => 0, // Sin calorías relevantes
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 0, // 0g/100ml
                'grasas' => 0, // 0g/100ml
                'carbohidratos' => 0, // 0g/100ml
                'notas' => 'Protección del color'
            ]
        ]),
        'fabricante' => 'Imaqe de Dia',
        'composicion' => 'Botella de plástico reciclable con tapón dosificador.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/290120/290120_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    
    [
        'nombre' => 'Fresón bandeja 500 g',
        'descripcion' => 'Bandeja de plástico para fresones frescos.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Fresones',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 160, // 32 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 3.5, // 0.7g/100g
                'porcentaje' => 100,
                'grasas' => 1.5, // 0.3g/100g
                'carbohidratos' => 38.5, // 7.7g/100g
                'notas' => 'Fruta de temporada'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/12254/12254_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Nectarina bandeja 750 g',
        'descripcion' => 'Bandeja de plástico para nectarinas frescas.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Nectarinas',
                'cantidad' => 750,
                'unidad' => 'g',
                'calorias' => 330, // 44 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 7.5, // 1g/100g
                'grasas' => 0.75, // 0.1g/100g
                'carbohidratos' => 67.5, // 9g/100g
                'notas' => 'Fruta de temporada'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/190825/190825_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Paraguayo bandeja 750 g',
        'descripcion' => 'Bandeja de plástico para paraguayos frescos.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Paraguayos',
                'cantidad' => 750,
                'unidad' => 'g',
                'calorias' => 292.5, // 39 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 6.75, // 0.9g/100g
                'grasas' => 1.875, // 0.25g/100g
                'carbohidratos' => 66, // 8.8g/100g
                'notas' => 'Fruta de temporada'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/190827/190827_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Melón piel de sapo unidad aprox. 3.5 Kg',
        'descripcion' => 'Melón fresco sin envase.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Melón piel de sapo',
                'cantidad' => 3500,
                'unidad' => 'g',
                'calorias' => 1190, // 34 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 21, // 0.6g/100g
                'grasas' => 3.5, // 0.1g/100g
                'carbohidratos' => 280, // 8g/100g
                'notas' => 'Fruta de temporada'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/28887/28887_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Manzana golden bolsa 1 Kg',
        'descripcion' => 'Bolsa de malla para manzanas golden.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Manzanas golden',
                'cantidad' => 1000,
                'unidad' => 'g',
                'calorias' => 520, // 52 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 2, // 0.2g/100g
                'grasas' => 1.7, // 0.17g/100g
                'carbohidratos' => 138, // 13.8g/100g
                'notas' => 'Variedad golden'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bolsa de malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/171233/171233_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Manzana roja selección granel 500 g aprox.',
        'descripcion' => 'Manzanas rojas frescas a granel.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Manzanas rojas',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 260, // 52 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 1, // 0.2g/100g
                'grasas' => 0.85, // 0.17g/100g
                'carbohidratos' => 69, // 13.8g/100g
                'notas' => 'Variedad selección'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/69/69_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Manzana golden granel 500 g aprox.',
        'descripcion' => 'Manzanas golden frescas a granel.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Manzanas golden',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 260, // 52 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 1, // 0.2g/100g
                'grasas' => 0.85, // 0.17g/100g
                'carbohidratos' => 69, // 13.8g/100g
                'notas' => 'Variedad golden'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/97/97_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Manzana fuji bolsa 1 Kg',
        'descripcion' => 'Bolsa de malla para manzanas fuji.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Manzanas fuji',
                'cantidad' => 1000,
                'unidad' => 'g',
                'calorias' => 520, // 52 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 2, // 0.2g/100g
                'grasas' => 1.7, // 0.17g/100g
                'carbohidratos' => 138, // 13.8g/100g
                'notas' => 'Variedad fuji'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bolsa de malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/54268/54268_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Banana granel 900 g aprox.',
        'descripcion' => 'Bananas frescas a granel.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Bananas',
                'cantidad' => 900,
                'unidad' => 'g',
                'calorias' => 801, // 89 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'Importado',
                'proteinas' => 9.9, // 1.1g/100g
                'grasas' => 3, // 0.33g/100g
                'carbohidratos' => 205.2, // 22.8g/100g
                'notas' => 'Fruta tropical'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/42070/42070_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Plátano de Canarias El afortunado 900 g aprox.',
        'descripcion' => 'Plátanos frescos a granel de Canarias.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Plátanos de Canarias',
                'cantidad' => 900,
                'unidad' => 'g',
                'calorias' => 801, // 89 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 9.9, // 1.1g/100g
                'grasas' => 3, // 0.33g/100g
                'carbohidratos' => 205.2, // 22.8g/100g
                'notas' => 'Variedad canaria'
            ]
        ]),
        'fabricante' => 'El Afortunado',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/142776/142776_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Plátano de canarias bolsa 1.2 Kg aprox.',
        'descripcion' => 'Bolsa de malla para plátanos de Canarias.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Plátanos de Canarias',
                'cantidad' => 1200,
                'unidad' => 'g',
                'calorias' => 1068, // 89 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 13.2, // 1.1g/100g
                'grasas' => 3.96, // 0.33g/100g
                'carbohidratos' => 273.6, // 22.8g/100g
                'notas' => 'Variedad canaria'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bolsa de malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/11468/11468_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Plátano bio bolsa 1 Kg aprox.',
        'descripcion' => 'Bolsa de malla para plátanos ecológicos.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Plátanos ecológicos',
                'cantidad' => 1000,
                'unidad' => 'g',
                'calorias' => 890, // 89 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'Importado',
                'proteinas' => 11, // 1.1g/100g
                'grasas' => 3.3, // 0.33g/100g
                'carbohidratos' => 228, // 22.8g/100g
                'notas' => 'Producto ecológico'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bolsa de malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/170563/170563_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Plátano macho para freír granel 1 Kg aprox.',
        'descripcion' => 'Plátanos macho frescos a granel.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Plátanos macho',
                'cantidad' => 1000,
                'unidad' => 'g',
                'calorias' => 1220, // 122 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'Importado',
                'proteinas' => 13, // 1.3g/100g
                'grasas' => 3.4, // 0.34g/100g
                'carbohidratos' => 316, // 31.6g/100g
                'notas' => 'Para freír'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/53584/53584_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pera conferencia bandeja 1 Kg',
        'descripcion' => 'Bandeja de plástico para peras conferencia.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Peras conferencia',
                'cantidad' => 1000,
                'unidad' => 'g',
                'calorias' => 570, // 57 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 3, // 0.3g/100g
                'grasas' => 1, // 0.1g/100g
                'carbohidratos' => 153, // 15.3g/100g
                'notas' => 'Variedad conferencia'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/64505/64505_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pera ercolini bandeja 500 g',
        'descripcion' => 'Bandeja de plástico para peras ercolini.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Peras ercolini',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 285, // 57 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 1.5, // 0.3g/100g
                'grasas' => 0.5, // 0.1g/100g
                'carbohidratos' => 76.5, // 15.3g/100g
                'notas' => 'Variedad ercolini'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/278651/278651_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Pera Rincón de Soto D.O.P. granel 500 g aprox.',
        'descripcion' => 'Peras frescas a granel con D.O.P.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Peras Rincón de Soto',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 285, // 57 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 1.5, // 0.3g/100g
                'grasas' => 0.5, // 0.1g/100g
                'carbohidratos' => 76.5, // 15.3g/100g
                'notas' => 'D.O.P. Rincón de Soto'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Sin envase, producto a granel.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/32063/32063_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 2, // Productos Orgánicos
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Naranjas de mesa malla 2 Kg',
        'descripcion' => 'Malla de plástico para naranjas de mesa.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Naranjas',
                'cantidad' => 2000,
                'unidad' => 'g',
                'calorias' => 940, // 47 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 18, // 0.9g/100g
                'grasas' => 2.4, // 0.12g/100g
                'carbohidratos' => 236, // 11.8g/100g
                'notas' => 'Para mesa'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/11467/11467_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Naranja especial para zumo malla 4 Kg',
        'descripcion' => 'Malla de plástico para naranjas para zumo.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Naranjas',
                'cantidad' => 4000,
                'unidad' => 'g',
                'calorias' => 1880, // 47 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 36, // 0.9g/100g
                'grasas' => 4.8, // 0.12g/100g
                'carbohidratos' => 472, // 11.8g/100g
                'notas' => 'Especial para zumo'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/13627/13627_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Naranja premium malla 1.5 Kg',
        'descripcion' => 'Malla de plástico para naranjas premium.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Naranjas premium',
                'cantidad' => 1500,
                'unidad' => 'g',
                'calorias' => 705, // 47 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 13.5, // 0.9g/100g
                'grasas' => 1.8, // 0.12g/100g
                'carbohidratos' => 177, // 11.8g/100g
                'notas' => 'Calidad premium'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/257840/257840_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Zumo de naranja recién exprimido botella',
        'descripcion' => 'Botella de plástico para zumo de naranja.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Zumo de naranja',
                'cantidad' => 250,
                'unidad' => 'ml',
                'calorias' => 112.5, // 45 kcal/100ml
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 1.75, // 0.75g/100ml
                'grasas' => 0.5, // 0.2g/100ml
                'carbohidratos' => 22.5, // 9g/100ml
                'notas' => 'Recién exprimido'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Botella de plástico reciclable con tapón.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/176479/176479_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Uva blanca sin semilla bandeja 500 g',
        'descripcion' => 'Bandeja de plástico para uvas blancas sin semilla.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Uvas blancas',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 345, // 69 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 3.5, // 0.7g/100g
                'porcentaje' => 1,
                'grasas' => 0.8, // 0.16g/100g
                'carbohidratos' => 90.5, // 18.1g/100g
                'notas' => 'Sin semilla'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/2672/2672_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Uva roja sin semilla bandeja 500 g',
        'descripcion' => 'Bandeja de plástico para uvas rojas sin semilla.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Uvas rojas',
                'cantidad' => 500,
                'unidad' => 'g',
                'calorias' => 345, // 69 kcal/100g
                'porcentaje' => 100,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 3.5, // 0.7g/100g
                'porcentaje' => 1,
                'grasas' => 0.8, // 0.16g/100g
                'carbohidratas' => 90.5, // 18g.1g
                'notas' => 'Sin semilla'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Bandeja de plástico con film transparente.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/26590/265910_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Limones malla 750 g',
        'descripcion' => 'Malla de plástico para limones.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Limones',
                'cantidad' => 750,
                'porcentaje' => 100,
                'unidad' => 'g',
                'calorias' => 217.5, // 29 kcal/100g
                'porcentaj' => '',
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 8.25, // 1.1g/100g
                'porcentaje' => 2,
                'grasas' => 2.25, // 0.3g/100g
                'carbohidratas' => 70.5, // 9.4g100g
                'notas' => 'Cítrico'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Malla de plástico reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product/11463/11463_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1, // Envases de Plástico
        'id_empresa' => 1, // Dia
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Leche semidesnatada Dia Láctea brik 6 x 1 l',
        'descripcion' => 'Leche semidesnatada de alta calidad, ideal para el consumo diario.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Leche semidesnatada',
                'cantidad' => 6000,
                'porcentaje' => 100,
                'unidad' => 'ml',
                'calorias' => 3000, // 50 kcal/100ml aprox
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 180, // 3g/100ml
                'grasas' => 120, // 2g/100ml
                'carbohidratos' => 300, // 5g/100ml
                'notas' => 'Fuente de calcio'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Envase de cartón reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/504P6/504P6_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1,
        'id_empresa' => 1,
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Leche entera Dia Láctea brik 6 x 1 l',
        'descripcion' => 'Leche entera natural, fresca y con todo el sabor tradicional.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Leche entera',
                'cantidad' => 6000,
                'porcentaje' => 100,
                'unidad' => 'ml',
                'calorias' => 3900, // 65 kcal/100ml
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 180, // 3g/100ml
                'grasas' => 360, // 6g/100ml
                'carbohidratos' => 300, // 5g/100ml
                'notas' => 'Ideal para recetas y consumo diario'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Envase de cartón reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/608P6/608P6_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1,
        'id_empresa' => 1,
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Leche desnatada Dia Láctea brik 6 x 1 l',
        'descripcion' => 'Leche desnatada baja en grasa, perfecta para dietas saludables.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Leche desnatada',
                'cantidad' => 6000,
                'porcentaje' => 100,
                'unidad' => 'ml',
                'calorias' => 2100, // 35 kcal/100ml
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 180, // 3g/100ml
                'grasas' => 18, // 0.3g/100ml
                'carbohidratos' => 300, // 5g/100ml
                'notas' => 'Sin lactosa'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Envase de cartón reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/607P6/607P6_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1,
        'id_empresa' => 1,
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Leche semidesnatada sin lactosa Dia Láctea brik 6 x 1 l',
        'descripcion' => 'Leche semidesnatada sin lactosa, apta para intolerantes.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Leche semidesnatada sin lactosa',
                'cantidad' => 6000,
                'porcentaje' => 100,
                'unidad' => 'ml',
                'calorias' => 3000,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 180,
                'grasas' => 120,
                'carbohidratos' => 300,
                'notas' => 'Libre de lactosa'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Envase de cartón reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/130063P6/130063P6_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1,
        'id_empresa' => 1,
        'created_at' => now(),
        'updated_at' => now(),
    ],
    [
        'nombre' => 'Leche semidesnatada Dia Láctea brik 1 l',
        'descripcion' => 'Práctico envase de 1 litro de leche semidesnatada para uso diario.',
        'ingredientes' => json_encode([
            [
                'nombre' => 'Leche semidesnatada',
                'cantidad' => 1000,
                'porcentaje' => 100,
                'unidad' => 'ml',
                'calorias' => 500,
                'tipo' => 'base',
                'origen' => 'España',
                'proteinas' => 30,
                'grasas' => 20,
                'carbohidratos' => 50,
                'notas' => 'Ideal para toda la familia'
            ]
        ]),
        'fabricante' => 'Dia',
        'composicion' => 'Envase de cartón reciclable.',
        'puntos' => rand(10, 50),
        'imagen' => 'https://www.dia.es/product_images/504/504_ISO_0_ES.jpg',
        'enlace_qr' => '',
        'id_categoria' => 1,
        'id_empresa' => 1,
        'created_at' => now(),
        'updated_at' => now(),
    ]
        
        ]);
    }
}
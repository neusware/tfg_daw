<?php

namespace Database\Seeders;

use App\Models\Calidad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CalidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Calidad::insert([
            ['codigo' => 'C1', 'nombre' => 'Toma válida para examen', 'idTipoEstudio' => 1],
            ['codigo' => 'C2', 'nombre' => 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición', 'idTipoEstudio' => 1],
            ['codigo' => 'C3', 'nombre' => 'Toma válida para examen aunque limitada por hemorragia', 'idTipoEstudio' => 1],
            ['codigo' => 'C4', 'nombre' => 'Toma válida para examen aunque limitada por escasez de células', 'idTipoEstudio' => 1],
            ['codigo' => 'C5', 'nombre' => 'Toma válida para examen aunque limitada por intensa citolisis', 'idTipoEstudio' => 1],
            ['codigo' => 'C6', 'nombre' => 'Toma válida para examen aunque limitada por...', 'idTipoEstudio' => 1],
            ['codigo' => 'C7', 'nombre' => 'Toma no valorable por desecación', 'idTipoEstudio' => 1],
            ['codigo' => 'C8', 'nombre' => 'Toma no valorable por ausencia de células...', 'idTipoEstudio' => 1],
            ['codigo' => 'C9', 'nombre' => 'Toma no valorable por...', 'idTipoEstudio' => 1],

            ['nombre' => 'Muestra válida para examen', 'codigo' => 'H.1', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra válida para examen aunque limitada por lipemia', 'codigo' => 'H.2', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra válida para examen aunque limitada por hemólisis', 'codigo' => 'H.3', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra válida para examen aunque limitada por aglutinación', 'codigo' => 'H.4', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra válida para examen aunque limitada por coagulación', 'codigo' => 'H.5', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra válida para examen aunque limitada por...', 'codigo' => 'H.6', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra no valorable por desnaturalización de proteínas', 'codigo' => 'H.7', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra no valorable por contaminación bacteriana', 'codigo' => 'H.8', 'idTipoEstudio' => 2],
            ['nombre' => 'Muestra no valorable por...', 'codigo' => 'H.9', 'idTipoEstudio' => 2],

            ['nombre' => 'Muestra válida para examen', 'codigo' => 'U.1', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra válida para examen aunque limitada por turbidez', 'codigo' => 'U.2', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra válida para examen aunque limitada por coloración anormal', 'codigo' => 'U.3', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra válida para examen aunque limitada por contaminación fecal', 'codigo' => 'U.4', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra válida para examen aunque limitada por preservación inadecuada', 'codigo' => 'U.5', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente', 'codigo' => 'U.6', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra no valorable por deterioro', 'codigo' => 'U.7', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra no valorable por contaminación con agentes externos', 'codigo' => 'U.8', 'idTipoEstudio' => 3],
            ['nombre' => 'Muestra no valorable por...', 'codigo' => 'U.9', 'idTipoEstudio' => 3],

            ['nombre' => 'Muestra válida para examen', 'codigo' => 'E.1', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente', 'codigo' => 'E.2', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre', 'codigo' => 'E.3', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva', 'codigo' => 'E.4', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales', 'codigo' => 'E.5', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra válida para examen aunque limitada por presencia de alimentos', 'codigo' => 'E.6', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra no valorable por descomposición', 'codigo' => 'E.7', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra no valorable por...', 'codigo' => 'E.8', 'idTipoEstudio' => 4],
            ['nombre' => 'Muestra no valorable por...', 'codigo' => 'E.9', 'idTipoEstudio' => 4],

            ['nombre' => 'Muestra válida para examen', 'codigo' => 'B.1', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra válida para examen aunque limitada por cantidad insuficiente de células', 'codigo' => 'B.2', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre', 'codigo' => 'B.3', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra válida para examen aunque limitada por contaminación con alimentos', 'codigo' => 'B.4', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva', 'codigo' => 'B.5', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra válida para examen aunque limitada por...', 'codigo' => 'B.6', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra no valorable por deshidratación', 'codigo' => 'B.7', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra no valorable por contaminación con microorganismos', 'codigo' => 'B.8', 'idTipoEstudio' => 5],
            ['nombre' => 'Muestra no valorable por...', 'codigo' => 'B.9', 'idTipoEstudio' => 5],
        ]);
    }
}

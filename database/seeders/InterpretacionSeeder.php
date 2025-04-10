<?php

namespace Database\Seeders;

use App\Models\Interpretacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterpretacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Interpretacion::insert([
            ['codigo' => '1.1', 'nombre' => 'Predominio de células epiteliales escamosas superficiales', 'idTipoEstudio' => 1],
            ['codigo' => '1.2', 'nombre' => 'Predominio de células epiteliales escamosas intermedias', 'idTipoEstudio' => 1],
            ['codigo' => '1.3', 'nombre' => 'Predominio de células epiteliales escamosas parabasales', 'idTipoEstudio' => 1],
            ['codigo' => '1.4', 'nombre' => 'Polinucleares neutrófilos', 'idTipoEstudio' => 1],
            ['codigo' => '1.5', 'nombre' => 'Hematíes', 'idTipoEstudio' => 1],
            ['codigo' => '1.6', 'nombre' => 'Células endocervicales en exocervix', 'idTipoEstudio' => 1],
            ['codigo' => '1.7', 'nombre' => 'Células metaplásicas en exocérvix', 'idTipoEstudio' => 1],
            ['codigo' => '1.8', 'nombre' => 'Células metaplásicas inmaduras', 'idTipoEstudio' => 1],
            ['codigo' => '1.9', 'nombre' => 'Células reactivas', 'idTipoEstudio' => 1],
            ['codigo' => '1.10', 'nombre' => 'Células endometriales en mujer ≥ de 40 años', 'idTipoEstudio' => 1],
            ['codigo' => '1.11', 'nombre' => 'Alteraciones celulares sugerentes con HPV', 'idTipoEstudio' => 1],
            ['codigo' => '1.12', 'nombre' => 'Alteraciones celulares sugerentes de Herpes', 'idTipoEstudio' => 1],
            ['codigo' => '1.13', 'nombre' => 'Células neoplásicas', 'idTipoEstudio' => 1],
            ['codigo' => '1.14', 'nombre' => 'Células superficiales e intermedias con cambios atípicos', 'idTipoEstudio' => 1],
            ['codigo' => '1.15', 'nombre' => 'Células intermedias y parabasales con algunos cambios atípicos', 'idTipoEstudio' => 1],
            ['codigo' => '1.16', 'nombre' => 'Células parabasales con algunos cambios atípicos', 'idTipoEstudio' => 1],
            ['codigo' => '1.17', 'nombre' => 'Células escamosas de significado incierto', 'idTipoEstudio' => 1],
            ['codigo' => '1.18', 'nombre' => 'Células epiteliales glandulares de significado incierto', 'idTipoEstudio' => 1],
            ['codigo' => '1.19', 'nombre' => 'Estructuras micóticas correspondientes a Candida albicans', 'idTipoEstudio' => 1],
            ['codigo' => '1.20', 'nombre' => 'Estructuras micóticas correspondientes a Candida glabrata', 'idTipoEstudio' => 1],
            ['codigo' => '1.21', 'nombre' => 'Estructuras bacterianas con disposición característica de actinomyces', 'idTipoEstudio' => 1],
            ['codigo' => '1.22', 'nombre' => 'Estructuras bacterianas correspondiente de Gardnerella vaginalis', 'idTipoEstudio' => 1],
            ['codigo' => '1.23', 'nombre' => 'Estructuras bacterianas de naturaleza cocácea', 'idTipoEstudio' => 1],
            ['codigo' => '1.24', 'nombre' => 'Estructuras bacterianas sugerentes de Leptothrix', 'idTipoEstudio' => 1],
            ['codigo' => '1.25', 'nombre' => 'Estructuras correspondientes a Trichomonas vaginalis', 'idTipoEstudio' => 1],
            ['codigo' => '1.26', 'nombre' => 'Células histiocitarias multinucleadas', 'idTipoEstudio' => 1],
            ['codigo' => '1.27', 'nombre' => 'Células epiteliales de tipo escamoso con intensos cambios atípicos', 'idTipoEstudio' => 1],
            ['codigo' => '1.28', 'nombre' => 'Presencia de epitelio endometrial sin cambios atípicos', 'idTipoEstudio' => 1],
            ['codigo' => '1.29', 'nombre' => 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares', 'idTipoEstudio' => 1],

            ['nombre' => 'Predominio de eritrocitos normocíticos normocrómicos', 'codigo' => '2.1', 'idTipoEstudio' => 2],
            ['nombre' => 'Predominio de eritrocitos microcíticos hipocrómicos', 'codigo' => '2.2', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de esferocitos', 'codigo' => '2.3', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de dianocitos (células en forma de lágrima)', 'codigo' => '2.4', 'idTipoEstudio' => 2],
            ['nombre' => 'Leucocitos con predominio de neutrófilos', 'codigo' => '2.5', 'idTipoEstudio' => 2],
            ['nombre' => 'Leucocitos con predominio de linfocitos', 'codigo' => '2.6', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de células blásticas', 'codigo' => '2.7', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de eosinófilos aumentados', 'codigo' => '2.8', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de basófilos aumentados', 'codigo' => '2.9', 'idTipoEstudio' => 2],
            ['nombre' => 'Trombocitosis (aumento de plaquetas)', 'codigo' => '2.10', 'idTipoEstudio' => 2],
            ['nombre' => 'Trombocitopenia (disminución de plaquetas)', 'codigo' => '2.11', 'idTipoEstudio' => 2],
            ['nombre' => 'Anomalías en la morfología plaquetaria', 'codigo' => '2.12', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de células atípicas sugestivas de neoplasia', 'codigo' => '2.13', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de células inmaduras del linaje mieloide', 'codigo' => '2.14', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de células inmaduras del linaje linfático', 'codigo' => '2.15', 'idTipoEstudio' => 2],
            ['nombre' => 'Anisocitosis (variabilidad en el tamaño de los eritrocitos)', 'codigo' => '2.16', 'idTipoEstudio' => 2],
            ['nombre' => 'Poiquilocitosis (variabilidad en la forma de los eritrocitos)', 'codigo' => '2.17', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de cuerpos de Howell-Jolly', 'codigo' => '2.18', 'idTipoEstudio' => 2],
            ['nombre' => 'Células con inclusiones de hierro (cuerpos de Pappenheimer)', 'codigo' => '2.19', 'idTipoEstudio' => 2],
            ['nombre' => 'Presencia de parásitos intraeritrocitarios', 'codigo' => '2.20', 'idTipoEstudio' => 2],

            ['nombre' => 'pH normal', 'codigo' => '3.1', 'idTipoEstudio' => 3],
            ['nombre' => 'pH elevado', 'codigo' => '3.2', 'idTipoEstudio' => 3],
            ['nombre' => 'pH reducido', 'codigo' => '3.3', 'idTipoEstudio' => 3],
            ['nombre' => 'Presencia de proteínas', 'codigo' => '3.4', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para proteínas', 'codigo' => '3.5', 'idTipoEstudio' => 3],
            ['nombre' => 'Glucosa presente', 'codigo' => '3.6', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para la glucosa', 'codigo' => '3.7', 'idTipoEstudio' => 3],
            ['nombre' => 'Cetonas detectadas', 'codigo' => '3.8', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para cetonas', 'codigo' => '3.9', 'idTipoEstudio' => 3],
            ['nombre' => 'Hemoglobina presente', 'codigo' => '3.10', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para hemoglobina', 'codigo' => '3.11', 'idTipoEstudio' => 3],
            ['nombre' => 'Bilirrubina detectada', 'codigo' => '3.12', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para bilirrubina', 'codigo' => '3.13', 'idTipoEstudio' => 3],
            ['nombre' => 'Urobilinógeno normal', 'codigo' => '3.14', 'idTipoEstudio' => 3],
            ['nombre' => 'Urobilinógeno elevado', 'codigo' => '3.15', 'idTipoEstudio' => 3],
            ['nombre' => 'Presencia de nitritos', 'codigo' => '3.16', 'idTipoEstudio' => 3],
            ['nombre' => 'Negativo para nitritos', 'codigo' => '3.17', 'idTipoEstudio' => 3],
            ['nombre' => 'Presencia de leucocitos', 'codigo' => '3.18', 'idTipoEstudio' => 3],
            ['nombre' => 'Ausencia de leucocitos', 'codigo' => '3.19', 'idTipoEstudio' => 3],
            ['nombre' => 'Presencia de eritrocitos', 'codigo' => '3.20', 'idTipoEstudio' => 3],
            ['nombre' => 'Ausencia de eritrocitos', 'codigo' => '3.21', 'idTipoEstudio' => 3],
            ['nombre' => 'Células epiteliales', 'codigo' => '3.22', 'idTipoEstudio' => 3],
            ['nombre' => 'Cilindros hialinos', 'codigo' => '3.23', 'idTipoEstudio' => 3],
            ['nombre' => 'Cilindros granulosos', 'codigo' => '3.24', 'idTipoEstudio' => 3],
            ['nombre' => 'Cristales (oxalato de calcio, ácido úrico, etc.)', 'codigo' => '3.25', 'idTipoEstudio' => 3],
            ['nombre' => 'Bacterias', 'codigo' => '3.26', 'idTipoEstudio' => 3],
            ['nombre' => 'Levaduras', 'codigo' => '3.27', 'idTipoEstudio' => 3],
            ['nombre' => 'Parásitos', 'codigo' => '3.28', 'idTipoEstudio' => 3],

            ['nombre' => 'Presencia de células epiteliales escamosas', 'codigo' => '4.1', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células epiteliales columnares', 'codigo' => '4.2', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos)', 'codigo' => '4.3', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células metaplásicas', 'codigo' => '4.4', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células malignas', 'codigo' => '4.5', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células atípicas sugestivas de neoplasia', 'codigo' => '4.6', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de microorganismos (bacterias, hongos, micobacterias)', 'codigo' => '4.7', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de células sanguíneas (eritrocitos, plaquetas)', 'codigo' => '4.8', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de material mucoso o mucopurulento', 'codigo' => '4.9', 'idTipoEstudio' => 4],
            ['nombre' => 'Presencia de cristales (de colesterol, calcio, etc.)', 'codigo' => '4.10', 'idTipoEstudio' => 4],
            ['nombre' => 'Ausencia de células significativas para el análisis', 'codigo' => '4.11', 'idTipoEstudio' => 4],

            ['nombre' => 'Presencia de células epiteliales escamosas', 'codigo' => '5.1', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células epiteliales cilíndricas', 'codigo' => '5.2', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos)', 'codigo' => '5.3', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células glandulares', 'codigo' => '5.4', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células metaplásicas', 'codigo' => '5.5', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células atípicas sugestivas de neoplasia', 'codigo' => '5.6', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de microorganismos (bacterias, hongos, levaduras)', 'codigo' => '5.7', 'idTipoEstudio' => 5],
            ['nombre' => 'Presencia de células anormales con cambios citológicos', 'codigo' => '5.8', 'idTipoEstudio' => 5],
            ['nombre' => 'Ausencia de células significativas para el análisis', 'codigo' => '5.9', 'idTipoEstudio' => 5],
        ]);

    }
}

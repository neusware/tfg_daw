<?php
// filepath: /C:/xampp/htdocs/database/migrations/2025_01_28_163429_create_interpretacion_table.php



use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('interpretacion', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('codigo');
            $table->unsignedBigInteger('idTipoEstudio');
            $table->foreign(columns: 'idTipoEstudio')->references('id')->on('interpretacion')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('interpretacion');
    }
};

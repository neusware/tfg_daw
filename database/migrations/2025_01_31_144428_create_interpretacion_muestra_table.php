<?php

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
        Schema::create('interpretacion_muestra', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion');
            $table->foreignId('idMuestra')->constrained('muestra')->onDelete('cascade');
            $table->foreignId('idInterpretacion')->constrained('interpretacion')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('interpretacion_muestra');
    }
};

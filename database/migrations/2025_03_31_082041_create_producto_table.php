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
        Schema::create('producto', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->text('descripcion')->nullable();
            $table->text('ingredientes')->nullable();
            $table->string('fabricante')->nullable();
            $table->string('composicion')->nullable();
            $table->integer('puntos');
            $table->string('imagen')->nullable();
            $table->string('enlace_qr')->nullable();
            $table->foreignId('id_categoria')->constrained('categoria')->onDelete('cascade'); // Relación con 'categoria'
            $table->foreignId('id_empresa')->constrained('empresa')->onDelete('cascade'); // Relación con 'empresa'
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('producto');
    }
};

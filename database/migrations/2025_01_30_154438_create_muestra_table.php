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
        Schema::create('muestra', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->string('organo')->nullable();
            $table->string('codigo');

            // Cambiar idUsuario a unsignedBigInteger
            $table->unsignedBigInteger('idUsuario');
            $table->foreign('idUsuario')->references('id')->on('usuario')->onDelete('cascade');

            $table->unsignedBigInteger('idNaturaleza');
            $table->foreign('idNaturaleza')->references('id')->on('naturaleza')->onDelete('cascade');

            $table->unsignedBigInteger('idFormato');
            $table->foreign('idFormato')->references('id')->on('formato')->onDelete('cascade');

            $table->unsignedBigInteger('idSede');
            $table->foreign('idSede')->references('id')->on('sede')->onDelete('cascade');

            $table->unsignedBigInteger('idCalidad');
            $table->foreign('idCalidad')->references('id')->on('calidad')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('muestra');
    }
};

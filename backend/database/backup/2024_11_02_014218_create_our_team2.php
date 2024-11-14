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
        Schema::create('our_team2', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ourteam_id');
            $table->string('foto_anggota');
            $table->timestamps();
            $table->foreign('ourteam_id')->references('id')->on('ourteam')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('our_team2');
    }
};

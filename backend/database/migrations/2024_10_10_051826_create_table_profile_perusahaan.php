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
        Schema::create('profile_perusahaan', function (Blueprint $table) {
            $table->id();
            $table->text('visi');
            $table->text('tentang_kami');
            $table->text('misi');
            $table->string('foto_team');
            $table->unsignedBigInteger('team_id'); // Kolom team_id sebagai foreign key
            $table->timestamps();
        });

        // Definisikan foreign key
        Schema::table('profile_perusahaan', function (Blueprint $table) {
            $table->foreign('team_id')
                ->references('id') // Kolom yang dirujuk
                ->on('team')       // Nama tabel referensi (bukan 'id')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profile_perusahaan', function (Blueprint $table) {
            $table->dropForeign(['team_id']); // Hapus foreign key
        });

        Schema::dropIfExists('profile_perusahaan'); // Hapus tabel jika ada
    }
};

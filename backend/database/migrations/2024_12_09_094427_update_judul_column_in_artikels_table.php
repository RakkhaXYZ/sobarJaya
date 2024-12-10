<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateJudulColumnInArtikelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Mengubah kolom 'judul', 'deskripsi', dan 'waktu_kegiatan' agar bisa null
        Schema::table('table_artikel', function (Blueprint $table) {
            $table->string('judul')->nullable()->change();
            $table->text('deskripsi')->nullable()->change(); // Mengubah deskripsi ke TEXT
            $table->string('waktu_kegiatan')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Mengembalikan kolom 'judul', 'deskripsi', dan 'waktu_kegiatan' menjadi tidak bisa null
        Schema::table('table_artikel', function (Blueprint $table) {
            $table->string('judul')->nullable(false)->change();
            $table->string('deskripsi', 255)->nullable(false)->change(); // Mengembalikan deskripsi ke VARCHAR(255)
            $table->string('waktu_kegiatan')->nullable(false)->change();
        });
    }
}

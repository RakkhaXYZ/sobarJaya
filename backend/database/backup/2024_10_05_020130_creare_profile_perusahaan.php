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
            $table->unsignedBigInteger('team_id');
            $table->timestamps();
        });

        Schema::table('profile_perusahaan', function (Blueprint $table) {
            $table->foreign('team_id')
                ->references('id')->id('team')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('profile_perusahaan', function (Blueprint $table) {
            $table->dropForeign(['team_id']);
        });
        Schema::dropIfExists('profile_perusahaan');
    }
};

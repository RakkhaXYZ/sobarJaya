<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artikel extends Model
{
    use HasFactory;

    protected $table = 'table_artikel';

    protected $fillable = ['id', 'judul', 'foto', 'deskripsi', 'dibaca', 'waktu_kegiatan'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alat extends Model
{
    use HasFactory;

    // Jika nama tabel tidak sesuai dengan konvensi, tentukan nama tabelnya
    protected $table = 'alat';

    // Tentukan kolom yang bisa diisi secara massal
    protected $fillable = ['nama', 'harga', 'status'];
}

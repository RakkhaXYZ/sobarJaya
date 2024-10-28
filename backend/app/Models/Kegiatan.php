<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kegiatan extends Model
{
    use HasFactory;
    protected $table = "table_kegiatan";
    protected $fillable = ['id', 'judul', 'deskripsi'];


    public function FotoKegiatan()
    {
        return $this->belongsTo(FotoKegiatan::class);
    }
}

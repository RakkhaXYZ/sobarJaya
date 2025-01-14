<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OurTeam extends Model
{
    use HasFactory;

    protected $table = "our_team";

    protected $fillable = ["id", "nama_anggota", "divisi_anggota", "quetes", "foto"];


    public function ourTeam2()
    {

        return $this->hasMany(Ourteam2::class, 'ourteam_id');
    }
}

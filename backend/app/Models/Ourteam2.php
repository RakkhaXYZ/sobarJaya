<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ourteam2 extends Model
{
    use HasFactory;
    protected $table = "our_team2";
    protected $fillable = ['id', 'ourteam_id', 'foto_anggota'];

    public function Ourteam()
    {

        return $this->belongsTo(OurTeam::class, 'ourteam_id');
    }
}

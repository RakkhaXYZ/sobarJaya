<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfilePerusahaan extends Model
{
    use HasFactory;


    protected $table = 'profile_perusahaan';

    protected $fillable = ['id', 'visi', 'tentang_kami', 'foto_team', 'team_id', 'misi'];


    public function profile_perusahaan()
    {
        return $this->belongsTo(Team::class);
    }
}

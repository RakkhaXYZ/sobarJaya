<?php

namespace App\Http\Controllers;

use App\Models\Alat;
use App\Models\ProfilePerusahaan;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // Import Log di sini

class ProfileController extends Controller
{
    public function index()
    {
        $profile_perushaan = ProfilePerusahaan::with('team')->get();

        return response()->json($profile_perushaan);
    }

    public function store(Request $request)
    {
        // Tambahkan Log sebelum validasi
        Log::info('Data request:', $request->all());
        $request->validate([
            'visi' => 'required|string',
            'tentang_kami' => 'required|string|max:255',
            'foto_team' => 'required|image|mimes:jpeg,jpg,png|max:5000',
            'misi' => 'required|string',
            'deskripsi_team' => 'required|string'

        ]);

        $team = Team::create([
            'deskripsi_team' => $request->deskripsi_team

        ]);


        $fotoPath = null;
        if ($request->hasFile('foto_team')) {
            $fotoPath = $request->file('foto_team')->storeAs('public/team', $request->file('foto_team')->hashName());
        }

        // menyimpan ke tabel profile_perusahaan

        $profilePerushaan = ProfilePerusahaan::create([
            'visi' => $request->visi,
            'tentang_kami' => $request->tentang_kami,
            'foto_team' => $fotoPath ? basename($fotoPath) : null,
            'team_id' => $team->id,
            'misi' => $request->misi,
        ]);


        return response()->json([
            'message' => 'Data Profile Perusahaan dan team berhasil ditambah',
            'data' => $profilePerushaan
        ], 201);
    }

    public function show($id)
    {
        $profile_perushaan = ProfilePerusahaan::with('team')->find($id);

        if (!$profile_perushaan) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }

        return response()->json($profile_perushaan);
    }
}

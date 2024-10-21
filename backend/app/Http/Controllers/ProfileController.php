<?php

namespace App\Http\Controllers;


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
            $fotoPath = $request->file('foto_team')->storeAs('public/artikel', $request->file('foto_team')->hashName());
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


    public function update(Request $request, $id)
    {
        $request->validate([
            'visi' => 'required|string',
            'tentang_kami' => 'required|string',
            'foto_team' => 'nullable|image|mimes:jpeg,jpg,png|max:10000',
            'misi' => 'required|string',
            'deskripsi_team' => 'required|string',
        ]);

        Log::info('Validated request data:', $request->all());

        // ambil data profile berdasarkan ID
        $profilePerusahaan = ProfilePerusahaan::findOrFail($id);

        //ambil data team terkait dengan profile_perusahaan
        $team = Team::findOrFail($profilePerusahaan->team_id);
        $team->update([
            'deskripsi_team' => $request->deskripsi_team
        ]);

        // // Log team setelah update
        // Log::info('Data team setelah update:', $team->toArray());

        if ($request->hasFile('foto_team')) {
            // Hapus File lama jika ada 
            if ($profilePerusahaan->foto_team && file_exists(storage_path('app/public/team/' . $profilePerusahaan->foto_team))) {
                unlink(storage_path('app/public/team/' . $profilePerusahaan->foto_team));
            }

            $fotoPath = $request->file('foto_team')->storeAs('public/team', $request->file('foto_team')->hashName());
            $profilePerusahaan->foto_team = basename($fotoPath);
        }

        // simpan file baru 




        // update data ProfilePerusahaan

        $profilePerusahaan->update([
            'visi' => $request->visi,
            'tentang_kami' => $request->tentang_kami,
            'misi' => $request->misi,
            'foto_team' => $profilePerusahaan->foto_team,
        ]);

        // Log data profile setelah update
        // Log::info('Data profile setelah update:', $profilePerusahaan->toArray());




        return response()->json([
            'message' => 'Data Profile Perusahaan dan Team berhasil diperbarui',
            'data' => $profilePerusahaan
        ], 200);
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

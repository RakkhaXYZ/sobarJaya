<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OurTeam;


class OurTeamControllers extends Controller
{
    public function storeOurTeam(Request $request)
    {

        $request->validate([
            "nama_anggota" => "required|string|max:255",
            "divisi_anggota" => "required|string||max:255",
            "quetes" => "required|string",
            "foto" => "required|image",
            "foto_anggota" => "required|image",
        ]);

        $fotoPath = $request->file('foto')->storeAs('public/ourteam', $request->file('foto')->hashName());

        $fotoAnggotaPath = $request->file('foto_anggota')->storeAs('public/ourteam', $request->file('foto_anggota')->hashName());



        $ourteam = OurTeam::create([
            "nama_anggota" => $request->nama_anggota,
            "divisi_anggota" => $request->divisi_anggota,
            "quetes" => $request->quetes,
            "foto" => basename($fotoPath),
        ]);

        // simpan data ourteam2 yang terkait

        $ourteam->ourTeam2()->create([
            "foto_anggota" => basename($fotoAnggotaPath),
        ]);
        return response()->json([
            "message" => "Data our Team Berhasil disimpan",
            "data" => $ourteam->load('OurTeam2'),
        ]);
    }


    public function IndexTeam()
    {
        $ourteams = OurTeam::with('ourTeam2')->get();

        $ourteams->map(function ($ourteam) {

            $ourteam->foto = asset('storage/ourteam/' . $ourteam->foto);

            // konversi path foto untuk setiap item pada ourteam2

            $ourteam->ourTeam2->map(function ($ourteam2) {

                $ourteam2->foto_anggota = asset('storage/ourteam/' . $ourteam2->foto_anggota);

                return $ourteam2;
            });

            return $ourteam;
        });

        return response()->json(
            [
                'message' => "Data Berhasil diambil",
                'data' => $ourteams,

            ]
        );
    }
}

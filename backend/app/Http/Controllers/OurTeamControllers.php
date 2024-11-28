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

    public function ourteamTerbaru()
    {

        $newourteam = OurTeam::orderBy('created_at', 'desc')->take(3)->get();

        $newourteam->each(function ($ourteam) {
            $ourteam->foto = $ourteam->foto ? asset('storage/ourteam/' . $ourteam->foto) : null;
        });

        return response()->json([
            "message" => "Data Team terbaru Berhasil diambil",
            "data" => $newourteam,
        ]);
    }

    public function updateOurteam(Request $request, $id)
    {
        $request->validate([
            "nama_anggota" => "string|max:255",
            "divisi_anggota" => "string|max:255",
            "quetes" => "string",
            "foto" => "nullable|image",
            "foto_anggota" => "nullable|image"
        ]);

        // cari data ourteam berdasarkan id
        $ourteam = OurTeam::findOrFail($id);

        // Proses file foto jika ada dalam request
        if ($request->hasFile('foto')) {
            // hapus file lama jika ada 

            $oldFotoPath = public_path('storage/ourteam/' . $ourteam->foto);
            if ($ourteam->foto && file_exists($oldFotoPath)) {
                unlink($oldFotoPath);
            }

            // simpan file baru
            $fotoPath = $request->file('foto')->move(public_path('storage/ourteam'), $request->file('foto')->hashName());

            $ourteam->foto = basename($fotoPath);
        }

        $ourteam->update([
            "nama_anggota" => $request->nama_anggota,
            "divisi_anggota" => $request->divisi_anggota,
            "quetes" => $request->quetes,
        ]);



        if ($ourteam->ourTeam2) {
            foreach ($ourteam->ourTeam2 as $item) {
                if ($request->hasFile('foto_anggota')) {
                    $oldFotoAnggota = public_path('storage/ourteam/' . $item->foto_anggota);

                    if ($item->foto_anggota && file_exists($oldFotoAnggota)) {
                        unlink($oldFotoAnggota);
                    }

                    $fotoAnggotaPath = $request->file('foto_anggota')->move(public_path('storage/ourteam'), $request->file('foto_anggota')->hashName());
                    $item->foto_anggota = basename($fotoAnggotaPath);
                    $item->save();
                }
            }
        }

        return response()->json([
            "message" => "Data Ourteam Berhasil diperbarui",
            "data" => $ourteam->load('ourTeam2')
        ]);
    }


    public function destroyOurteam($id)
    {
        $ourteam = OurTeam::findOrFail($id);

        if ($ourteam->foto) {
            $oldFotoPath = public_path('storage/ourteam/' . $ourteam->foto);
            if (file_exists($oldFotoPath)) {
                unlink($oldFotoPath);
            }
        }

        // hapus semua file foto anggota terkait jika ada 
        if ($ourteam->ourTeam2) {
            foreach ($ourteam->ourTeam2 as $item) {
                if ($item->foto_anggota) {
                    $oldFotoPath = public_path('storage/ourteam/' . $item->foto_anggota);

                    if (file_exists($oldFotoPath)) {
                        unlink($oldFotoPath);
                    }
                }
                $item->delete();
            }

            $ourteam->delete();

            return response()->json([
                "message" => "Data Ourteam dan foto - foto terkait berhasil dihapus",
            ]);
        }
    }
}

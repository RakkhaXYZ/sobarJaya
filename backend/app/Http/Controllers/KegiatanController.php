<?php

namespace App\Http\Controllers;

use App\Models\FotoKegiatan;
use App\Models\Kegiatan;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function storeKegiatan(Request $request)
    {
        // Validasi input 
        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto' => 'required|array', // Validasi foto sebagai array
            'foto.*' => 'image|mimes:jpeg,jpg,png|max:5000', // Validasi setiap file gambar dalam array
        ]);

        // Simpan data kegiatan
        $kegiatan = Kegiatan::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
        ]);

        // Simpan setiap foto kegiatan ke tabel FotoKegiatan
        $fotoPaths = [];
        if ($request->hasFile('foto')) {
            foreach ($request->file('foto') as $foto) {
                // Gunakan hashName untuk menghasilkan nama file yang unik
                $fotoPath = $foto->storeAs('public/kegiatan', $foto->hashName());
                $fotoPaths[] = FotoKegiatan::create([
                    'kegiatan_id' => $kegiatan->id,
                    'foto' => basename($fotoPath), // Simpan nama file yang di-hash di database
                ]);
            }
        }

        // Berikan respons sukses
        return response()->json([
            'message' => "Data kegiatan dan foto-foto berhasil ditambah",
            'data' => [
                'kegiatan' => $kegiatan,
                'foto' => $fotoPaths,
            ]
        ], 201);
    }
}

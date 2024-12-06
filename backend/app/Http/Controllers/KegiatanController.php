<?php

namespace App\Http\Controllers;

use App\Models\FotoKegiatan;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

    public function IndexKegiatan()
    {

        $kegiatan = Kegiatan::with('fotoKegiatan')->get()->map(function ($kegiatan) {
            $kegiatan->FotoKegiatan = $kegiatan->fotoKegiatan->map(function ($foto) {
                return [
                    'id' => $foto->id,
                    'url' => asset('storage/kegiatan/' . $foto->foto),
                ];
            });
            return $kegiatan;
        });


        $kegiatan = Kegiatan::with('fotoKegiatan')->get()->map(function ($item) {
            $item->fotoUrls = $item->fotoKegiatan->map(function ($foto) {
                return asset('storage/kegiatan/' . $foto->foto);
            });

            return $item;
        });


        return response()->json([
            'message' => "semua data kegiatan berhasil diambil",
            'data' => $kegiatan,
        ]);
    }

    public function updateKegiatan(Request $request, $id)
    {
        // validasi input 

        $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'foto' => 'nullable|array', // Foto opsional untuk pembaruan
            'foto.*' => 'image|mimes:jpeg,jpg,png|max:5000',
            'deleted_foto' => 'nullable|array',
            'deleted_foto.*' => 'integer' // untuk id foto yang akan di hapus

        ]);

        $kegiatan = Kegiatan::findOrFail($id);

        $kegiatan->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
        ]);

        if ($request->has('deleted_foto')) {
            $deletedFotos = FotoKegiatan::whereIn('id', $request->deleted_foto)
                ->where('kegiatan_id', $kegiatan->id)
                ->get();

            // Hapus file dari storage

            foreach ($deletedFotos as $foto) {
                if (Storage::exists('public/kegiatan/' . $foto->foto)) {
                    Storage::delete('public/kegiatan/' . $foto->foto);
                }

                // Hapus foto dari database
                $foto->delete();
            }
        }


        // tambahkan foto baru jika ada 
        $fotoPaths = [];
        if ($request->hasFile('foto')) {
            foreach ($request->file('foto') as $foto) {
                // Hash Foto Untuk Menghasilkan nafile yang unik

                $fotoPath = $foto->storeAs('public/kegiatan', $foto->hashName());
                $fotoPaths[] = FotoKegiatan::create([
                    'kegiatan_id' => $kegiatan->id,
                    'foto' => basename($fotoPath)
                ]);
            }
        }


        return response()->json([
            'message' => "data Kegiatan dan foto foto berhasil diperbarui",
            'data' => [
                'kegiatan' => $kegiatan,
                'foto' => FotoKegiatan::where('kegiatan_id', $kegiatan->id)->get(),
            ]
        ], 200);
    }

    public function destroyKegiatan($id)
    {
        // Temukan data kegiatan berdasarkan ID 
        $kegiatan = Kegiatan::findOrFail($id);

        $fotos = FotoKegiatan::where('kegiatan_id', $kegiatan->id)->get();

        foreach ($fotos as $foto) {
            if (Storage::exists('public/kegiatan/' . $foto->foto)) {
                Storage::delete('public/kegiatan/' . $foto->foto);
            }

            // Hapus Foto dari database 
            $foto->delete();
        }

        // Hapus Data Kegiatan 
        $kegiatan->delete();

        return response()->json([
            'message' => "Data kegiatan dan foto terkait berhasil dihapus",

        ], 200);
    }
}

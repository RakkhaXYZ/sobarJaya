<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Cache;


class ArtikelController extends Controller
{
    public function storeArtikel(Request $request)
    {

        $request->validate([
            'judul' => 'required|string',
            'foto' => 'required|image|mimes:jpeg,jpg,png|max: 50000',
            'deskripsi' => 'required|string',
            'waktu_kegiatan' => 'required|string',
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->storeAs('public/artikel', $request->file('foto')->hashName());
        }

        $artikel = Artikel::create([
            'judul' => $request->judul,
            'foto' => $fotoPath ? basename($fotoPath) : null,
            'deskripsi' => $request->deskripsi,
            'waktu_kegiatan' => $request->waktu_kegiatan,

        ]);

        return response()->json([
            'message' => 'Data Artikel Berhasil ditambah',
            'data' => $artikel,
        ], 200);
    }


    public function IndexArtikel()
    {

        $artikels = Artikel::all();

        $artikels->map(function ($artikel) {
            $artikel->foto = asset('storage/artikel/' . $artikel->foto);

            return $artikel;
        });


        return response()->json($artikels);
    }


    public function getArtikelTerbaru()
    {
        $artikelTerbaru = Artikel::orderBy('created_at', 'desc')->take(3)->get();

        $artikelTerbaru->each(function ($artikel) {
            $artikel->foto = $artikel->foto ? asset('storage/artikel/' . $artikel->foto) : null;
        });

        // kembalikan respons dengan artikel terbaru dan url foto

        return response()->json([
            'message' => 'Data Atikel Terbaru',
            'data' => $artikelTerbaru,
        ], 200);
    }

    public function getArtikelId($id)
    {

        $artikel = Artikel::find($id);

        if (!$artikel) {
            return response()->json([
                'message' => "Data tidak ditemukan"
            ], 404);
        }

        // tambah logika untuk menambahkan jumlah dibaca

        $key = "artikel_dibaca_{$id}_" . request()->ip();
        if (!Cache::has($key)) {
            $artikel->increment('dibaca');
            Cache::put($key, true, now()->addMinutes(1));
        }

        $artikel->foto = asset('storage/artikel/' . $artikel->foto);


        return response()->json([
            'message' => "artikel dengan id ditemukan",
            'data' => $artikel,
        ], 200);
    }
    public function getArtikelId2($id)
    {

        $artikel = Artikel::find($id);

        if (!$artikel) {
            return response()->json([
                'message' => "Data tidak ditemukan"
            ], 404);
        }

        // tambah logika untuk menambahkan jumlah dibaca


        $artikel->foto = asset('storage/artikel/' . $artikel->foto);


        return response()->json([
            'message' => "artikel dengan id ditemukan",
            'data' => $artikel,
        ], 200);
    }

    public function getArtikel5()
    {
        $artikelTerbaru = Artikel::orderBy('created_at', 'desc')->take(5)->get();

        $artikelTerbaru->each(function ($artikel) {
            $artikel->foto = $artikel->foto ? asset('storage/artikel/' . $artikel->foto) : null;
        });

        return response()->json($artikelTerbaru);
    }


    public function searchArtikel(Request $request)
    {

        $query = $request->input('query');
        $artikels = Artikel::where('judul', 'like', '%' . $query . '%')
            ->orWhere('deskripsi', 'like', '%' . $query . '%')
            ->get();


        foreach ($artikels as $artikel) {
            $artikel->foto = asset('storage/artikel/' . $artikel->foto);
        }

        return response()->json($artikels);
    }

    public function update(Request $request, $id)
    {
        // Validasi data, hanya foto yang opsional
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'waktu_kegiatan' => 'required|string',
            'foto' => 'nullable|image|max:2048', // Foto boleh kosong
        ]);

        // Temukan artikel berdasarkan ID
        $artikel = Artikel::findOrFail($id);

        // Jika ada foto baru, hapus foto lama dan simpan foto baru
        if ($request->hasFile('foto')) {
            // Hapus foto lama jika ada
            if ($artikel->foto && file_exists(public_path('storage/' . $artikel->foto))) {
                unlink(public_path('storage/' . $artikel->foto));
            }

            // Simpan foto baru
            $fotoPath = $request->file('foto')->store('artikel', 'public');
            $fileName = basename($fotoPath);  // Mengambil hanya nama file tanpa folder
            $validated['foto'] = $fileName;
        } else {
            // Jika tidak ada foto baru, biarkan foto lama tetap digunakan
            $validated['foto'] = $artikel->foto;
        }

        // Update artikel dengan data yang sudah divalidasi
        $artikel->update($validated);

        return response()->json(['message' => 'Artikel berhasil diperbarui'], 200);
    }






    public function destroyArtikel($id)
    {
        $artikel = Artikel::find($id);

        if (!$artikel) {
            return response()->json([
                'message' => 'Data Artikel tidak ditemukan',
            ], 404);
        }

        if ($artikel->foto) {
            $fotoPath = storage_path('app/public/artikel/' . $artikel->foto);
            if ($artikel->foto) {
                unlink($fotoPath);
            }
        }
        $artikel->delete();

        return response()->json([
            'message' => 'Data Artikel berhasil dihapus',
        ], 200);
    }
}

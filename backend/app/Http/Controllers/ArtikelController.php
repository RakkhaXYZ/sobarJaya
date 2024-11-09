<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;

use function PHPSTORM_META\map;

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
}

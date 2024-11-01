<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;

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
}

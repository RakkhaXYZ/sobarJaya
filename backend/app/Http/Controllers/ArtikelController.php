<?php

namespace App\Http\Controllers;

use App\Models\Artikel;
use Illuminate\Http\Request;

use function PHPSTORM_META\map;
use Illuminate\Support\Facades\Storage;

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

    public function updateArtikel(Request $request, $id)
    {
        $request->validate([
            'judul' => 'required|string',
            'foto' => 'nullable|image|mimes:jpeg,jpg,png|max:50000',
            'deskripsi' => 'required|string',
            'waktu_kegiatan' => 'required|string',
        ]);

        $artikel = Artikel::findOrFail($id);

        if ($request->hasFile('foto')) {
            if ($artikel->foto && Storage::exists('public/artikel/' . $artikel->foto)) {
                Storage::delete('public/artikel/' . $artikel->foto);
            }

            $fotoPath = $request->file('foto')->storeAs('public/artikel', $request->file('foto')->hashName());
            $artikel->foto = basename($fotoPath);
        }

        $artikel->judul = $request->judul;
        $artikel->deskripsi = $request->deskripsi;
        $artikel->waktu_kegiatan = $request->waktu_kegiatan;
        $artikel->save();

        return response()->json([
            'message' => 'Data Artikel Berhasil diperbarui',
            'data' => $artikel,
        ], 200);
    
    }

public function destroyArtikel($id){
    $artikel = Artikel::find($id);

    if (!$artikel){
        return response()->json([
            'message' => 'Data Artikel tidak ditemukan',
        ], 404);
    }

    if ($artikel->foto){
        $fotoPath = storage_path('app/public/artikel' . $artikel->foto);
        unlink($fotoPath);
    }
    $artikel->delete();

return response()->json([
    'message' => 'Data Artikel berhasil dihapus',
], 200);


}

}

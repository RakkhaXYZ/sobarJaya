<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Models\Sejarah;
use App\Models\Artikel;
use App\Models\Kegiatan;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/kegiatan', function () {
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
    return view('getKegiatan', compact('kegiatan'));
});
Route::get('/updateKegiatan/{id}', function ($id) {
    $kegiatan = Kegiatan::with('fotoKegiatan')->findOrFail($id);


    $kegiatan->fotoUrls = $kegiatan->fotoKegiatan->map(function ($foto) {
        return [
            "id" => $foto->id,
            "url" => asset('storage/kegiatan/' . $foto->foto)
        ];
    });
    return view('updateKegiatan', compact('kegiatan'));
});


// artikel

Route::get('/artikel', function () {
    return view('artikel');
});
Route::get('/getArtikel', function () {
    $artikel = Artikel::all();
    return view('getArtikel', compact('artikel'));
});
Route::get('/formUpdateArtikel/{id}', function ($id) {
    $artikel = Artikel::findOrFail($id);
    return view('updateArtikel', compact('artikel'));
})->name('artikel.edit');


Route::get('/ourteam', function () {
    return view('ourteam');
});
Route::get('/admin', function () {
    return view('createAdmin');
});
Route::get('/LoginAdmin', function () {
    return view('LoginAdmin');
});


Route::get('/updateSejarah/{id}', function ($id) {

    $sejarah = Sejarah::findOrFail($id);
    return view('updateSejarah', compact('sejarah'));
});
Route::get('/getSejarah/{$id}', function ($id) {

    $sejarah = Sejarah::findOrFail($id);
    return view('sejarah', compact('sejarah'));
});
Route::get('/sejarah', function () {

    $sejarah = Sejarah::all();
    return view('getSejarah', compact('sejarah'));
});


// LOGIN ADMIN
Route::post('/admin/login', [AdminController::class, 'login']);

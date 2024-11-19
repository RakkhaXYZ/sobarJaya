<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Models\Sejarah;
use App\Models\Artikel;

Route::get('/', function () {
    return view('welcome');
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

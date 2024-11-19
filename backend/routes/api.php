<?php

use App\Http\Controllers\AlatController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SejarahController;
use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\KegiatanController;
use App\Http\Controllers\OurTeamControllers;
use App\Http\Controllers\AdminController;
use App\Models\Artikel;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan semua data alat
// Route::middleware(['cors'])->group(function () {
//   Route::get('/alat', [AlatController::class, 'index']);
// });
Route::get('/alat', [AlatController::class, 'index']);
Route::post('/addAlat', [AlatController::class, 'store']);

// Profile perusahaan
Route::post('/storeProfile', [ProfileController::class, 'store']);
Route::get('/Profile', [ProfileController::class, 'index']);
Route::get('/Profile/{id}', [ProfileController::class, 'show']);
Route::put('/updateProfile/{id}', [ProfileController::class, 'update']);


// sejarah 
Route::post('/storeSejarah', [SejarahController::class, 'storeSejarah']);
Route::put('/updateSejarah/{id}', [SejarahController::class, 'updateSejarah'])->name('updateSejarah');
Route::get('/showSejarah/{id}', [SejarahController::class, 'sejarahShow']);



// artikel 
Route::post('/storeArtikel', [ArtikelController::class, 'storeArtikel']);
Route::put('/updateArtikel/{id}', [ArtikelController::class, 'updateArtikel'])->name('artikel.update');
Route::get('/Artikel', [ArtikelController::class, 'IndexArtikel']);
Route::get('/NewArtikel', [ArtikelController::class, 'getArtikelTerbaru']);
Route::get('/artikel/{id}', [ArtikelController::class, 'getArtikelId']);
Route::get('/getArtikel5', [ArtikelController::class, 'getArtikel5']);
Route::get('/searchArtikel', [ArtikelController::class, 'searchArtikel']);


// kegiatan 
Route::post('/storeKegiatan', [KegiatanController::class, 'storeKegiatan']);
Route::get('/kegiatan', [KegiatanController::class, 'IndexKegiatan']);


// Our Team 

Route::post('/storeOurTeam', [OurTeamControllers::class, 'storeOurTeam']);
Route::get('/ourteam', [OurTeamControllers::class, 'IndexTeam']);
Route::get('/newOurteam', [OurTeamControllers::class, 'ourteamTerbaru']);


// Admin
Route::post('/admin/login', [AdminController::class, 'login']);
Route::middleware(['auth:sanctum'])->post('/admin/logout', [AdminController::class, 'logout']);
Route::post('/adminCreate', [AdminController::class, 'store']);

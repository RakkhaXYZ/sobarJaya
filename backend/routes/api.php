<?php

use App\Http\Controllers\AlatController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SejarahController;
use App\Models\ProfilePerusahaan;

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
Route::get('/showSejarah/{id}', [SejarahController::class, 'sejarahShow']);

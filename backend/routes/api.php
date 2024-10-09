<?php

use App\Http\Controllers\AlatController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan semua data alat
// Route::middleware(['cors'])->group(function () {
//   Route::get('/alat', [AlatController::class, 'index']);
// });

Route::get('/alat', [AlatController::class, 'index']);
Route::post('/addAlat', [AlatController::class, 'store']);


Route::post('/storeProfile', [ProfileController::class, 'store']);
Route::get('/Profile', [ProfileController::class, 'index']);

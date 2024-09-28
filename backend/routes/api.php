<?php

use App\Http\Controllers\AlatController;
use Illuminate\Support\Facades\Route;

// Route untuk mendapatkan semua data alat
// Route::middleware(['cors'])->group(function () {
//   Route::get('/alat', [AlatController::class, 'index']);
// });

Route::get('/alat', [AlatController::class, 'index']);

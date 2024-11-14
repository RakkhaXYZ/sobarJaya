<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/artikel', function () {
    return view('artikel');
});
Route::get('/ourteam', function () {
    return view('ourteam');
});
Route::get('/admin', function () {
    return view('createAdmin');
});


// LOGIN ADMIN
Route::post('/admin/login', [AdminController::class, 'login']);

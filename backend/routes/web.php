<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/artikel', function () {
    return view('artikel');
});
Route::get('/ourteam', function () {
    return view('ourteam');
});

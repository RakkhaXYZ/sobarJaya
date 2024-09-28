<?php

namespace App\Http\Controllers;

use App\Models\Alat;
use Illuminate\Http\Request;

class AlatController extends Controller
{
    public function index()
    {
        $alat = Alat::all(); // Mengambil semua data alat dari database
        return response()->json($alat); // Mengembalikan data dalam format JSON
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Pesan;

use Illuminate\Http\Request;

class PesanController extends Controller
{
    public function storePesan(Request $request)
    {

        $request->validate([
            "email" => "required|string",
            "subject" => "required|string",
            "description" => "required|string"
        ]);

        $pesan = Pesan::create([
            'email' => $request->email,
            'subject' => $request->subject,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => "Pesan Telah Dikirim Ke admin",
            'data' => $pesan,
        ]);
    }

    public function getPesan()
    {

        $pesan = Pesan::all();

        return response()->json([
            "message" => "Data Pesan Ditemukan",
            "data" => $pesan

        ]);
    }
}

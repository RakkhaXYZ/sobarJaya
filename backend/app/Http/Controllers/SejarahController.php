<?php

namespace App\Http\Controllers;

use App\Models\Sejarah;
use Illuminate\Http\Request;


class SejarahController extends Controller
{
    public function storeSejarah(Request $request)
    {
        $request->validate([
            'sejarah' => 'required|string',
            'foto' => 'required|image|mimes: jpeg,jpg,png|max:5000',
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->storeAs('public/sejarah', $request->file('foto')->hashName());
        }

        $sejarah = Sejarah::create([
            'sejarah' => $request->sejarah,
            'foto' => $fotoPath ? basename($fotoPath) : null,
        ]);

        return response()->json([
            'message' => 'Data sejarah telah ditambahkan',
            'data' => $sejarah,
        ], 201);
    }


    public function sejarahShow($id)
    {
        $sejarah = Sejarah::find($id);

        if (!$sejarah) {
            return response()->json([
                "message" => "data tidak ditemukan",
            ], 404);
        }

        $sejarah->foto = asset('storage/sejarah/' . $sejarah->foto);
        return response()->json($sejarah);
    }
}

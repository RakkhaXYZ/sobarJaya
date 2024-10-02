<?php

namespace App\Http\Controllers;

use App\Models\Alat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AlatController extends Controller
{
    public function index()
    {
        $alat = Alat::all(); // Mengambil semua data alat dari database

        foreach ($alat as $item) {
            $item->image_url = url('storage/alat/' . $item->image);
        }
        return response()->json($alat); // Mengembalikan data dalam format JSON
    }

    public function store(Request $request)
    {

        $request->validate([
            'nama' => 'required|string|max:255',
            'harga' => 'required|integer',
            'status' => 'required|string|max:59',
            'image' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        // Inisialisasi variabel untuk menyimpan nama gambar
        $fotoPath = null;

        // Cek apakah ada file gambar yang di-upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            // Simpan gambar di folder storage dan dapatkan path-nya
            $fotoPath = $image->storeAs('public/alat/', $image->hashName());
            $imageName = $image->hashName();
        } else {
            // Jika tidak ada gambar, kosongkan nama gambar
            $imageName = null;
        }

        $alat = new Alat([
            'nama' => $request->nama,
            'harga' => $request->harga,
            'status' => $request->status,
            'image' => $imageName,

        ]);

        $alat->save();

        return response()->json([
            'message' => 'Data Alat Berhasil Ditambah',
            'data' => $alat
        ], 201);
    }
}

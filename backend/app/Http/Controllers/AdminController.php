<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;






class AdminController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        $admin = Admin::where('email', $request->email)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {

            $token = $admin->createToken('admin-token')->plainTextToken;
            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'admin' => $admin,
                'token' => $token
            ]);
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Invalid credintial'
        ]);
    }



    public function logout(Request $request)
    {
        $admin = Auth::guard('sanctum')->user();

        if (!$admin) {
            return response()->json([
                'status' => 'error',
                'message' => 'anda belum login',
            ], 401);
        }

        // Menghapus semua token pengguna saat ini
        $admin->tokens()->delete();
        return response()->json([
            'status' => 'success',
            'message' => 'Logout Berhasil',
        ]);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required|string|max:225',
            'email' => 'required|email|unique:admin,email',
            'password' => 'required|string|min:6',
            'foto' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:5000',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors(),
            ], 422);
        }

        $hashesPassword = Hash::make($request->password);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->storeAs('public/admin', $request->file('foto')->hashName());
        }

        $admin = Admin::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'password' => $hashesPassword,
            'foto' => $fotoPath
        ]);

        return response()->json([
            'status' => "success",
            'message' => 'Admin Created Successfully',
            'data' => $admin,
        ], 201);
    }
}

<!-- resources/views/kegiatan/create_kegiatan.blade.php -->
@extends('layouts.app')

@section('content')
<div class="container">
    <h2>Tambah Kegiatan</h2>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                
                    <a class="nav-link" href="{{ url('/kegiatan') }}">Data Kegiatan</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Tampilkan pesan sukses jika ada -->
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <!-- Form untuk tambah kegiatan -->
    <form action="{{ url('api/storeKegiatan') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <!-- Judul -->
        <div class="form-group mb-3">
            <label for="judul">Judul Kegiatan</label>
            <input type="text" class="form-control @error('judul') is-invalid @enderror" name="judul" id="judul" value="{{ old('judul') }}" required>
            @error('judul')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        <!-- Deskripsi -->
        <div class="form-group mb-3">
            <label for="deskripsi">Deskripsi</label>
            <textarea class="form-control @error('deskripsi') is-invalid @enderror" name="deskripsi" id="deskripsi" rows="4" required>{{ old('deskripsi') }}</textarea>
            @error('deskripsi')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        <!-- Foto Kegiatan -->
        <div class="form-group mb-3">
            <label for="foto">Foto Kegiatan</label>
            <input type="file" class="form-control @error('foto') is-invalid @enderror" name="foto[]" id="foto" multiple required>
            @error('foto')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
            @error('foto.*')
                <span class="invalid-feedback">{{ $message }}</span>
            @enderror
        </div>

        <!-- Tombol Submit -->
        <button type="submit" class="btn btn-primary">Tambah Kegiatan</button>
    </form>
</div>
@endsection

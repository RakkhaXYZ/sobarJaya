@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2>Update Artikel</h2>
    <form action="{{ url('/api/updateArtikel', $artikel->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <!-- Judul Artikel -->
        <div class="form-group">
            <label for="judul">Judul Artikel</label>
            <input type="text" name="judul" id="judul" class="form-control" value="{{ old('judul', $artikel->judul) }}" required>
            @error('judul')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Deskripsi -->
        <div class="form-group mt-3">
            <label for="deskripsi">Deskripsi</label>
            <textarea name="deskripsi" id="deskripsi" class="form-control" rows="5" required>{{ old('deskripsi', $artikel->deskripsi) }}</textarea>
            @error('deskripsi')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Waktu Kegiatan -->
        <div class="form-group mt-3">
            <label for="waktu_kegiatan">Waktu Kegiatan</label>
            <input type="text" name="waktu_kegiatan" id="waktu_kegiatan" class="form-control" value="{{ old('waktu_kegiatan', $artikel->waktu_kegiatan) }}" required>
            @error('waktu_kegiatan')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Foto Lama -->
        <div class="form-group mt-3">
            <label for="foto_lama">Foto Lama</label>
            <br>
            @if ($artikel->foto)
                <img src="{{ asset('storage/artikel/' . $artikel->foto) }}" alt="Foto Artikel" class="img-thumbnail" width="200">
            @else
                <p>Tidak ada foto</p>
            @endif
        </div>

        <!-- Upload Foto Baru -->
        <div class="form-group mt-3">
            <label for="foto">Upload Foto Baru (Opsional)</label>
            <input type="file" name="foto" id="foto" class="form-control">
            @error('foto')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Tombol Update -->
        <button type="submit" class="btn btn-primary mt-4">Update Artikel</button>
    </form>
</div>
@endsection

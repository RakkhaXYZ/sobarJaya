@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2>Update Profile Perusahaan</h2>
    <form action="{{ route('profile-perusahaan.update', $profilePerusahaan->id) }}" method="POST" enctype="multipart/form-data">

        @csrf
        @method('PUT')

        <!-- Visi -->
        <div class="form-group mt-3">
            <label for="visi">Visi</label>
            <textarea name="visi" id="visi" class="form-control" rows="3" required>{{ old('visi', $profilePerusahaan->visi) }}</textarea>
            @error('visi')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Tentang Kami -->
        <div class="form-group mt-3">
            <label for="tentang_kami">Tentang Kami</label>
            <textarea name="tentang_kami" id="tentang_kami" class="form-control" rows="3" required>{{ old('tentang_kami', $profilePerusahaan->tentang_kami) }}</textarea>
            @error('tentang_kami')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Misi -->
        <div class="form-group mt-3">
            <label for="misi">Misi</label>
            <textarea name="misi" id="misi" class="form-control" rows="3" required>{{ old('misi', $profilePerusahaan->misi) }}</textarea>
            @error('misi')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Deskripsi Team -->
        <div class="form-group mt-3">
            <label for="deskripsi_team">Deskripsi Team</label>
            <textarea name="deskripsi_team" id="deskripsi_team" class="form-control" rows="3" required>{{ old('deskripsi_team', $team->deskripsi_team) }}</textarea>
            @error('deskripsi_team')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Foto Team -->
        <div class="form-group mt-3">
            <label for="foto_team">Foto Team</label>
            @if ($profilePerusahaan->foto_team)
                <div class="mb-3">
                    <img src="{{ asset('storage/team/' . $profilePerusahaan->foto_team) }}" alt="Foto Team" class="img-thumbnail" width="200">
                </div>
            @else
                <p>Tidak ada foto saat ini</p>
            @endif
            <input type="file" name="foto_team" id="foto_team" class="form-control">
            @error('foto_team')
                <small class="text-danger">{{ $message }}</small>
            @enderror
        </div>

        <!-- Tombol Submit -->
        <button type="submit" class="btn btn-primary mt-4">Update Profile</button>
    </form>
</div>
@endsection

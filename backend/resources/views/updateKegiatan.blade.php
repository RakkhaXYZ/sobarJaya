@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="text-center">Update Data Kegiatan</h2>

    <form action="{{ url('/api/updateKegiatan', $kegiatan->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="mb-3">
            <label for="judul" class="form-label">Judul</label>
            <input type="text" name="judul" id="judul" class="form-control" value="{{ old('judul', $kegiatan->judul) }}" required>
        </div>

        <div class="mb-3">
            <label for="deskripsi" class="form-label">Deskripsi</label>
            <textarea name="deskripsi" id="deskripsi" class="form-control" rows="5" required>{{ old('deskripsi', $kegiatan->deskripsi) }}</textarea>
        </div>

        <div class="mb-3">
            <label for="foto" class="form-label">Foto Baru (Opsional)</label>
            <input type="file" name="foto[]" id="foto" class="form-control" accept="image/*" multiple>
            <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti foto.</small>
        </div>

        <div class="mb-3">
            <p>Foto Lama:</p>
            <div class="d-flex flex-wrap">
                @foreach ($kegiatan->fotoUrls as $foto)
                    <div class="me-2 mb-2">
                        <img src="{{ $foto['url'] }}" alt="Foto Kegiatan" class="img-thumbnail" style="width: 100px; height: 100px;">
                        <div class="form-check mt-2">
                            <input type="checkbox" name="deleted_foto[]" value="{{ $foto['id'] }}" class="form-check-input" id="foto-{{ $foto['id'] }}">
                            <label class="form-check-label" for="foto-{{ $foto['id'] }}">Hapus</label>
                        </div>
                    </div>
                @endforeach
            </div>
            <small class="form-text text-muted">Centang foto yang ingin dihapus.</small>
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>
</div>
@endsection

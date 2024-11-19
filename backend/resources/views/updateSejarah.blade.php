
@extends('layouts.app')

@section('content')
<body class="bg-light">
    <div class="container mt-5">
        <div class="card shadow">
            <div class="card-header bg-primary text-white">
                <h4 class="text-center">Update Sejarah</h4>
            </div>
            <div class="card-body">
                <!-- Form -->
                <form action="{{ route('updateSejarah', $sejarah->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf <!-- CSRF Token -->
                    @method('PUT') <!-- Method Spoofing -->
                    
                    <div class="mb-3">
                        <label for="sejarah" class="form-label">Sejarah</label>
                        <textarea name="sejarah" id="sejarah" class="form-control" rows="5" placeholder="Masukkan sejarah" required>{{ old('sejarah', $sejarah->sejarah) }}</textarea>
                    </div>
                    
                    <div class="mb-3">
                        <label for="foto" class="form-label">Foto (Opsional)</label>
                        <input type="file" name="foto" id="foto" class="form-control" accept="image/*">
                        <small class="form-text text-muted">Kosongkan jika tidak ingin mengganti foto.</small>
                    </div>
                    
                    <div class="mb-3">
                        @if ($sejarah->foto)
                            <p>Foto Lama:</p>
                            <img src="{{ asset('storage/sejarah/' . $sejarah->foto) }}" alt="Foto Lama" class="img-thumbnail" width="200">
                        @else
                            <p class="text-muted">Tidak ada foto sebelumnya.</p>
                        @endif
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-100">Update</button>
                </form>
            </div>
        </div>
    </div>

    <!-- Tambahkan JavaScript Bootstrap (Opsional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
@endsection
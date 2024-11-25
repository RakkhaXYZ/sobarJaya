<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Anggota Tim</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Tambah Anggota Tim</h2>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    
                        <a class="nav-link" href="{{ url('/getOurteam') }}">Data Ourteam</a>
                    </li>
                </ul>
            </div>
        </nav>
        <form action="{{ url('api/storeOurTeam') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-3">
                <label for="nama_anggota" class="form-label">Nama Anggota</label>
                <input type="text" class="form-control" id="nama_anggota" name="nama_anggota" required>
            </div>
            <div class="mb-3">
                <label for="divisi_anggota" class="form-label">Divisi Anggota</label>
                <input type="text" class="form-control" id="divisi_anggota" name="divisi_anggota" required>
            </div>
            <div class="mb-3">
                <label for="quetes" class="form-label">Quotes</label>
                <textarea class="form-control" id="quetes" name="quetes" rows="3" required></textarea>
            </div>
            <div class="mb-3">
                <label for="foto" class="form-label">Foto Formal</label>
                <input type="file" class="form-control" id="foto" name="foto" accept="image/*" required>
            </div>
            <div class="mb-3">
                <label for="foto_anggota" class="form-label">Foto Informal</label>
                <input type="file" class="form-control" id="foto_anggota" name="foto_anggota" accept="image/*" required>
            </div>
            <button type="submit" class="btn btn-primary">Tambah Anggota Tim</button>
        </form>
    </div>
</body>
</html>

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
                <label for="foto" class="form-label">Foto</label>
                <input type="file" class="form-control" id="foto" name="foto" accept="image/*" required>
            </div>
            <button type="submit" class="btn btn-primary">Tambah Anggota Tim</button>
        </form>
    </div>
</body>
</html>

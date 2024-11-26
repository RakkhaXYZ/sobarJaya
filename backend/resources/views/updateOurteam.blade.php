<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update OurTeam</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            padding: 20px;
        }
        .form-container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .form-group img {
            margin-top: 10px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2 class="text-center mb-4">Update OurTeam</h2>
        <form action="{{ url('api/updateOurteam/'. $ourteam->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <!-- Nama Anggota -->
            <div class="form-group mb-3">
                <label for="nama_anggota" class="form-label">Nama Anggota</label>
                <input type="text" name="nama_anggota" id="nama_anggota" class="form-control" value="{{ old('nama_anggota', $ourteam->nama_anggota) }}" required>
            </div>

            <!-- Divisi Anggota -->
            <div class="form-group mb-3">
                <label for="divisi_anggota" class="form-label">Divisi Anggota</label>
                <input type="text" name="divisi_anggota" id="divisi_anggota" class="form-control" value="{{ old('divisi_anggota', $ourteam->divisi_anggota) }}" required>
            </div>

            <!-- Quotes -->
            <div class="form-group mb-3">
                <label for="quetes" class="form-label">Quotes</label>
                <textarea name="quetes" id="quetes" class="form-control" rows="3" required>{{ old('quetes', $ourteam->quetes) }}</textarea>
            </div>

            <!-- Foto -->
            <div class="form-group mb-3">
                <label for="foto" class="form-label">Foto</label>
                <input type="file" name="foto" id="foto" class="form-control">
                @if ($ourteam->foto)
                    <div class="mt-2">
                        <p>Foto saat ini:</p>
                        <img src="{{ asset('storage/ourteam/' . $ourteam->foto) }}" alt="Foto" width="100">
                    </div>
                @endif
            </div>

            <!-- Foto Anggota -->
         <!-- Foto Anggota -->
<div class="form-group mb-3">
  <label for="foto_anggota" class="form-label">Foto Anggota</label>
  <input type="file" name="foto_anggota" id="foto_anggota" class="form-control">
  @if ($ourteam->ourTeam2 && $ourteam->ourTeam2->isNotEmpty())
      <div class="mt-2">
          <p>Foto Anggota saat ini:</p>
          @foreach ($ourteam->ourTeam2 as $item)
              <img src="{{ asset('storage/ourteam/' . $item->foto_anggota) }}" alt="Foto Anggota" width="100">
          @endforeach
      </div>
  @endif
</div>


            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

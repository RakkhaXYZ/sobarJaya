<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            padding: 20px;
        }
        .table-container {
            max-width: 1000px;
            margin: auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .table img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="table-container">
        <h2 class="text-center mb-4">Our Team</h2>
        <table class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th>No</th>
                    <th>Nama Anggota</th>
                    <th>Divisi</th>
                    <th>Quotes</th>
                    <th>Foto</th>
                    <th>Foto Anggota</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($ourteam as $index => $member)
                    <tr>
                        <td>{{ $index + 1 }}</td>
                        <td>{{ $member->nama_anggota }}</td>
                        <td>{{ $member->divisi_anggota }}</td>
                        <td>{{ $member->quetes }}</td>
                        <td>
                            @if ($member->foto)
                                <img src="{{ asset('storage/ourteam/' . $member->foto) }}" alt="Foto">
                            @else
                                <span>-</span>
                            @endif
                        </td>
                        <td>
                            @if ($member->ourTeam2->isNotEmpty())
                                @foreach ($member->ourTeam2 as $fotoAnggota)
                                    <img src="{{ asset('storage/ourteam/' . $fotoAnggota->foto_anggota) }}" alt="Foto Anggota">
                                @endforeach
                            @else
                                <span>-</span>
                            @endif
                        </td>
                        <td>
                            <a href="{{ url('/formUpdate/'. $member->id) }}" class="btn btn-sm btn-warning">Edit</a>
                            <form action="{{ url('/api/destroyOurteam', $member->id) }}" method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Apakah Anda yakin ingin menghapus data ini?')">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

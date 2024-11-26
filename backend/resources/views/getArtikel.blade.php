@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2>Daftar Artikel</h2>
    <table class="table table-bordered table-striped mt-3">
        <thead class="table-dark">
            <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Foto</th>
                <th>Deskripsi</th>
                <th>Waktu Kegiatan</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($artikel as $index => $artikel)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $artikel->judul }}</td>
                    <td>
                        @if ($artikel->foto)
                            <img src="{{ asset('storage/artikel/'. $artikel->foto) }}" alt="Foto Artikel" class="img-thumbnail" width="100">
                        @else
                            <p>Tidak ada foto</p>
                        @endif
                    </td>
                    <td>{{ Str::limit($artikel->deskripsi, 50) }}</td>
                    <td>{{ $artikel->waktu_kegiatan }}</td>
                    <td>
                        <a href="{{ route('artikel.edit', $artikel->id) }}" class="btn btn-primary btn-sm">Edit</a>
                        <form action="{{ url('api/destroyArtikel/'. $artikel->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Apakah Anda yakin ingin menghapus artikel ini?')">Hapus</button>
                        </form>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="6" class="text-center">Tidak ada data artikel.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection

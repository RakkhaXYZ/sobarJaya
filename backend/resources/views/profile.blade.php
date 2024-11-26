@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2>Daftar Profile Perusahaan</h2>
    <table class="table table-bordered mt-4">
        <thead class="thead-dark">
            <tr>
                <th>No</th>
                <th>Visi</th>
                <th>Tentang Kami</th>
                <th>Misi</th>
                <th>Deskripsi Team</th>
                <th>Foto Team</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($profilePerusahaan as $index => $profile)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $profile->visi }}</td>
                    <td>{{ $profile->tentang_kami }}</td>
                    <td>{{ $profile->misi }}</td>
                    <td>{{ $profile->team->deskripsi_team ?? 'Belum tersedia' }}</td>
                    <td>
                        @if ($profile->foto_team)
                            <img src="{{ asset('storage/team/' . $profile->foto_team) }}" alt="Foto Team" class="img-thumbnail" width="100">
                        @else
                            <p>Tidak ada foto</p>
                        @endif
                    </td>
                    <td>
                        <a href="#" class="btn btn-info btn-sm">Detail</a>
                        <a href="{{ url('updateProfile/'. $profile->id) }}" class="btn btn-warning btn-sm">Edit</a>
                        <form action="#" method="POST" style="display: inline;">
                           
                           
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Yakin ingin menghapus data ini?')">Hapus</button>
                        </form>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="7" class="text-center">Tidak ada data tersedia.</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection

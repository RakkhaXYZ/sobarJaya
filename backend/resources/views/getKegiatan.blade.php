@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="text-center">Data Kegiatan</h2>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              
                  <a class="nav-link" href="{{ url('/getOurteam') }}">Data Kegiatan</a>
              </li>
          </ul>
      </div>
  </nav>
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
                <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Deskripsi</th>
                    <th>Foto</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($kegiatan as $index => $item)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $item->judul }}</td>
                    <td>{{ $item->deskripsi }}</td>
                    <td>
                        @if ($item->fotoUrls && count($item->fotoUrls) > 0)
                            <div class="d-flex flex-wrap">
                                @foreach ($item->fotoUrls as $fotoUrl)
                                    <div class="me-2 mb-2">
                                        <img src="{{ $fotoUrl }}" alt="Foto Kegiatan" class="img-thumbnail" style="width: 100px; height: 100px;">
                                    </div>
                                @endforeach
                            </div>
                        @else
                            <p class="text-muted">Tidak ada foto</p>
                        @endif
                    </td>
                    <td>
                        <!-- Tombol Update -->
                        <a href="{{ url('/updateKegiatan', $item->id) }}" class="btn btn-warning btn-sm mb-2">Update</a>
                        
                        <!-- Tombol Hapus -->
                        <form action="{{ url('/api/destroyKegiatan', $item->id) }}" method="POST" onsubmit="return confirm('Apakah Anda yakin ingin menghapus kegiatan ini?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm">Hapus</button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr>
                    <td colspan="5" class="text-center">Tidak ada data kegiatan</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>
@endsection

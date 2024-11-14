@extends('layouts.app')

@section('content')
<div class="container">
    <h2 class="mb-4">Create New Admin</h2>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                
                    <a class="nav-link" href="{{ url('/LoginAdmin') }}">Login Admin</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Display errors if any -->
    @if($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ url('api/adminCreate')}}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" name="nama" id="nama" class="form-control" value="{{ old('nama') }}" required>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" value="{{ old('email') }}" required>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" required>
        </div>

        <div class="form-group">
            <label for="foto">Foto</label>
            <input type="file" name="foto" id="foto" class="form-control">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Create Admin</button>
        </div>
    </form>
</div>
@endsection

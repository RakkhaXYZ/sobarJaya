<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
  protected $routeMiddleware = [
    // Middleware lainnya
    'cors' => \App\Http\Middleware\CorsMiddleware::class,
  ];

  protected $middlewareGroups = [
    'web' => [
      // Middleware web...
      \App\Http\Middleware\VerifyCsrfToken::class,
    ],

    'api' => [
      'throttle:api',
      \Illuminate\Routing\Middleware\SubstituteBindings::class,

      'cors', // Tambahkan middleware cors di sini
    ],
  ];
}

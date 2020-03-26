@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales')
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but ADMS doesn't work without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <script> window.config = @json($config); </script>
    <script src="{{ mix('dist/js/app.js') }}"></script>
  </body>
</html>

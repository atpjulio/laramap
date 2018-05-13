<!doctype html>
<html lang="{{ \App::getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laramap Test</title>
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/main.css') }}">
</head>
<body>
    @yield('content')
    <script src="{{ asset('/js/jquery.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJmhzKbfZf0QtRK7_FAO1msbA2DjdQ2ng" async defer></script>
    <script src="{{ asset('/js/script.js') }}"></script>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
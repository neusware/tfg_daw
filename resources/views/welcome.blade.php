<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon">

        <title>Inicio</title>
        @viteReactRefresh
        @vite([ 'resources/js/react/main.jsx'])
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>
    <body>

        <div id="root"></div>


    </body>
</html>

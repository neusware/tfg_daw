<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Informe - Muestras {{ $data['id'] }}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            padding-bottom: 10px;
        }
        .logo {
            width: 200px;
            height: auto;
        }
        .imagen {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        }

        h1 {
            color: #0056b3;
            font-size: 24px;
            margin: 0;
            position: absolute; 
            right: 20px; 
            top: 10px; 
            text-align: right;
        }
        .titulo-muestra {
            font-size: 40px !important;
            font-weight: bold !important;
            color: #0056b3 !important;
            margin-bottom: 10px !important;
            text-align: center !important;
        }
        .section {
            margin-bottom: 20px;
            padding: 10px;
        }
        .section h2 {
            font-size: 18px; 
            color: #0056b3;
            margin-top: 0;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
        }
        .section .titulo-muestra {
            border-bottom: none !important;
        }
        .section p {
            font-size: 14px;
            line-height: 1.4;
            margin: 5px 0;
        }
        .atributo {
            font-weight: bold;
            color: #0056b3;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <img src="{{ asset('img/logoMedac.png') }}" alt="Logo Medac" class="logo">
            <h1>Informe de Muestras</h1>
        </header>

        <div class="section">
            <h2 class="titulo-muestra">Muestra ID: {{ $data['id'] }}</h2>
            <p><span class="atributo">Fecha:</span> {{ $data['fecha'] }}</p>
            <p><span class="atributo">Órgano:</span> {{ $data['organo'] }}</p>
            <p><span class="atributo">Código:</span> {{ $data['codigo'] }}</p>
        </div>
    
        <div class="section">
            <h2>Naturaleza de la Muestra</h2>
            <p><span class="atributo">Nombre:</span> {{ $data['naturaleza']['nombre'] }}</p>
            <p><span class="atributo">Código:</span> {{ $data['naturaleza']['codigo'] }}</p>
        </div>
    
        <div class="section">
            <h2>Formato de la Muestra</h2>
            <p><span class="atributo">Tipo:</span> {{ $data['formato']['nombre'] }}</p>
        </div>
    
        <div class="section">
            <h2>Información de la Sede</h2>
            <p><span class="atributo">Sede:</span> {{ $data['sede']['nombre'] }}</p>
        </div>
    
        <div class="section">
            <h2>Interpretaciones</h2>
            @foreach ($data['interpretacion'] as $index => $interpretacion)
                <p><span class="atributo">Interpretación:</span> {{ $interpretacion['nombre'] }}</p>
                
                <!-- Solo mostrar la descripción de la primera interpretación -->
                @if ($index == 0 && isset($interpretacion['pivot']['descripcion']))
                    <p><span class="atributo">Descripción:</span> {{ $interpretacion['pivot']['descripcion'] }}</p>
                @endif
            @endforeach
        </div>

        <div class="section">
            <h2>Evaluación de Calidad</h2>
            <p><span class="atributo">Calidad:</span> {{ $data['calidad']['nombre'] }}</p>
        </div>

        <div class="section">
            <h2>Imágenes de la Muestra</h2>
            
            @foreach ($data['imagen'] as $imagen)
                <img src="{{ $imagen['ruta'] }}" alt="Imagen de la Muestra" class="imagen">
                
                @if (isset($imagen['zoom']))
                    <p><span class="atributo">Zoom:</span> {{ $imagen['zoom'] }}%</p>
                    <img src="{{ $imagen['ruta'] }}" alt="Imagen de la Muestra" class="imagen" style="max-width: {{ $imagen['zoom'] }}%;">
                @endif
            @endforeach
        </div>
        
        
        
        

        <div class="footer">
            <p>&copy; {{ date('Y') }}. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>

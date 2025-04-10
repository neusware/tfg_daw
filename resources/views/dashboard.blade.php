@extends('layouts.panel')

@section ('title')
Panel
@endsection

@section ('content')
    <h1>Dashboard</h1>

    <br><br><br>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="fetch1">Sin autenticacion</button>
    <br><br>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" id="fetch2">Autenticacion API</button>
@endsection



@vite(['resources/js/dashboard.js'])

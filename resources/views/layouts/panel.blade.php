<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>@yield('title')</title>
    <link rel="icon" type="image/ico" href="{{ asset('img/favicon.ico') }}"/>

    <!-- Google Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />

    <!-- Vite Config -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-gray-100 text-sm">

    <nav class="bg-white fixed top-0 w-full z-50 shadow-md">
        <div class="mx-auto max-w-full sm:px-4 lg:px-8">
            <div class="flex justify-between lg:justify-center items-center h-14">
                <div class="flex transition-all duration-200 ease-in-out">
                    <a href="{{ route('dashboard') }}">
                        <img class="h-12" src="{{ asset('img/logo.png') }}" alt="logo" />
                    </a>
                </div>
                <button id="mostrar_menu" class="lg:hidden mr-5 text-black">
                    <span class="material-icons-round scale-125">
                        menu
                    </span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Panel -->
    <div>
        <div id="menu" class="select-none transform -translate-x-full lg:translate-x-0 transition-all duration-200 ease-in-out opacity-0 lg:opacity-100 invisible lg:visible md:flex lg:flex h-screen fixed top-14 left-0 bg-gray-100 z-50">
            <div class="w-64 h-screen px-6 py-4 bg-white shadow-lg">
                <div class="flex flex-col">
                    <h1 class="text-lg font-bold px-3">Bienvenido</h1>
                </div>

                <hr class="my-4 border-gray-300" />

                <ul class="text-sm mt-2 leading-8">

                    <li @class(['mb-1 flex', request()->routeIs('dashboard') ? 'px-3 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'hover:px-3 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                        <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                            <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                account_balance
                            </span>
                            Informes
                        </a>
                    </li>

                    <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-3 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'hover:px-3 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                        <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                            <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                workspaces
                            </span>
                            Interpretaciones
                        </a>
                    </li>

                    <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-3 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'hover:px-3 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                        <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                            <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                send
                            </span>
                            Imágenes
                        </a>
                    </li>

                    <button class="accordion-submenu text-gray-600 w-full flex justify-start items-center hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200">
                        <span class="material-icons-round text-slate-600 ml-4 mr-2">
                            manage_accounts
                        </span>
                            Otros

                        <span class="material-icons-round text-slate-600 ml-2">
                            expand_more
                        </span>
                    </button>

                    <div @class(['submenu', request()->routeIs('welcome') || request()->routeIs('welcome') || request()->routeIs('welcome') ? 'submenu-visible' : ''])>

                        <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-9 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'px-6 hover:px-9 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                            <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                                <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                    manage_accounts
                                </span>
                                Otros1
                            </a>
                        </li>

                        <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-9 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'px-6 hover:px-9 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                            <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                                <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                    manage_accounts
                                </span>
                                Otros2
                            </a>
                        </li>

                        <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-9 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'px-6 hover:px-9 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                            <a href="{{ route('dashboard') }}" class="text-gray-600 w-full flex justify-start items-center">
                                <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                    manage_accounts
                                </span>
                                Otros3
                            </a>
                        </li>

                    </div>

                    <hr class="my-4 border-gray-300" />

                    <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-3 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'hover:px-3 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                        <a href="{{ route('dashboard') }}" class="w-full flex justify-start items-center">
                            <span class="material-icons-round text-slate-600 ml-4 mr-2">
                                account_box
                            </span>
                            Perfil
                        </a>
                    </li>

                    <li @class(['mb-1 flex', request()->routeIs('welcome') ? 'px-3 font-medium hover:font-semibold bg-blue-100 w-full rounded-md box-border' : 'hover:px-3 hover:bg-blue-50 hover:rounded-md ease-in-out hover:transition-all duration-200'])>
                        <a href="{{ route('dashboard') }}" class="text-red-600 hover:text-red-700 w-full flex justify-start items-center">
                            <span class="material-icons-round text-red-600 ml-4 mr-2">
                                logout
                            </span>
                            Cerrar Sesión
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <div class="mx-auto p-6 mt-14 lg:ml-64">
            <main>
                @yield('content')
            </main>
        </div>

    </div>

    @vite(['resources/js/panel.js'])

</body>

</html>

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/js/panel.js',
        'resources/js/dashboard.js',
        'resources/js/react/main.jsx'
      ],
      refresh: true,
    }),
  ] ,
});

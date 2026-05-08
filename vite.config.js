import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import os from 'node:os'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  cacheDir: path.join(os.tmpdir(), 'vite-aiman-portfolio'),
})

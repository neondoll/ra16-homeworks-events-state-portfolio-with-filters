import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ra16-homeworks-events-state-portfolio-with-filters/',
  plugins: [react()],
});

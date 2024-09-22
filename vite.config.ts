import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@voiceflow/react-chat': 'node_modules/@voiceflow/react-chat/build/src',

    }
  },
  build: {
    outDir: 'build',
  },
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: 'VF_',
  server: {
    port: 5173,
  },
});
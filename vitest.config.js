import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
    },
    build: {
        outDir: "build",
    },
});
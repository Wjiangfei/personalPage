import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnpluginSvgComponent from 'unplugin-svg-component/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            /* options */
            imports: ['vue', 'vue-router', 'pinia'],
            dts: './src/types/auto-imports.d.ts',
            dirs: ['./src/**/*'],

            vueTemplate: true,
        }),
        Components({
            dirs: ['./src/components/', './src/layout/'],
            dts: './src/types/components.d.ts',
        }),
        UnpluginSvgComponent({
            iconDir: './src/assets/svg/',
            dts: true,
            dtsDir: './src/types/',
            prefix: 'icon',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});

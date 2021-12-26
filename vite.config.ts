import path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
// plugins
import SSR from 'vite-plugin-ssr/plugin'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'
import VMark from '@yxonic/vmark/vite'

const base = process.env.BASE_URL || '/'

export default defineConfig({
  base,
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
      vpage: `${path.resolve(__dirname, '_vpage/lib')}/`,
    },
  },
  plugins: [
    SSR(),
    Vue(),
    WindiCSS(),
    Icons({ autoInstall: true }),
    VMark({
      componentResolver: [
        (name, id) => {
          const parts = id.split('/')
          const componentPath =
            parts.slice(0, parts.lastIndexOf('pages')).join('/') +
            '/components/' +
            name +
            '.vue'
          if (fs.existsSync(componentPath)) return componentPath
        },
        IconResolver(),
      ],
      defaultComponentDir: path.resolve(__dirname, 'src/components'),
      componentDirResolver: (id) => {
        const path = id.split('/')
        return (
          path.slice(0, path.lastIndexOf('pages')).join('/') + '/components/'
        )
      },
    }),
  ],
})

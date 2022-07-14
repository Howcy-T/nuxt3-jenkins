import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
        dts: 'types/components.d.ts',
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue'],
    },
  },
})

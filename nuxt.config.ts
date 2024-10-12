// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  experimental: {
		inlineSSRStyles: false,
	},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
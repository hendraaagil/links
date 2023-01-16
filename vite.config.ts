import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      react(),
      svgr(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            siteUrl: env.VITE_SITE_URL,
            title: 'Links | Hendra Agil',
            description:
              'A software developer. Born and live in Karanganyar, Central Java, Indonesia.',
          },
        },
      }),
    ],
  })
}

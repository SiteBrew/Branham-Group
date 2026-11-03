import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: isSsrBuild
      ? {
          /*
           * See src/helmet-ssr-noop.jsx. Helmet must render nothing during the
           * prerender pass, or React 19 emits its head tags inside the body and
           * hydration cannot match them.
           */
          'react-helmet-async': path.resolve(
            import.meta.dirname,
            'src/helmet-ssr-noop.jsx'
          ),
        }
      : {},
  },
  ssr: {
    /*
     * Vite externalises dependencies for SSR builds by default, which would
     * leave the bare `react-helmet-async` specifier to be resolved by Node at
     * runtime — bypassing the alias above. Bundling it is what makes the alias
     * actually apply.
     */
    noExternal: ['react-helmet-async'],
  },
}))

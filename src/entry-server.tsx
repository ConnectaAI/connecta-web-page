import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import i18n from './i18n'
import App from './App.tsx'
import { PAGES, langFromPath, localizedPath, type Lang } from './lib/routes'
import { headToHtml, seoFor } from './lib/seo'

export { PAGES }

export function render(pathname: string) {
  const lng = langFromPath(pathname)
  i18n.changeLanguage(lng)
  const html = renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>,
  )
  const head = headToHtml(seoFor(pathname, lng, i18n.getFixedT(lng)))
  return { html, head }
}

export function urlFor(path: string, lng: Lang) {
  return localizedPath(path, lng)
}

// Head for the 404.html shell: no content, never indexed.
export function shellHead() {
  return headToHtml(seoFor('/__shell__', 'es', i18n.getFixedT('es')))
}

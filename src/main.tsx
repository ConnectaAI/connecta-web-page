import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import i18n from './i18n'
import App from './App.tsx'
import { langFromPath } from './lib/routes'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

i18n.changeLanguage(langFromPath(window.location.pathname)).then(() => {
  // Prerendered pages are hydrated; the 404.html shell (unknown routes) and the dev server start empty and render from scratch.
  if (root.firstElementChild) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
})

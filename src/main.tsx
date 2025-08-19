import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Global from './style/global.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global/>
    <App/>
  </StrictMode>,
)

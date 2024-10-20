import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { HomeInstituciones } from './instituciones/pages/HomeInstituciones.jsx';
import { CreateInstitucion } from './instituciones/pages/CreateInstitucion.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

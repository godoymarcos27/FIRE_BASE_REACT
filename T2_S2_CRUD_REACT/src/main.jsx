import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Mostrar_data } from './componentes/mostrar.jsx'
import { Editar } from './componentes/editar.jsx'
import { Crear } from './componentes/crear.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/'  element={<Mostrar_data/>}/>
    <Route path='/crear'  element={<Crear/>}/>
    <Route path='/edit/:id'  element={<Editar/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from './pages/Details/Details'
import { HomePage } from './pages/HomePage/HomePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/details' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
)

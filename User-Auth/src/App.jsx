import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import AuthProvider from './Component/AuthProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './Component/PrivateRoute'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element = {<Login />} />
          {/* <Route element = {<PrivateRoute />}>
            <Route path='/dashboard' element = {<Dashboard />} />
          </Route> */}
        </Routes>
      </AuthProvider>
    </Router>
      
  )
}

export default App

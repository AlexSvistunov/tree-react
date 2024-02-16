import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Discounts from './components/Discounts/Discounts'
import Contact from './components/Contact/Contact'
import Routes from './components/Routes/AppRoutes'
import getCategories from './requests'

function App() {
  getCategories()
  return (
    <div>
      <Routes></Routes>
    </div>
  )
}

export default App

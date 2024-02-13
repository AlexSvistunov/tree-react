import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Discounts from './components/Discounts/Discounts'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Discounts/>
        <Contact/>
      </main>
    </div>
  )
}

export default App

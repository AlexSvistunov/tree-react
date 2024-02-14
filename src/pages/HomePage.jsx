import React from 'react'
import Header from '../components/Header/Header'
import Discounts from '../components/Discounts/Discounts'
import Contact from '../components/Contact/Contact'

const HomePage = () => {
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

export default HomePage
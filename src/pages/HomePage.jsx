import React from 'react'
import Header from '../components/Header/Header'
import Discounts from '../components/Discounts/Discounts'
import Contact from '../components/Contact/Contact'
import Categories from '../components/Categories/Categories'
import FirstOrder from '../components/FirstOrder/FirstOrder'
import Sale from '../components/Sale/Sale'


const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <Discounts/>
        <Categories/>
        <FirstOrder/>
        <Sale/>
        <Contact/>
      </main>
    </>
  )
}

export default HomePage
import React from 'react'
import Header from '../components/Header/Header'
import Discounts from '../components/Discounts/Discounts'
import Contact from '../components/Contact/Contact'
import Categories from '../components/Categories/Categories'
import FirstOrder from '../components/FirstOrder/FirstOrder'
import Sale from '../components/Sale/Sale'


const HomePage = () => {
  return (
    <div>
      <Header/>
      <main>
        <Discounts/>
        <Contact/>
        <Categories/>
        {/* <FirstOrder/> */}
        <Sale/>
      </main>
    </div>
  )
}

export default HomePage
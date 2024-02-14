import React from 'react'
import HomePage from '../../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import AllProductsPage from '../../pages/AllProductsPage'
import AllSales from '../../pages/AllSales'
import CartPage from '../../pages/CartPage'
import CategoriesPage from '../../pages/CategoriesPage'
import ROUTES from '../../utils/routes'



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path={ROUTES.ALLPRODUCTS} element={<AllProductsPage/>}></Route>
        <Route path={ROUTES.ALLSALES} element={<AllSales/>}></Route>
        <Route path={ROUTES.CART} element={<CartPage/>}></Route>
        <Route path={ROUTES.CATEGORIES} element={<CategoriesPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AppRoutes

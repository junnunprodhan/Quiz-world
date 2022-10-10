import React, { createContext, useState } from 'react'

import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

export const ProductContext = createContext([])
export const CartContext = createContext([])
const Root = () => {



  return (
    <ProductContext.Provider >
      <CartContext.Provider value={[]}>
        <Nav />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default Root
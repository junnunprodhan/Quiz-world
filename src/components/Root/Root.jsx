import React, { createContext, } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

export const TopicsContext = createContext([])
export const QuizContext =createContext([])
const Root = () => {
  const TopicsData=useLoaderData()
  const Topics=TopicsData.data;
  return (
    <TopicsContext.Provider value={Topics} >
        <Nav />
        <Outlet />
        <Footer />

    </TopicsContext.Provider>
  )
}

export default Root
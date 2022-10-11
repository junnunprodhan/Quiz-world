import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../components/Home/Home'
import Root from '../components/Root/Root'
import Topics from '../components/Topics/Topics'
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      { path: '/', element: <Home/> },
      { path: '/home', element: <Home /> },
      { path: '/topics', element: <Topics /> },
      { path: '/statistics', element: <Statistics /> },
      { path: '/blog', element: <Blog/> },
    ],
  },
])

export default router
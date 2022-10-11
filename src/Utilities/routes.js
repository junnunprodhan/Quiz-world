import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage/ErrorPage'
import Home from '../components/Home/Home'
import Root from '../components/Root/Root'
import Topics from '../components/Topics/Topics'
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'
import Topic from '../components/Topic/Topic'

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
      { path: '/topic:topicId',
      loader:async({params})=>{
        return fetch(` https://openapi.programming-hero.com/api/quiz/${params.topicId}`)},
      element: <Topic /> },
      { path: '/statistics', element: <Statistics /> },
      { path: '/blog', element: <Blog/> },
    ],
  },
])

export default router
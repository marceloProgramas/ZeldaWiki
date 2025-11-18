import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Post from './Pages/posts'
import LP from "./LP/LP"
import NotFounding from "./Pages/NotFounding"

const router = createBrowserRouter([
  {path:"/", element:<LP/>},
  {path:"/:type/Post/:id", element:<Post/>},
  {path:"*",element:<NotFounding/>}
])

export default function () {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}



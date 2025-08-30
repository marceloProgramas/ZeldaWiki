import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Games from "./Pages/Game"
import Characters from './Pages/Characters'
import LP from "./LP/LP"
import NotFounding from "./Pages/NotFounding"

const router = createBrowserRouter([
  {path:"/", element:<LP/>},
  //{path:"/games/Post/:id", element:<Games/>},
  {path:"/:type/Post/:id", element:<Characters/>},
  {path:"*",element:<NotFounding/>}
])

export default function () {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}



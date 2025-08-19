import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Games from "./Pages/Game"
import LP from "./LP/LP"
import NotFounding from "./Pages/NotFounding"

const router = createBrowserRouter([
  {path:"/", element:<LP/>},
  {path:"/games/:id", element:<Games/>},
  {path:"*",element:<NotFounding/>}
])

export default function () {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}



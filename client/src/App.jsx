import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import { Homelayout,Landing,Register } from "./pages"
import {Homelayout,Landing,Register,Login,Dashboardlayout,Error} from "./pages"
const router = createBrowserRouter([
  {
    path:'/',
    element:<Homelayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'dashboard',
        element:<Dashboardlayout/>
      }
    ]

  },
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

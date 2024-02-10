import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider} from 'react-router-dom'

const Body1 = () => {

    const appRouter = createBrowserRouter(
        [
            {
                path: "/login",
                element:<Login/>,

            },
            {
                path: "/browse",
                element:<Browse/>,

            },
           
        ]
    );
  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body1;
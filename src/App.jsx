import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/Home.jsx";
import Rootlayout from "./components/RootLayout.jsx";
import Login from "./features/auth/Login.jsx";
import Register from "./features/auth/Register.jsx";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout/>,
      children: [

        {
          index: true,
          element: <Home/>
        },
        {
          path:'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        }

      ]
    }
  ]);
  return <RouterProvider router={router} />
}
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/Home.jsx";
import Rootlayout from "./components/RootLayout.jsx";


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout/>,
      children: [

        {
          index: true,
          element: <Home/>
        }

      ]
    }
  ]);
  return <RouterProvider router={router} />
}
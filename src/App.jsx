import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import NotFound from './features/not-found/NotFound';
import RootLayout from './components/RootLayout';
import Home from './features/home_page/Home';

export default function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      
      children: [
        {
          index: true,
          element: <Home />
        },
        {
           path: '*',
           element: <NotFound />
         }
      ]
    },

  ]);

  return <RouterProvider router={router} />
}
 

import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home';
import { RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import Page1 from './pages/home/nested-pages/Page1';
import Page2 from './pages/home/nested-pages/Page2';
import RootLayout from './components/RootLayout';

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
 

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import RootLayout from './components/RootLayout';
import Home from './pages/home/Home';
import Meal from './pages/meals/Meal';
import MealList from './pages/meals/MealList';



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
          path: 'meal/:id',
          element: <Meal />

        },

        {
          path: 'meal-list/:category',
          element: <MealList />
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
 

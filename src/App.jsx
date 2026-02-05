import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import RootLayout from './components/RootLayout';

import TodoAddForm from './pages/todos/TodoAddForm';
import UpdateTodo from './pages/todos/UpdateTodo';
import Home from './pages/home_page/Home';

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
          path:'add-todo',
          element: <TodoAddForm/>
        },
        {
          path:'update-todo/:id',
          element: <UpdateTodo />
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
 

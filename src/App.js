import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import FormTask from './pages/FormTask';
import Error from './pages/Error';
import Layout from './pages/Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error/>,
      },
      {
        path: '/FormTask',
        element: <FormTask/>,
        errorElement: <Error/>,
      },
    ],
  },
]);
/**
 * @return {string}The entire app.
 */
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import FormTask from './pages/FormTask';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/FormTask',
        element: <FormTask />,
      },
      {
        path: '*',
        element: <NoPage/>,
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

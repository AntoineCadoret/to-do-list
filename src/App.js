import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
// import Layout from "./pages/Layout";
import FormTask from './pages/FormTask';
import NoPage from './pages/NoPage';


const router = createBrowserRouter([
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

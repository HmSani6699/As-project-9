import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Layout/Root';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Applied from './component/Applied/Applied';
import Blog from './component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobData.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied",
        element: <Applied></Applied>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

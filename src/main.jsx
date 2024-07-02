import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import "./index.css";
import Root from './Root';
import SurveyForm from './Page/SurveyForms/SurveyForm';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "survey",
        element: <SurveyForm/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

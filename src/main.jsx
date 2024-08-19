import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Home/Home';
import Loading from './Components/Loading/Loading';
import About from './Page/About/About';

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Root = lazy(() => wait(5000).then(() => import("./Root")));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Root />
      </Suspense>
    ),
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

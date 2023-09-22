import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RouteLayout from "./services/routeLayout";
import About from './pages/about';
import Home from './pages/home';
import Menu from './pages/menu';
import Media from './pages/media';
import Radio from './pages/radio';
import Research from './pages/research';

const routes = [
  {
    Path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
      {
        path: "/research",
        element: <Research />,
      },
    ],
  },
]


function App() {
  const router = createBrowserRouter(routes)
  return (
    <RouterProvider router={router}>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children}
      </Route>
    ))}
  </RouterProvider>
  );
}

export default App;

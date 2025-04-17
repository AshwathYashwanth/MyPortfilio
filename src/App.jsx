import Home from "./Pages/home/Home"
import About from "./Pages/about/About"
import Portfolio from "./Pages/portfolio/Portfolio"
import Contact from "./Pages/contact/Contact"
import { createBrowserRouter, RouterProvider } from "react-router"
import AppLayout from "./components/AppLayout"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '',
          element: <Home/>,
        },
        {
          path: '/about',
          element: <About/>,
        },
        {
          path: '/portfolio',
          element: <Portfolio/>,
        },
        {
          path: '/contact',
          element: <Contact/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default App
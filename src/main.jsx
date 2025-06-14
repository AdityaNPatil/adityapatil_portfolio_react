import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// components
import Home from "./pages/Home.jsx";
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Internship from './pages/Internship.jsx';

// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MatrixPage from './components/MatrixPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/intern",
        element: <Internship />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/matrix",
        element: <MatrixPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import AboutMeSection from './Pages/AboutMe';
import ProjectsSection from './Pages/Projects';
import ContactSection from './Pages/ContactSection';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: "error",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/aboutMe",
        element:<AboutMeSection></AboutMeSection>
      },
      {
        path:'/projects',
        element:<ProjectsSection></ProjectsSection>
      },
      {
        path:"/contact",
        element:<ContactSection></ContactSection>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

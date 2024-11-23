import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import BagianLogin from './components/Login/HalamanLogin.jsx'
import BagianDashboard from './BagianDashboard.jsx'

// import BagianAtas from './components/DashboardAdmin/BagianAtas.jsx'
// import BagianBawah from './components/DashboardAdmin/BagianBawah.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
  },
  {
    path: "/login",
    element: <BagianLogin/>,
  },
  {
    path: "/dashboard-admin",
    element: <BagianDashboard />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
    {/* <BagianAtas />
    <BagianBawah /> */}
  </StrictMode>
)

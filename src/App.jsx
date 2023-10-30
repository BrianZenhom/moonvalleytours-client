import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import Tour from './pages/tour/Tour';
import City from './pages/city/City';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

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
        path: '/:country',
        element: <Country />,
      },
      {
        path: '/:country/:city',
        element: <City />,
      },
      {
        path: '/:country/:city/:tour',
        element: <Tour />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

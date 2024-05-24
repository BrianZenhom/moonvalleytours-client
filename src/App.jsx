import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import NavbarMobile from './components/navbarMobile/navbarMobile'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Country from './pages/country/Country'
import Tour from './pages/tour/Tour'
import City from './pages/city/City'
import ScrollToTop from './hooks/scrollToTop'
import RegisterDialog from './components/registerdialog/RegisterDialog'

const Layout = () => {
  const dialogRef = useRef(null)

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.hasAttribute('open')
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  return (
    <>
      <RegisterDialog dialogRef={dialogRef} />
      <ScrollToTop />
      <NavbarMobile toggleDialog={toggleDialog} />
      <Navbar toggleDialog={toggleDialog} />
      <Outlet />
      <Footer />
    </>
  )
}

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
        path: '/:country/:city/:slug',
        element: <Tour />,
      },
    ],
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

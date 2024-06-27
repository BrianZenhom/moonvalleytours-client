import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useRef, useState } from 'react'
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
import Account from './pages/account/Account'

const Layout = () => {
  const [menu, setMenu] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleHiddenPw = () => {
    setVisible(!visible)
  }

  const handleLoginOpen = () => {
    setLoginOpen(!loginOpen)
  }

  const handleOpen = () => {
    setMenu(!menu)
    setLoginOpen(false)
  }
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
      <RegisterDialog
        setLoginOpen={setLoginOpen}
        setMenu={setMenu}
        dialogRef={dialogRef}
      />
      <ScrollToTop />
      <NavbarMobile
        handleLoginOpen={handleLoginOpen}
        handleOpen={handleOpen}
        toggleDialog={toggleDialog}
        handleHiddenPw={handleHiddenPw}
        loginOpen={loginOpen}
        menu={menu}
        setMenu={setMenu}
        setLoginOpen={setLoginOpen}
        visible={visible}
      />
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
  {
    path: '/customers/my-account',
    element: <Account />,
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

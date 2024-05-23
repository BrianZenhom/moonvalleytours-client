import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import NavbarMobile from './components/navbarMobile/navbarMobile'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Country from './pages/country/Country'
import Tour from './pages/tour/Tour'
import City from './pages/city/City'
import ScrollToTop from './hooks/scrollToTop'
import { useRef } from 'react'
import CloseModal from './assets/icons/CloseModal'
import RegisterForm from './components/registerform/RegisterForm'

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

  const toggleCloseDialog = () => {
    if (!dialogRef.current) {
      return
    }

    dialogRef.current.close()
  }
  return (
    <>
      <dialog ref={dialogRef} className="registerForm">
        <div className="registerForm_content">
          <div className="registerForm_title">
            <div className="titleRegistration">Create an account</div>
            <div onClick={toggleCloseDialog}>
              <CloseModal />
            </div>
          </div>
          <RegisterForm />
          <small>
            Person responsible for the processing: MOONVALLEYTOURS, S.L.
            (MoonValleyTours). Purpose:Provision of the services requested;
            Sending commercial communications about MOONVALLEY products and
            services, for which commercial profiles of our customers may be
            drawn up; Rights: You have the right to access, rectify and delete
            data, to limit its processing, to oppose its processing and to its
            portability. Additional Information: You can consult additional
            information on Data Protection in the General Terms and Conditions.
          </small>
        </div>
      </dialog>
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

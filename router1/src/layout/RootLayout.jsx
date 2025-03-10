import { Outlet } from "react-router-dom"
import Navbar from '../components/navbar.jsx'

export const RootLayout  = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

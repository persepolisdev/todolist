import Navbar from '../Components/header/Navbar.jsx'
import Header from '../Components/header/Header.jsx'
import Footer from '../Components/Footer.jsx'
import { Outlet, Link } from "react-router-dom";
const Layout = ({children}) => {
 return (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
 )
}
export default  Layout

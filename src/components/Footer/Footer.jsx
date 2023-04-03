import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoNavbar from '../../assets/logo-navbar.svg'
import './Footer.scss'

const Footer = () => {
    const [footerVisibility, setFooterVisibility] = useState(null)
    const userPages = ["/main", "/contact", "/assistconfirmation", "/plans", "/about-us", "/the-method"]
    const location = useLocation()

    useEffect(() => {
        if (userPages.includes(location.pathname)){
            setFooterVisibility(true)
        } else {
            setFooterVisibility(false)
        }
    }, [location])

    if(footerVisibility){
        return (
            <footer>
                <nav className='footer-navigation'>
                    <Link className="footer-brand" to="/main"><img src={logoNavbar} alt=""/></Link>
                    <div className='footer-group'>
                            <h2 className='footer-title'>CLIENTES</h2>
                            <Link className='footer-link' to='/turnconfirmation'>Confirmar asistencia</Link>
                    </div>
                    <div className='footer-group'>
                            <h2 className='footer-title'>NAVEGACIÓN</h2>
                            <Link className='footer-link' to='/dashboard'>Panel administración</Link>
                    </div>
                </nav>
            </footer>
        )
    }
}

export default Footer
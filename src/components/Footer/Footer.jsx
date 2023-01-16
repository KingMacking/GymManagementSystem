import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoNavbar from '../../assets/logo-default.svg'
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
                            <Link className='footer-link' to='/assistconfirmation'>Confirmar asistencia</Link>
                            <Link className='footer-link' to='/plans'>Consultar planes</Link>
                    </div>
                    <div className='footer-group'>
                            <h2 className='footer-title'>NAVEGACIÓN</h2>
                            <Link className='footer-link' to='/about-us'>¿Quienes somos?</Link>
                            <Link className='footer-link' to='/dashboard'>Panel administración</Link>
                    </div>
                    <div className='footer-group'>
                            <h2 className='footer-title'>CONTACTO</h2>
                            <a className='footer-link' href='https://wa.me/' target='_blank'>WhatsApp</a>
                            <a className='footer-link' href='https://www.instagram.com/' target='_blank'>Instagram</a>
                    </div>
                </nav>
            </footer>
        )
    }
}

export default Footer
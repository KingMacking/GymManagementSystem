import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import logoNavbar from '../../assets/logo-default.svg'
import './NavBar.scss'

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [navVisibility, setNavVisibility] = useState(null)
    const userPages = ["/main", "/contact", "/assistconfirmation", "/plans", "/about-us", "/the-method"]
    const location = useLocation()

    useEffect(() => {
        if (userPages.includes(location.pathname)){
            setNavVisibility(true)
        } else {
            setNavVisibility(false)
        }
    }, [location])

    if (navVisibility){
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/main"><img src={logoNavbar} alt=""/></Link>
                        <button className="navbar-toggler" onClick={() => setCollapsed(!collapsed)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {collapsed ? <Icon className='navbar-toggler-icon' icon="octicon:three-bars-16" inline={true} />
                                :
                                <Icon className='navbar-toggler-icon' icon="maki:cross" inline={true} />}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href='#' role='button' data-bs-toggle='dropdown'>Clientes</a>
                                    <ul className='dropdown-menu'>
                                        <li><Link className='dropdown-item' to='/assistconfirmation'>Confirmar asistencia</Link></li>
                                        <li><Link className='dropdown-item' to='/plans'>Consultar planes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">Quienes somos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default NavBar
import { Icon } from '@iconify/react'
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../../../context/UserContext'
import app from '../../../../firebase/config'
import Login from '../Login/Login'

import './Dashboard.scss'

const auth = getAuth(app)

const Dashboard = () => {
    const {user} = useUserContext()
    if (user) {
        if(user.role === "admin"){
            return (
                <div className='container-fluid dashboard'>
                    <Link className='dashboard-item' to='/addclient'>
                        <Icon className='dashboard-item-icon' icon="akar-icons:person-add" inline={true} />
                        <h2 className='dashboard-item-title'>Agregar nuevo cliente</h2>
                    </Link>
                    <Link className='dashboard-item' to='/registerpayment'>
                        <Icon className='dashboard-item-icon' icon="fa-solid:money-bill-wave" inline={true} />
                        <h2 className='dashboard-item-title'>Registrar un pago</h2>
                    </Link>
                    <Link className='dashboard-item' to='/clients'>
                        <Icon className='dashboard-item-icon' icon="bi:person-circle" inline={true} />
                        <h2 className='dashboard-item-title'>Ver todos los clientes</h2>
                    </Link>
                    <Link className='dashboard-item' to='/findclient'>
                        <Icon className='dashboard-item-icon' icon="material-symbols:person-search-rounded" inline={true} />
                        <h2 className='dashboard-item-title'>Buscar un cliente</h2>
                    </Link>
                    <Link className='dashboard-item' to='/dayentries'>
                        <Icon className='dashboard-item-icon' icon="game-icons:archive-register" inline={true} />
                        <h2 className='dashboard-item-title'>Entradas del día</h2>
                    </Link>
                    <Link className='dashboard-item' to='/debtors'>
                        <Icon className='dashboard-item-icon' icon="material-symbols:money-off" inline={true} />
                        <h2 className='dashboard-item-title'>Ver deudores</h2>
                    </Link>
                    <button className='dashboard-button' onClick={()=>signOut(auth)}><Icon icon="mdi:sign-out" inline={true} />Cerrar sesión</button>
                </div>
            )} else {
                return (
                    <>
                        <h2>No tienes permiso para ingresar a esta sección</h2>
                        <button onClick={()=>signOut(auth)}>Cerrar sesión</button>
                    </>
                )
            }
    } else {
        return <Login/>
    }
}

export default Dashboard
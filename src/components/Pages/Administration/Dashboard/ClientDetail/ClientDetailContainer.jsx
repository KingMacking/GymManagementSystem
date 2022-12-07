import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Ring } from '@uiball/loaders'
import ClientDetail from './ClientDetail'
import { useUserContext } from '../../../../../context/UserContext'
import Login from '../../Login/Login'

import './ClientDetailContainer.scss'

const ClientDetailContainer = () => {
    const [clientData, setClientData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {clientId} = useParams()
    const {user} = useUserContext()

    const db = getFirestore()
    const queryDoc = doc(db, 'clients', clientId)
    useEffect (()=> {
        getDoc(queryDoc)
        .then(resp => setClientData({...resp.data()}))
        .finally(()=>setIsLoading(false))
    }, [])

    if(user) {
        if (user.role === "admin") {
            return (
                <div className='client-detail-container'>
                    {isLoading ? <Ring size={40} lineWeight={5} speed={2} color={"black"} /> : <ClientDetail clientData={clientData}/>}
                </div>
            )
        } else {
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

export default ClientDetailContainer
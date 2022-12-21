import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Ring } from '@uiball/loaders';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../../../context/UserContext';
import Login from '../../Login/Login';

import './ViewAllClients.scss'
import { Icon } from '@iconify/react';
import HomeBtn from '../HomeBtn/HomeBtn';

const ViewAllClients = () => {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useUserContext()

    const db = getFirestore()
    const queryCollection = collection(db, 'clients')

    useEffect(() => {
        getDocs(queryCollection)
        .then(resp => setClients(resp.docs.map(client => ({...client.data()}))))
        .finally(() => setIsLoading(false))
    }, [])

    
    if(user) {
        if (user.role === "admin") {
            return (
                <>
                    <HomeBtn />
                    <div className='all-clients-container'>
                        {isLoading ? <Ring size={100} lineWeight={5} speed={2} color={"white"} />
                            :
                            clients.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0).map((client, index) => 
                            (<Link className='all-clients-client' to={`/clients/${client.dni}`} key={index}>
                                <Icon className='all-clients-client-icon' icon="material-symbols:person" inline={true} />
                                <span className='all-clients-client-info'>{client.name}</span>
                            </Link>))
                        }
                    </div>
                </>
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

export default ViewAllClients
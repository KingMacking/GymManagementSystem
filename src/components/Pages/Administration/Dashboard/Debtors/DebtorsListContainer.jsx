import { Ring } from '@uiball/loaders'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../../../../context/UserContext'
import Login from '../../Login/Login'
import HomeBtn from '../HomeBtn/HomeBtn'
import Debtor from './Debtor'

import './DebtorsListContainer.scss'

const DebtorsListContainer = () => {
    const [debtors, setDebtors] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {user} = useUserContext()

    const db = getFirestore()
    const queryCollection = collection(db, 'clients')

    useEffect (() => {
        getDebtors()
    }, [])

    const filterDebtors = (clientsData) => {
        return clientsData.filter(client => {
            return (((client.nextPaymentDate) < DateTime.now().toISODate()) && !client.staff)
        })
    }

    const getDebtors = async () => {
        await getDocs(queryCollection)
        .then(resp => setDebtors(filterDebtors(resp.docs.map(debtor => ({...debtor.data()})))))
        .finally(setIsLoading(false))
    }

    if(user) {
        if (user.role === "admin") {
            return (
                <>
                    <HomeBtn />
                    <div className='debtors-list-container'>
                        {isLoading ? <Ring size={40} lineWeight={5} speed={2} color={"black"} />
                            :
                            debtors.map((debtor, index) =>(<Debtor key={index} debtor={debtor}/>))
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

export default DebtorsListContainer
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { DateTime } from 'luxon'
import { useNavigate } from 'react-router-dom'

import './ClientDetail.scss'

const ClientDetail = ({clientData}) => {

    const db = getFirestore()
    const navigate = useNavigate()

    const deleteClient = async (clientId) => {
        await deleteDoc(doc(db, 'clients', clientId))
        console.log("cliente eliminado")
        navigate("/clients")
    }

    return (
        <div className='client-data-detail'>
            <p className='client-data-info'>Nombre: {clientData.name}</p>
            <p className='client-data-info'>DNI: {clientData.dni}</p>
            <p className='client-data-info'>Telefono: {clientData.phone}</p>
            <p className='client-data-info'>Tickets restantes: {clientData.tickets}</p>
            <p className='client-data-info'>Proxima fecha de pago: {DateTime.fromISO(clientData.nextPaymentDate).toLocaleString()}</p>
            <button className='client-data-button' onClick={()=>deleteClient(clientData.dni)}>Eliminar cliente</button>
        </div>
    )
}

export default ClientDetail
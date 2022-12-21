import { Ring } from '@uiball/loaders'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { DateTime } from 'luxon'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './ClientDetail.scss'

const ClientDetail = ({clientData}) => {

    const db = getFirestore()
    const navigate = useNavigate()

    const deleteClient = async (clientId) => {
        toast('Eliminando cliente', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            icon: <Ring size={40} lineWeight={5} speed={2} color={"white"} />,
            toastId: "deleteClientToast"
        });
        await deleteDoc(doc(db, 'clients', clientId))
        navigate("/clients")
        toast.success('Cliente eliminado correctamente', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            toastId: "clientDeletedToast"
        });
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
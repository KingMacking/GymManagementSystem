import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Ring } from '@uiball/loaders'
import { collection, doc, getDoc, getFirestore} from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { DateTime } from 'luxon'
import { useUserContext } from '../../../../../context/UserContext'
import Login from '../../Login/Login'

import './FindClient.scss'

const generateClientFinderSchema = yup.object().shape({
    dni: yup.string().min(7, "Ingresa un DNI valido").max(8, "Ingresa un DNI valido").required("Debes ingresar un DNI")
})

const FindClient = () => {
    const db = getFirestore()
    const clients = collection(db, 'clients')
    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: yupResolver(generateClientFinderSchema)})
    const [clientData, setClientData] = useState({})
    const [isLoading, setIsLoading] = useState()
    const {user} = useUserContext()

    const onSubmit = (data) => {
        getClientData(data.dni)
    }

    const getClientData = async (clientId) => {
        const queryClient = doc(clients, clientId)
        await getDoc(queryClient)
        .then(resp =>{
            if (resp.data()) {
                setClientData({...resp.data()})
                setIsLoading(false)
            } else {
                console.log("No existe el DNI ingresado")
                setIsLoading(false)
            }
        })
    }


    if(user) {
        if (user.role === "admin") {
            return (
                <div className='find-client'>
                    <div className='find-client-container'>
                        <h2 className='find-client-title'>BUSCAR CLIENTE</h2>
                        <form className='find-client-form' onSubmit={handleSubmit(onSubmit)}>
                            <p className='find-client-form-text'>Ingrese el DNI del cliente</p>
                            <input className='find-client-form-input' type='text' {...register("dni")} placeholder='DNI del cliente' />
                            {errors.dni && <p className='find-client-form-error'>{errors.dni.message}</p>}
                            <button className='find-client-form-button' type='submit'>Buscar cliente</button>
                        </form>
                    </div>
                    {isLoading ? <Ring size={100} lineWeight={5} speed={2} color={"white"} />
                        :
                        <div className='client-data-container'>
                            <h3 className='client-data-title'>CLIENTE: {clientData.name && clientData.name.toUpperCase()}</h3>
                            <p className='client-data-info'>DNI: {clientData.dni}</p>
                            <p className='client-data-info'>Telefono: {clientData.phone}</p>
                            <p className='client-data-info'>Ultimo pago: {clientData.paymentDate && (DateTime.fromISO(clientData.paymentDate).toLocaleString())}</p>
                            <p className='client-data-info'>Siguiente pago: {clientData.nextPaymentDate && (DateTime.fromISO(clientData.nextPaymentDate).toLocaleString())}</p>
                            <p className='client-data-info'>Pases restantes: {clientData.tickets}</p>
                        </div>    
                    }
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

export default FindClient
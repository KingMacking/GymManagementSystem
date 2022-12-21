import React from 'react'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateTime } from 'luxon';
import { useUserContext } from '../../../../../context/UserContext';
import { signOut } from 'firebase/auth';
import Login from '../../Login/Login';
import { useNavigate } from 'react-router-dom';
import HomeBtn from '../HomeBtn/HomeBtn';
import { toast } from 'react-toastify';
import { Ring } from '@uiball/loaders';

import './AddNewClient.scss'

const generateClientSchema = yup.object().shape({
    name: yup.string().required("Ingresa el nombre del cliente"),
    phone: yup.number().positive("Ingresa un telefono valido").integer("Ingresa un telefono valido").required("Ingresa el telefono del cliente"),
    dni: yup.string().min(7, "Ingresa un DNI valido").max(8, "Ingresa un DNI valido").required("Debes ingresar el DNI del cliente"),
    tickets: yup.number().oneOf([4, 8, 12, 16, 20],"Debes seleccionar un plan").required("Elige un plan para el cliente")
})

const AddNewClient = () => {
    const {user} = useUserContext()
    const db = getFirestore()
    const clients = collection(db, 'clients')
    const navigate = useNavigate()
    

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(generateClientSchema)})

    const addClient = async (clientData) => {
        const client = {
            name: clientData.name,
            phone: clientData.phone,
            dni: clientData.dni,
            tickets: clientData.tickets,
            paymentDate: DateTime.now().toISODate(),
            nextPaymentDate: DateTime.now().plus({months: 1}).toISODate(),
            debt: false
        }
        await setDoc(doc(clients, client.dni), client)
        toast.success('Cliente agregado correctamente', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            toastId: "clientAddedToast"
        });
        navigate(`/clients/${client.dni}`, {replace: true})
    }

    const onSubmit = (data) => {
        addClient(data)
        toast('Agregando cliente', {
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
            toastId: "addClientToast"
        });
    }

    if(user) {
        if (user.role === "admin") {
            return (
                <>
                    <HomeBtn/>
                    <div className='container-fluid add-client'>
                        <h2 className='add-client-title'>FORMULARIO NUEVO CLIENTE</h2>
                        <div className='add-client-form'>
                            <form className='form-detail' onSubmit={handleSubmit(onSubmit)}>
                                <div className='form-input-container'>
                                    <h3 className='form-input-title'>Nombre:</h3>
                                    <input className='form-input' type='text' {...register("name")} placeholder='Nombre completo'/>
                                    {errors.name && <p className='form-error-message'>{errors.name.message}</p>}
                                </div>
                                <div className='form-input-container'>
                                    <h3 className='form-input-title'>DNI:</h3>
                                    <input className='form-input' type='text' {...register("dni")} placeholder='DNI'/>
                                    {errors.dni && <p className='form-error-message'>{errors.dni.message}</p>}
                                </div>
                                <div className='form-input-container'>
                                    <h3 className='form-input-title'>Telefono:</h3>
                                    <input className='form-input' type='tel' {...register("phone")} placeholder='Telefono de contacto' />
                                    {errors.phone && <p className='form-error-message'>{errors.phone.message}</p>}
                                </div>
                                <div className='form-input-container'>
                                    <h3 className='form-input-title'>Plan:</h3>
                                    <select className='form-input' {...register("tickets")} onChange={(e) => setValue('tickets', parseInt(e.target.value, 10), {shouldValidate: true})}>
                                        <option value="">Selecciona un plan</option>
                                        <option value="4">4 pases</option>
                                        <option value="8">8 pases</option>
                                        <option value="12">12 pases</option>
                                        <option value="16">16 pases</option>
                                        <option value="20">20 pases</option>
                                    </select>
                                    {errors.tickets && <p className='form-error-message'>{errors.tickets.message}</p>}
                                </div>
                                <button className='form-button' type='submit'>Ingresar cliente</button>
                            </form>
                        </div>
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

export default AddNewClient
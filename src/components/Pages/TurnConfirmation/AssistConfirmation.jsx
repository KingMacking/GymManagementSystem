import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, doc, arrayUnion, getDoc, getFirestore, setDoc, updateDoc, writeBatch } from 'firebase/firestore'
import { Ring } from '@uiball/loaders';
import * as yup from "yup";
import { DateTime } from "luxon";

import './AssistConfirmation.scss'
import { toast } from 'react-toastify';

const generateAssistConfirmationSchema = yup.object().shape({
    dni: yup.string().min(7, "Ingresa un DNI valido").max(8, "Ingresa un DNI valido").required("Debes ingresar un DNI")
})

const AssistConfirmation = () => {
    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: yupResolver(generateAssistConfirmationSchema)});
    const db = getFirestore()
    const [clientData, setClientData] = useState()
    const [isStaff, setIsStaff] = useState(false)

    const onSubmit = (data) => {
        ConfirmAssist(data.dni)
        toast('Registrando asistencia', {
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
            toastId: "registerAssistToast"
        });
    }

    const ConfirmAssist = async (docId) => {
        const queryClient = doc(db, 'clients', docId)
        const batch = writeBatch(db)

        await getDoc(queryClient)
        .then(resp => {
            if (resp.data()) {
                if(resp.data().staff) {
                    setClientData({...resp.data()})
                    RegisterEntry(resp.data())
                    setIsStaff(true)
                    toast.success('Asistencia registrada', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        pauseOnFocusLoss: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        toastId: "assistRegisteredToast"
                    });
                } else {
                    if(resp.data().nextPaymentDate <= DateTime.now().toISODate() || resp.data().tickets <= 0){
                        setClientData({...resp.data()})
                        toast.error("Error al registrar la asistencia", {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            pauseOnFocusLoss: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            toastId: "assistRegisterErrorToast"
                        });
                    } else {
                        batch.update(resp.ref, {
                            tickets: (resp.data().tickets - 1 >= 0 && resp.data().tickets - 1)
                        })
                        batch.commit()
                        setClientData({...resp.data()})
                        RegisterEntry(resp.data())
                        toast.success('Asistencia registrada', {
                            position: "bottom-center",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            pauseOnFocusLoss: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            toastId: "assistRegisteredToast"
                        });
                    }
                }
            } else {
                toast.error("Cliente inexistente o DNI erroneo", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    toastId: "clientNotFoundToast"
                });
            }
        })
    }

    const RegisterEntry = async (data) => {
        const queryEntry = doc(db, 'entries', DateTime.now().toISODate())
        const entryTime = DateTime.now().toObject()
        const dataObj = {
            name: data.name,
            time: `${entryTime.hour.toString().length === 1 ? "0"+entryTime.hour : entryTime.hour}:${entryTime.minute.toString().length === 1 ? "0"+entryTime.minute : entryTime.minute}`
        }
        await setDoc(queryEntry, { entries: {clients: arrayUnion(dataObj)}}, {merge: true})
    }
    return (
        <div className='turn-confirm'>
            <div className='assist-confirmation'>
                <h2 className='assist-confirmation-title'>REGISTRAR ASISTENCIA</h2>
                <form className='assist-confirmation-form' onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='form-input-title'>Ingrese su DNI</h3>
                    <input className='form-input' type='text' {...register("dni")} placeholder='DNI: 12345678' />
                    {errors.dni && <p className='form-error-message'>{errors.dni.message}</p>}
                    <button className='form-button' type='submit'>Confirmar asistencia</button>
                </form>
            </div>
            {
                clientData &&
                (isStaff ?
                (<div className='assist-confirmation-detail'>
                    <div className='detail-container'>
                        <h3 className='detail-title'>BIENVENIDO {clientData.name.toUpperCase()}</h3>
                        <p className='detail-text'>¡A entrenar!</p>
                    </div>
                </div> )
                :
                (<div className='assist-confirmation-detail'>
                    <div className='detail-container'>
                        <h3 className='detail-title'>BIENVENIDO {clientData.name.toUpperCase()}</h3>
                        {clientData.nextPaymentDate <= DateTime.now().toISODate() ?
                            <>
                                <p className='detail-text'>No puedes ingresar al gimnasio ya que debes abonar tus pases del mes</p>
                                <p className='detail-text'>Tu ultima fecha de pago fue {(DateTime.fromISO(clientData.paymentDate).toLocaleString())}</p>
                                <p className='detail-text'>La fecha del pago a realizar es {(DateTime.fromISO(clientData.nextPaymentDate).toLocaleString())}</p>
                            </>
                            :
                                clientData.tickets - 1 >= 0 ? 
                                    <>
                                        <p className='detail-text'>Tienes {clientData.tickets - 1} pases restantes para utilizar durante este mes</p>
                                        <p className='detail-text'>¡A entrenar!</p>
                                    </>
                                : 
                                    <p className='detail-text'>¡No tienes mas pases para utilizar! Comunicate con el coach para gestionar mas.</p>
                        }
                    </div>
                </div>))
            }
        </div>
    )
}

export default AssistConfirmation
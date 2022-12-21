import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateTime } from 'luxon';
import { doc, getDoc, getFirestore, writeBatch } from 'firebase/firestore';
import { useUserContext } from '../../../../../context/UserContext';
import Login from '../../Login/Login';
import HomeBtn from '../HomeBtn/HomeBtn';
import { toast } from 'react-toastify';
import { Ring } from '@uiball/loaders';

import './RegisterPayment.scss'

const generatePaymentSchema = yup.object().shape({
    dni: yup.string().min(7, "Ingresa un DNI valido").max(8, "Ingresa un DNI valido").required("Debes ingresar el DNI del cliente"),
    tickets: yup.number().oneOf([4, 8, 12, 16, 20],"Debes seleccionar un plan").required("Elige un plan para el cliente")
})

const RegisterPayment = () => {
    const db = getFirestore()
    const {register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(generatePaymentSchema)})
    const {user} = useUserContext()

    const setPaymentDate = async (clientData) => {
        const queryClient = doc(db, 'clients', clientData.dni)
        const batch = writeBatch(db)

        await getDoc(queryClient)
        .then(resp => {
            if(resp.data()) {
                batch.update(resp.ref, {
                    paymentDate: (DateTime.now().toISODate()),
                    nextPaymentDate: (DateTime.now().plus({months: 1}).toISODate()),
                    tickets: clientData.tickets
                })
                batch.commit()
                toast.success('Pago registrado correctamente', {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    pauseOnFocusLoss: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    toastId: "paymentRegisteredToast"
                });
            } else {
                toast.error('No existe un cliente con el DNI ingresado', {
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

    const onSubmit = (data) => {
        setPaymentDate(data)
        toast('Registrando pago', {
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
            toastId: "registerPaymentToast"
        });
    }

    if(user) {
        if (user.role === "admin") {
            return (
                <>
                    <HomeBtn />
                    <div className='register-payment'>
                        <h2 className='register-payment-title'>REGISTRAR NUEVO PAGO</h2>
                        <form className='register-payment-form' onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <h3 className='form-input-title'>DNI del cliente:</h3>
                                <input className='form-input' type='text' {...register("dni")} placeholder='DNI'/>
                                {errors.dni && <p className='form-error-message'>{errors.dni.message}</p>}
                            </div>
                            <div>
                                <h3 className='form-input-title'>Plan del cliente:</h3>
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
                            <button className='form-button' type='submit'>Registrar pago</button>
                        </form>
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

export default RegisterPayment
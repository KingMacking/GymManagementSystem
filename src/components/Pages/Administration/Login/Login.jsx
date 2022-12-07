import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import app from '../../../../firebase/config'

import './Login.scss'

const auth = getAuth(app)
const generateLoginSchema = yup.object().shape({
    email: yup.string().email('Ingresa un email valido').required('Por favor ingresa un email'),
    password: yup.string().required('Por favor ingresa una contraseña')
})

const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm ({resolver: yupResolver(generateLoginSchema)})

    const onSubmit = async (data) => {
        const email = data.email
        const password = data.password
        await signInWithEmailAndPassword(auth, email, password)
        .catch(error => {
            if (error) {
                console.log(error.message)
            }
        })
    }

    return (
        <div className='login'>
            <h2 className='login-title'>INGRESAR AL PANEL</h2>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='login-input-title'>Email:</h3>
                <input className='login-input' type="email" {...register("email")} placeholder="Email"/>
                {errors.email && <p className='login-error'>{errors.email.message}</p>}
                <h3 className='login-input-title'>Contraseña:</h3>
                <input className='login-input' type="password" {...register("password")} placeholder="Contraseña"/>
                {errors.password && <p className='login-error'>{errors.password.message}</p>}
                <button className='login-button' type='submit'>Iniciar sesion</button>
            </form>
        </div>
    )
}

export default Login
import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Main.scss'

const Main = () => {
    return (
        <div className='main'>
            <section className='main-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title col-md-6'>BIENVENIDO A REAL TRAINING</h2>
                    <h3 className='banner-subtitle col-md-6'>La casa de la fuerza</h3>
                    <p className='banner-text col-md-6'>Al entrar aquí, aceptas dar el 100% de lo que tenés. No hay excusas ni segundas oportunidades. Todos los días, cada instante es una oportunidad para superarte, para ser más, para alcanzar lo mejor. No pierdas el tiempo. Entrena duro, obtené resultados,  al final del día mírate al espejo y pregúntate si diste todo de vos.</p>
                    <Link className='col-md-6'><button className='banner-button'>Empeza ya</button></Link>
                </div>
            </section>
            <section className='main-gym'>
                <div className='gym-container'>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="game-icons:progression" inline={true} />
                            <h3 className='gym-item-title'>PROGRESO</h3>
                        </div>
                    </div>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="medical-icon:i-nutrition" inline={true} />
                            <h3 className='gym-item-title'>NUTRICION</h3>
                        </div>
                    </div>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="map:gym" inline={true} />
                            <h3 className='gym-item-title'>EJERCICIO</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main-about-us'>
                <div className='about-us-container'>
                    <div className='about-us-image'></div>
                    <div className='about-us-detail'>
                        <h2 className='about-us-title'>SOBRE NOSOTROS</h2>
                        <h3 className='about-us-subtitle'>Somos la casa de la fuerza</h3>
                        <p className='about-us-text'>Desde 2011 trabajamos la principal capacidad del cuerpo, la fuerza, que es literalmente el único factor transferible a cualquier actividad que realices en tu vida cotidiana, sea deportiva o no. Aseguramos que el entrenamiento de la fuerza es la mejor medicina y antídoto contra la pandemia de la obesidad, la inflamación, deterioro neural, astenia, estrés, osteosarcopenia, provocada por el sedentarismo junto a malos y erróneos hábitos alimenticios.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
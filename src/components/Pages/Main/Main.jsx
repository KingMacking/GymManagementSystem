import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Main.scss'

const Main = () => {
    return (
        <div className='main'>
            <section className='main-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title col-md-6'>BIENVENIDO</h2>
                    <h3 className='banner-subtitle col-md-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    <p className='banner-text col-md-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore officiis alias qui minima rem necessitatibus suscipit eos autem labore harum, aperiam voluptate. Blanditiis, nulla? Suscipit nam sed illum ipsam.</p>
                    <Link className='col-md-6'><button className='banner-button'>Empeza ya</button></Link>
                </div>
            </section>
            <section className='main-gym'>
                <div className='gym-container'>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="game-icons:progression" inline={true} />
                            <h3 className='gym-item-title'>PROGRESO</h3>
                            <p className='gym-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est iusto. Dignissimos, eaque ducimus tempore facere quas sint molestiae reiciendis quis cum dolorem quidem minus hic, eius iusto. Sequi, nisi.</p>
                        </div>
                    </div>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="medical-icon:i-nutrition" inline={true} />
                            <h3 className='gym-item-title'>NUTRICION</h3>
                            <p className='gym-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est iusto. Dignissimos, eaque ducimus tempore facere quas sint molestiae reiciendis quis cum dolorem quidem minus hic, eius iusto. Sequi, nisi.</p>
                        </div>
                    </div>
                    <div className='gym-item'>
                        <div className='gym-item-info'>
                            <Icon className='gym-item-icon' icon="map:gym" inline={true} />
                            <h3 className='gym-item-title'>EJERCICIO</h3>
                            <p className='gym-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est iusto. Dignissimos, eaque ducimus tempore facere quas sint molestiae reiciendis quis cum dolorem quidem minus hic, eius iusto. Sequi, nisi.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='main-about-us'>
                <div className='about-us-container'>
                    <div className='about-us-image'></div>
                    <div className='about-us-detail'>
                        <h2 className='about-us-title'>SOBRE NOSOTROS</h2>
                        <h3 className='about-us-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                        <p className='about-us-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum magni? Enim vitae libero reprehenderit natus quisquam id culpa at blanditiis? Exercitationem velit perferendis dicta, soluta deleniti totam consequuntur fuga.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
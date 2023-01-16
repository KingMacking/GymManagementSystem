import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import './Plans.scss'

const Plans = () => {
    return (
        <div className='plans'>
            <section className='plans-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title mx-auto col-md-6'>SELECCIONA TU PLAN</h2>
                    <p className='banner-text mx-auto col-md-6'>Elige el que mas se adapte a tus necesidades</p>
                    <a className='mx-auto banner-button-container' href="#cards"><Icon className='banner-button' icon="material-symbols:play-arrow-rounded" rotate={1} inline={true} /></a>
                </div>
            </section>
            <section id='cards' className='plans-cards'>
                <div className='plans-cards-container'>
                    <div className='plans-card'>
                        <div className='plans-card-info'>
                            <h3 className='plans-card-title'>4 PASES</h3>
                            <p className='plans-card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum unde nulla sint, nam enim quasi quaerat neque perferendis reiciendis libero, provident, optio eligendi non aliquid vero soluta adipisci aperiam.</p>
                            <p className='plans-card-price'>$2500</p>
                            <a href='https://wa.me' target='_blank'><button className='plans-card-button'>Solicitar</button></a>
                        </div>
                    </div>
                    <div className='plans-card'>
                        <div className='plans-card-info'>
                            <h3 className='plans-card-title'>8 PASES</h3>
                            <p className='plans-card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum unde nulla sint, nam enim quasi quaerat neque perferendis reiciendis libero, provident, optio eligendi non aliquid vero soluta adipisci aperiam.</p>
                            <p className='plans-card-price'>$2800</p>
                            <a href='https://wa.me' target='_blank'><button className='plans-card-button'>Solicitar</button></a>
                        </div>
                    </div>
                    <div className='plans-card'>
                        <div className='plans-card-info'>
                            <h3 className='plans-card-title'>12 PASES</h3>
                            <p className='plans-card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum unde nulla sint, nam enim quasi quaerat neque perferendis reiciendis libero, provident, optio eligendi non aliquid vero soluta adipisci aperiam.</p>
                            <p className='plans-card-price'>$3000</p>
                            <a href='https://wa.me' target='_blank'><button className='plans-card-button'>Solicitar</button></a>
                        </div>
                    </div>
                    <div className='plans-card'>
                        <div className='plans-card-info'>
                            <h3 className='plans-card-title'>16 PASES</h3>
                            <p className='plans-card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum unde nulla sint, nam enim quasi quaerat neque perferendis reiciendis libero, provident, optio eligendi non aliquid vero soluta adipisci aperiam.</p>
                            <p className='plans-card-price'>$3200</p>
                            <a href='https://wa.me' target='_blank'><button className='plans-card-button'>Solicitar</button></a>
                        </div>
                    </div>
                    <div className='plans-card'>
                        <div className='plans-card-info'>
                            <h3 className='plans-card-title'>20 PASES</h3>
                            <p className='plans-card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum unde nulla sint, nam enim quasi quaerat neque perferendis reiciendis libero, provident, optio eligendi non aliquid vero soluta adipisci aperiam.</p>
                            <p className='plans-card-price'>$3500</p>
                            <a href='https://wa.me' target='_blank'><button className='plans-card-button'>Solicitar</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Plans
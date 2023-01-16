import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import './Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <section className='contact-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title mx-auto col-md-6'>CONTACTANOS</h2>
                    <p className='banner-text mx-auto col-md-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a className='mx-auto banner-button-container' href="#main-contact"><Icon className='banner-button' icon="material-symbols:play-arrow-rounded" rotate={1} inline={true} /></a>
                </div>
            </section>
            <section id='main-contact' className='main-contact'>
                <div className='contact-social-media'>
                    <h3 className='social-media-title'>REDES SOCIALES</h3>
                    <div className='social-media-icons'>
                        <a href="https://www.instagram.com" target="_blank"><Icon className='social-media-icon' icon="teenyicons:instagram-solid" inline={true} /></a>
                        <a href='https://wa.me' target="_blank"><Icon className='social-media-icon' icon="ri:whatsapp-fill" inline={true} /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
import { Icon } from '@iconify/react'
import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <section className='about-us-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title mx-auto col-md-6'>SOBRE NOSOTROS</h2>
                    <p className='banner-text mx-auto col-md-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a className='mx-auto banner-button-container' href="#about-us-info"><Icon className='banner-button' icon="material-symbols:play-arrow-rounded" rotate={1} inline={true} /></a>
                </div>
            </section>
            <section id='about-us-info' className='about-us-info'>
                <div className='about-us-info-container'>
                    <div className='about-us-info-image'></div>
                    <div className='about-us-info-detail'>
                        <h2 className='about-us-info-title'>¿QUIENES SOMOS?</h2>
                        <h3 className='about-us-info-subtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className='about-us-info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta architecto iure natus modi id assumenda, aperiam temporibus doloremque eveniet aspernatur, fugiat corporis quae provident totam quaerat et quasi! Iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minus dolores atque, voluptate quod consequatur ducimus tempora? Suscipit magnam corrupti doloribus ab eligendi, aspernatur ipsa ratione, odit voluptatem, tempore unde.</p>
                    </div>
                </div>
                <div className='about-us-info-container'>
                    <div className='about-us-info-detail'>
                        <h2 className='about-us-info-title'>LOREM</h2>
                        <h3 className='about-us-info-subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                        <p className='about-us-info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta architecto iure natus modi id assumenda, aperiam temporibus doloremque eveniet aspernatur, fugiat corporis quae provident totam quaerat et quasi! Iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minus dolores atque, voluptate quod consequatur ducimus tempora? Suscipit magnam corrupti doloribus ab eligendi, aspernatur ipsa ratione, odit voluptatem, tempore unde.</p>
                    </div>
                    <div className='about-us-info-image'></div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs

import { Icon } from '@iconify/react'
import './TheMethod.scss'

const TheMethod = () => {
    return (
        <div className='the-method'>
            <section className='the-method-banner'>
                <div className='banner-container row'>
                    <h2 className='banner-title mx-auto col-md-6'>EL METODO</h2>
                    <p className='banner-text mx-auto col-md-6'>Se tu mejor versión</p>
                    <a className='mx-auto banner-button-container' href="#method-info"><Icon className='banner-button' icon="material-symbols:play-arrow-rounded" rotate={1} inline={true} /></a>
                </div>
            </section>
            <section id='method-info' className='method-info'>
                <div className='method-info-container'>
                    <div className='method-info-image'></div>
                    <div className='method-info-detail'>
                        <h2 className='method-info-title'>¿QUÉ ES EL METODO?</h2>
                        <h3 className='method-info-subtitle'>La manera de conseguir la mejor versión de uno mismo</h3>
                        <p className='method-info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta architecto iure natus modi id assumenda, aperiam temporibus doloremque eveniet aspernatur, fugiat corporis quae provident totam quaerat et quasi! Iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minus dolores atque, voluptate quod consequatur ducimus tempora? Suscipit magnam corrupti doloribus ab eligendi, aspernatur ipsa ratione, odit voluptatem, tempore unde.</p>
                    </div>
                </div>
                <div className='method-info-container'>
                    <div className='method-info-detail'>
                        <h2 className='method-info-title'>¿EN QUE SE BASA EL METODO?</h2>
                        <h3 className='method-info-subtitle'>La manera de conseguir la mejor versión de uno mismo</h3>
                        <p className='method-info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam soluta architecto iure natus modi id assumenda, aperiam temporibus doloremque eveniet aspernatur, fugiat corporis quae provident totam quaerat et quasi! Iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit minus dolores atque, voluptate quod consequatur ducimus tempora? Suscipit magnam corrupti doloribus ab eligendi, aspernatur ipsa ratione, odit voluptatem, tempore unde.</p>
                    </div>
                    <div className='method-info-image'></div>
                </div>
            </section>
        </div>
    )
}

export default TheMethod
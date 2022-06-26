import Layout from "../components/layout";
import { useState, useEffect } from "react";
import style from './index.module.css';
import Image from 'next/image';
import imageprueba from "./../assets/Bannerprueba.jpg";
import React from 'react';
export default function Nosotros(){
    return(
        <Layout>
        
        <section className="home_banner_area">
          <div className={style.img_container}>
            <Image src={imageprueba} />
            <div className={style.form_container}>
            
            </div>
          </div>
        </section>
        <section>
            <div className={style.Nosotrosdiv}>
             <p className={style.texto1educacionvirtual}>Sobre Nosotros</p>
            </div>
        </section>
        <section className={style.container}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <p>Misión</p>
                        <p>Somos una plataforma educativa que, a través de la virtualidad del siglo XXI, formamos personas en educación prescolar, básica y media, enfocados en un entorno de amor y buen trato a todas nuestras partes interesadas.</p>
                    </div>
                    <div className="col-6">
                        <p>Visión</p>
                        <p>Ser en este lustro la metodología SKOLMI para todos.
</p>
                    </div>
                </div>

            </div>
        </section>
       </Layout>
    )

}
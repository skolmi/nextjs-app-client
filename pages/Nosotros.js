import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import nosotros from "./../assets/nosotros.png";
import React from 'react';
import Head from "next/head";
import Valores from './../components/Valoresmarca';
import ISO9001Certificado from './../assets/ISO9001Certificado.png';
export default function Nosotros(){
    return(
        <>
        <Head>
        <title>Skolmi</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
      </Head>
        <Layout>
        
        <section className={style.imgnos}>
          <div className={style.img_container}>
            <Image src={nosotros} />
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
                        <p className={style.textoNosotros}>Misión</p>
                        <p className={style.texto_M}>Somos una plataforma educativa que, a través de la virtualidad del siglo XXI, formamos personas en educación prescolar, básica y media, enfocados en un entorno de amor y buen trato a todas nuestras partes interesadas.</p>
                    </div>
                    <div className="col-6">
                        <p className={style.textoNosotros}>Visión</p>
                        <p className={style.texto_M}>Ser en este lustro la metodología SKOLMI para todos.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <div className={style.beneficiosyventajasdiv}>
            <h1 className={style.textovalores}>Valores de marca</h1>
        </div>
        <Valores />
        <section  >
                       
            <div className={style.politicaCalidad} >
            <div  className="row">
            
            <div className="col-3">
            <div className={style.politicaCalidad2}>
                   <div className="container">
                    <div className="row">
                    <div className="col">
                    <h1 className={style.textpolitica}>Política</h1>
                    </div>
                    <div className="col">
                     <h1 className={style.textpolitica3}>de</h1>
                     </div>
                    </div>             
                   <div className="row">
                    <div className="col">
                    <h1 className={style.textpolitica4}> Calidad</h1>                
                    </div>
                    <div className="col"></div>
                    </div>
                    </div>

                    </div> 
                    </div>
                <div className="col-9">
                <div className={style.politicaCalidad2}>
                <p className={style.texto_2}>Somos una familia educativa que, a través de una modalidad interactiva, dinámica, afectiva con apoyo tecnológicos del siglo XXI, formamos personas en educación preescolar, básica y media para jóvenes y adultos. Además, formamos ciudadanos futuristas, críticos y partícipes de la globalización.
                  Comprometida con la satisfacción de las necesidades y expectativas de nuestros educandos y partes interesadas, el cumplimiento de la normativa al alcance del sistema de la educación virtual.; todo bajo una cultura de afectos, felicidad y mejoramiento continuo del sistema de gestión de calidad. Esta política será publicada a todas las partes interesadas.</p>
                 </div>
                </div>
                </div>
                </div>
                
                
        </section>
        <section>
            <di>
                <br></br>
            </di>
        </section>
        <section>
            <div className={style.beneficiosyventajasdiv}>
                <h1 className={style.textovalores}>Certificación</h1>
            </div>
            <div className="container">
            <div className={style.Certificacion} >
                <div className="row">
                    <div className="col-3">
                        <Image  src={ISO9001Certificado} />
                    </div>            
                    <div className="col-9">
                    
                        <h1 className={style.texto_2}><strong>Certificación ISO 9001:2015 otorgada por ICONTEC:</strong> Implementamos el Sistema de Gestión de Calidad (SGC) en Skolmi y luego que el ICONTEC validara la adecuación y el control de la gestión que realizamos de nuestros procesos, logramos la certificación en este 2021, con el propósito de renovarla cada año para asegurar de forma sistemática el logro de objetivos y metas, así como el mejoramiento continuo de nuestra plataforma, todo esto con el fin de satisfacer plenamente las necesidades de nuestros clientes y usuarios. El alcance del Sistema de Gestión de Calidad en Skolmi incluye la prestación de servicios de la plataforma tecnológica a instituciones educativas para los niveles de educación preescolar, primaria y secundaria bajo la modalidad virtual.</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </section>
       </Layout>
       </>
    );

}
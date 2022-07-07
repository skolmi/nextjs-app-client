import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import preescolar from "./../assets/bannerpreescolar.png";
import preescolar_info from "./../assets/Preescolarinfo.png";
import FormContact from '../components/FormContact';
import Compenentes from '../components/EducationOfert';
import TestimonyCard from "../components/TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import imagewellnes from "./../assets/image_wellness.png";
import banner_footer_preescolar from "././../assets/banner_footer_preescolar.png";

import {
    Button
} from "@chakra-ui/react";
export default function Nosotros() {
    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={preescolar} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
                <Image src={preescolar_info} />
            </section>
            <section  >
                <div className={style.containerPress}>
                    <div>
                        <h1>Ventajas Preescolar Skolmi</h1>
                    </div>
                    <div>
                        <Compenentes />
                    </div>
                    <div>
                        <h1>Opiniones</h1>
                        <h3>Del Preescolar en Skolmi</h3>
                    </div>
                    <div>
                        <Carousel showStatus={false}>
                            <div className={style.carouselItem}>
                                <TestimonyCard />
                                <TestimonyCard />
                                <TestimonyCard />
                            </div>
                        </Carousel>
                    </div>
                    <div className={style.educacionvirtual}>
                        <p className={style.texto1educacionvirtual}>Objeto Virtual de Aprendizaje (Demo)</p>
                    </div>
                    <div className={style.containerVirtual}>
                        <p>La virtualidad es un sistema de acceso y representación de la realidad  que desde lo digital potencia nuestras habilidades, intensifica nuestras capacidades y se manifiesta a través de actos comunicativos.
                            Los objetos virtuales de aprendizaje son recursos educativos estructurados para hacer del acto de aprendizaje una experiencia significativa a través de la interacción, la inmersión y la cercanía de los contenidos.</p>
                    </div>
                    <div className={style.containerVirtuals}>
                        <Image src={imagewellnes} />
                    </div>
                    <dvi className="container">
                        <div className={style.containerVirtuals}>
                            <Image src={banner_footer_preescolar} />
                            <div className={style.form_containerrigth}>
                                <p className={style.rigthptext}>¡No esperes más!</p>                                
                                <p className={style.rigthptext2}>Decidete hoy mismo a estudiar <br></br> virtual en Skolmi.</p>                                
                                
                            </div>
                            
                            <div className={style.form_container}>
                                <Button background={'#FF8C00'} textColor={'#FFFFFF'} fontSize={'25px'} fontFamily={'Poppins'} width={'300px'} height={'50px'}>Empezar</Button>
                            </div>
                        </div>
                    </dvi>

                </div>
            </section>



        </Layout>

    );
}
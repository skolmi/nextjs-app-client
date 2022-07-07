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
import AulasVirtuales from '../components/AulasInteractivas';
import {
    Button
} from "@chakra-ui/react";
export default function preschool() {
    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={preescolar} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
                <div className={style.img_container}>
                <Image src={preescolar_info} />
                </div>
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
                    </div>
                    </section>
                    <section>
                      
                    <div className={style.containerPress}>
                    <AulasVirtuales/>
                    <div className="container">
                        <div className={style.containerVirtuals}>
                            <Image src={banner_footer_preescolar} />
                            <div className={style.form_containerrigth}>
                                <p className={style.rigthptext}>¡No esperes más!</p>                                
                                <p className={style.rigthptext2}>Decidete hoy mismo a estudiar <br></br> virtual en Skolmi.</p>                                
                                
                            </div>
                            
                            <div className={style.form_container}>
                                <Button background={'#FF8C00'} textColor={'#FFFFFF'} fontSize={'20px'} fontFamily={'Poppins'} width={'150px'} height={'50px'}>Empezar</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>

    );
}
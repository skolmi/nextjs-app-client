import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import banneradultos from "./../assets/banneradultos.png";
import adultosinfo from "./../assets/adultosinfo.png";
import FormContact from '../components/FormContact';
import Compenentes from '../components/EducationOfert';
import TestimonyCard from "../components/TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import imagewellnes from "./../assets/image_wellness.png";
import banner_footer_priprimaria from "././../assets/banner_footer_priprimaria.png";
import adultos_info_image_large from '../assets/adultos_info_large.png';
import {
    Button, Box
} from "@chakra-ui/react";
export default function highSchool() {
    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={banneradultos} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
            </section>
            <Box>
                <Image src={adultos_info_image_large}/>
            </Box>
            <section  >
                <div >
                    <div className={style.containeradults}>
                        <div>
                            <h1>Ventajas Bachillerato adultos Skolmi</h1>
                        </div>
                        <div>
                            <Compenentes />
                        </div>
                        {/* <div>
                        <h1>Opiniones</h1>
                        <h3>Del bachillerato para adultos en Skolmi</h3>
                    </div>
                    <div>
                        <Carousel showStatus={false}>
                            <div className={style.carouselItem}>
                                <TestimonyCard />
                                <TestimonyCard />
                                <TestimonyCard />
                            </div>
                        </Carousel>
                    </div> */}
                    </div>
                </div>
            </section>
            <section>

                <div >
                    <div className="container">
                        <div className={style.containerVirtuals}>
                            <div className={style.divblanco}>
                            </div>
                            <div className={style.form_containerrigth}>
                                <p className={style.rigthptext}>¡No esperes más!</p>
                                <p className={style.rigthptext2}>Decidete hoy mismo a estudiar <br></br> virtual en Skolmi.</p>

                            </div>

                            <div className={style.form_container}>
                                <Button background={'#FF8C00'} fontSize={'20px'} fontFamily={'Poppins'} width={'150px'} height={'50px'}>
                                    <a color="white" href="https://api.whatsapp.com/send?phone=+573023881611&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20">
                                        Empezar
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
}
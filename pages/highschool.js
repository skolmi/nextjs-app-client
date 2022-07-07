import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import bannerbachillerato from "./../assets/bannerbachillerato.png";
import bachillerato from "./../assets/bachilleratoinfo.png";
import FormContact from '../components/FormContact';
import Compenentes from '../components/EducationOfert';
import TestimonyCard from "../components/TestimonyCard";
import { Carousel } from "react-responsive-carousel";
import imagewellnes from "./../assets/image_wellness.png";
import banner_footer_priprimaria from "././../assets/banner_footer_priprimaria.png";
import AulasVirtuales from '../components/AulasInteractivas';
import {
    Button
} from "@chakra-ui/react";
export default function highSchool() {
    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={bannerbachillerato} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
            </section>
            <section >
                <div className={style.panelbachi}>
                    <div className="">
                        <div className="row">                    
                            <div className="col">
                            <div className={style.diventer}>
                                <h1 className={style.texto2educacionvirtual}>bachillerato</h1>
                                <p className={style.textooferta}>Es una experiencia educativa integral, autónoma y flexible. Desde nuestro horizonte pedagógico se desarrollan metodologías educativas que propenden por el desarrollo del estudiante como sujeto activo de su proceso formativo que tiene el nivel competencial para enfrentarse a los desafíos que el mundo le impone, además de adaptarse a las dinámicas, estilos y ritmos de aprendizajes propios de cada uno.</p>
                            </div>
                            </div>

                            <div className="col">
                                <div className={style.form_container} >
                                    <Image  height={361} width={512} src={bachillerato}></Image>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </section>
            <section  >
                <div > 
                <div className={style.containeradults}>
                    <div>
                        <h1>Ventajas Bachillerato Skolmi</h1>
                    </div>
                    <div>
                        <Compenentes />
                    </div>
                    <div>
                        <h1>Opiniones</h1>
                        <h3>Del bachillerato en Skolmi</h3>
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
                </div>
            </section>
            <section>
                      
                      <div >
                      <AulasVirtuales/>
                      <div className="container">
                          <div className={style.containerVirtuals}>
                            <div className={style.divblanco}>                                
                            </div>
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
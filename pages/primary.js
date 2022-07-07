import Layout from "../components/layout";
import style from './index.module.css';
import Image from 'next/image';
import bannerprimaria from "./../assets/bannerprimaria.png";
import primaria_info from "./../assets/primaria_info.png";
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
export default function primary() {

    return (
        <Layout>
            <section className="home_banner_area">
                <div className={style.img_container}>
                    <Image src={bannerprimaria} />
                    <div className={style.form_container}>
                        <FormContact />
                    </div>
                </div>
                <div className={style.img_container}>
                    <Image src={primaria_info} />
                </div>
            </section>
            <section  >
                <div > 
                <div className={style.containerprimaira}>
                    <div>
                        <h1>Ventajas Preescolar Skolmi</h1>
                    </div>
                    <div>
                        <Compenentes />
                    </div>
                    <div>
                        <h1>Opiniones</h1>
                        <h3>Del primaria en Skolmi</h3>
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
                      
                      <div className={style.containerprimaira}>
                      <AulasVirtuales/>
                      <div className="container">
                          <div className={style.containerVirtuals}>
                              <Image src={banner_footer_priprimaria} />
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
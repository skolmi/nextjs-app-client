import Layout from '../components/layout';
import mainImageL from "./../assets/banner_principal.png";
import mainImage1440 from '../assets/banner_principal_old.png';
import Image from 'next/image';
import style from './index.module.css';
import EducationOnl from './../components/EducationOnline';
import BannerEndPage from '../components/BannerEndPage';
import FormContact from '../components/FormContact';
import icon_18_años from '../assets/18_años_de_experiencia.svg';
import icon_90_profesionales from '../assets/90_Profesionales_en_educación.svg';
import icon_2500_estudiantes from '../assets/2500_estudiantes_graduados.svg';
import tiempolibre from '../assets/Tiempolibre.svg';
import flexibilidad from '../assets/Componenteflex.svg';
import auladeaprendizaje from '../assets/Aulasdeaprendizaje.svg';
import objetosvirtuales from '../assets/Objetosvirtuales.svg';
import psicologia from '../assets/Psicologia.svg';
import Metodologiadidactica from '../assets/Metodologiadidactica.svg';
import Orientacionvocacional from '../assets/Orientacionvocacional.svg';
import premiosconcurso from '../assets/Premiosconcursos.svg';
import certificados from '../assets/Certificados.svg';
import libertad from '../assets/Libertad.svg';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TestimonyCard from "../components/TestimonyCard";


import CamiloCamachoImg from '../assets/CamiloCamacho.png';
import CarlosCastaneda from '../assets/Carlos-Castañeda.png';
import DanielaCaicedo from '../assets/DanielaCaicedo.png';
import MariaTeresa from '../assets/Maria-Teresa.png';
import PaulaCortez from '../assets/Paula-Cortez.png';
import SebastianPardo from '../assets/SebastianPardo.png';

import React from 'react';
import { useMediaQuery, Box } from '@chakra-ui/react';


export default function Index() {
  const [isLargeThan1441] = useMediaQuery(`(max-width:1441px)`)
  return (
    <>
      <Layout>
        <section className="home_banner_area">
          <div className={style.img_container}>
            <Box>
              {isLargeThan1441 ?
                <Image src={mainImage1440}/>
                :
                <Image src={mainImageL} />
              }
            </Box>
            <div className={style.form_container}>
              <FormContact />
            </div>
          </div>
        </section>

        <section className={`${style.container} ${style.border_gradient} ${style.border_gradient_purple}`}>
          <h1>Sobre nosotros</h1>
          <div className={style.paragraph_container}>
            <p className={style.nosotros}>
              Somos una alternativa para la formación integral, inclusiva y afectiva, que permite a sus estudiantes desarrollar las competencias cognitivas, sociales y afectivas para desenvolverse en el mundo. Nuestra propuesta pedagógica tiene un componente de flexibilidad que facilita su adaptación a los diversos ritmos de aprendizaje y vincula de manera transversal a las familias en la formación de sus hijos.
            </p>
          </div>
        </section>

        <section className={`${style.container} ${style.border_gradient} ${style.border_gradient_purple}`}>
          <div className={style.paragraph_container}>
            <div className="container">

              <div className="row">
                <div className="col-sm">
                  <div className={style.image} >
                    <Image src={icon_18_años} width="100px" height='100px' />
                  </div>
                  <p className={style.number}>18</p>
                  <p className={style.texto}>Años de <br></br> experiencia</p>
                </div>

                <div className="col-sm">
                  <div className={style.image} >
                    <Image src={icon_90_profesionales} width="100px" height='100px' />
                  </div>
                  <p className={style.number}>90+</p>
                  <p className={style.texto}>Profesionales <br></br> en educación</p>
                </div>

                <div className="col-sm">
                  <div className={style.image} >
                    <Image src={icon_2500_estudiantes} width="100px" height='100px' />
                  </div>
                  <p className={style.number}>2500+</p>
                  <p className={style.texto}>Estudiantes <br></br>graduados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={style.educacionvirtual}>
            <h1 className={style.texto1educacionvirtual}>Programas</h1>
            <h2 className={style.texto2educacionvirtual}>Educación Virtual</h2>

          </div>
          <EducationOnl />
        </section>

        <section>
          <div className={style.beneficiosyventajasdiv}>
            <h2 className={style.titlebenyvent}>Beneficios y ventajas</h2>
            <h4 className={style.titlebenyvent2}>¿Por que escogernos?</h4>
          </div>
          <div className={style.paragraph_containerventajas}>
            <div className='container'>
              <div className='row'>
                <div className='col'>

                  <div className={style.image} >
                    <Image src={tiempolibre} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Más tiempo libre <br></br> para otras actividades</p>

                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={flexibilidad} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Componente <br></br> de flexibilidad</p>
                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={auladeaprendizaje} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Aulas de aprendizaje interactivas</p>
                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={objetosvirtuales} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Más de 800 objetos virtuales de aprendizaje</p>
                </div>

                <div className='col'>
                  <div className={style.image} >
                    <Image src={psicologia} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Orientación  <br></br>psicologica</p>
                </div>

              </div>
            </div>
          </div>
          <div className={style.paragraph_containerventajas}>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={Metodologiadidactica} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Metodología <br></br>didáctica</p>
                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={Orientacionvocacional} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Clases de orientación <br></br>vocacional</p>
                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={premiosconcurso} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Concursos, ferias <br></br>y actividades</p>
                </div>
                <div className='col'>
                  <div className={style.image} >
                    <Image src={certificados} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Diplomas <br></br>y certificados</p>
                </div>

                <div className='col'>
                  <div className={style.image} >
                    <Image src={libertad} width="100px" height='100px' />
                  </div>
                  <p className={style.texto}>Libertad de <br></br>pensamiento y desarrollo.</p>
                </div>

              </div>

            </div>
          </div>
        </section>
        <section className={`${style.testimony} `}>
          <div className={`${style.container} ${style.title}`} id>
            <h2 className={style.textotestimonio}>Testimonios</h2>
            <span>Quienes ya confian en Skolmi</span>
          </div>
          <div className={`${style.carouselContainer} `}>
            <Carousel showStatus={false}>
              <div className={style.carouselItem}>
                <TestimonyCard
                  name='Camilo Camacho'
                  study='Bachillerato'
                  ocupation='Artista'
                  text='Skolmi ha sido realmente la mejor decisión que pudimos tomar, ya que mis hijos han desarrollado habilidades nuevas y han logrado aprovechar mejor su tiempo para disfrutar de lo que más les gusta que es la danza. ¡¡Son lo mejor!!'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={CamiloCamachoImg}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
                <TestimonyCard
                  name='Carlos Castañeda'
                  study='Padre'
                  ocupation='Conductor'
                  text='Mi hijo estudia en Skolmi hace 3 años y el cambio fue muy positivo debido a que es deportista de alto rendimiento, estudiar virtual le ha permitido organizar su horario y hacer lo que le gusta.'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={CarlosCastaneda}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
                <TestimonyCard
                  name='Daniela Caicedo'
                  study='Bachillerato'
                  ocupation='Estudiante'
                  text='Actualmente estoy muy agusto en Skolmi, la plataforma es muy bonita, puedo participar en concursos, mis tutores son estupendos, mis amigas son las mejores, aprendo de formas entrenidas...'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={DanielaCaicedo}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
              </div>
              <div className={style.carouselItem}>
                <TestimonyCard
                  name='María Teresa'
                  study='Madre'
                  ocupation='Publicista'
                  text='La plataforma muy interactiva, de fácil acceso, los docentes con una alta preparación en los temas, la flexibilidad de la plataforma nos permitía en familia realizar otras actividades.'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={MariaTeresa}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
                <TestimonyCard
                  name='Paula Cortez'
                  study='Primaria'
                  ocupation='Estudiante'
                  text='Me gusta mucho estudiar en Skolmi por que la plataforma es muy bonita, los profes son muy creativos y amables, soy muy feliz.'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={PaulaCortez}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
                <TestimonyCard
                  name='Sebastian Pardo'
                  study='Primaria'
                  ocupation='Youtuber'
                  text='Me encanta estudiar en Skolmi, ya que me da mas tiempo para poder realizar mis actividades extra escolares, soy feliz estudiando con los profes, y enseñan con mucho amor.'
                >
                  <Image
                    boxSize={'136px !important'}
                    src={SebastianPardo}
                    borderRadius='full'
                    alt={'Author'}
                    css={{
                      border: '7px solid #00194A !important'
                    }}
                  />
                </TestimonyCard>
              </div>
            </Carousel>
          </div>
        </section>

        <div className={style.img_container}>
          <BannerEndPage />
          <div className={style.form_container}>
            <FormContact />
          </div>
        </div>
      </Layout>
    </>
  );
}

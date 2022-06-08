import Layout from '../components/layout';
import mainImage from "./../public/banner_principal.png";
import Image from 'next/image';
import Card from '../components/Card';
import style from './index.module.css'
import { data } from '../utils/data';
import FloatingWhatsApp from 'react-floating-whatsapp'
import Testomony from './../components/Testimony';
import BannerEndPage from '../components/BannerEndPage';
import FormContact from '../components/FormContact';
import icon_18_años from '../assets/18_años_de_experiencia.svg';
import icon_90_profesionales from '../assets/90_Profesionales_en_educación.svg';
import icon_2500_estudiantes from '../assets/2500_estudiantes_graduados.svg';
import Head from 'next/head'


export default function Index() {
  const products_data = data.products.map((item) =>
    <Card
      productName={item.name}
      description={item.description}
      srcimage={item.srcImage}
    />
  )
  return (
    <>
      <Head>
        <title>Skolmi</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet"/>
      </Head>
      <Layout>
        <FloatingWhatsApp
          phoneNumber="+573146853222"
          accountName="Skolmi"
          allowClickAway
          notification
          notificationDelay={60000} // 1 minute
          notificationSound
          chatMessage='Hola, esperamos que te encuentres muy bien, escribe tu mensaje y
        te redireccionaremos a tu aplicación whatsapp'
          className={style.floating_Whatsapp}
        />
        <section className="home_banner_area">
          <div className={style.img_container}>
            <Image src={mainImage} />
            <div className={style.form_container}>
              <FormContact />
            </div>
          </div>
        </section>

        <section className={`${style.container} ${style.border_gradient} ${style.border_gradient_purple}`}>
          <h1>Sobre nosotros</h1>
          <div className={style.paragraph_container}>
            <p>
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
                    <Image src={icon_18_años} width="100px" height='100px'/>
                  </div>
                  <p className={style.number}>18</p>
                  <p className={style.texto}>años de <br></br> experiencia</p>
                </div>

                <div className="col-sm">
                  <div className={style.image} >
                    <Image src={icon_90_profesionales} width="100px" height='100px'/>
                  </div>
                  <p className={style.number}>90+</p>
                  <p className={style.texto}>Profesionales <br></br> en educación</p>
                </div>

                <div className="col-sm">
                  <div className={style.image} >
                    <Image src={icon_2500_estudiantes} width="100px" height='100px'/>
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
          <div className='d-flex justify-content-center flex-wrap'>
            {products_data}
          </div>
        </section>

        <section>
          <div className={style.container}>
            <h2 className={style.title}>Beneficios y ventajas</h2>
            <span>¿Por qué escogernos?</span>
          </div>
        </section>


        <section className={`${style.testimony} `}>
          <div
            className={`${style.container} ${style.title}`}
            id
          >
            <h2>Testimonios</h2>
            <span>Quienes ya confian en Skolmi</span>
          </div>
          <Testomony />
          <Testomony />
          <Testomony />
        </section>
        <div className={style.img_container}>
          <BannerEndPage />
          <div className={style.form_container}>
            <FormContact />
          </div>
        </div>
      </Layout>
    </>
  )
}

import Layout from '../components/layout';
import mainImage from "./../public/banner_principal.png";
import Image from 'next/image';
import OtherCard from '../components/OtherCard';
import style from './index.module.css'
import { data } from '../utils/data';
import FloatingWhatsApp from 'react-floating-whatsapp'
import Testomony from './../components/Testimony';
import Feature from '../components/Feature';
import BannerEndPage from '../components/BannerEndPage';
import FormContact from '../components/FormContact';

export default function Index() {
  const products_data = data.products.map((item) =>
    <OtherCard
      productName={item.name}
      description={item.description}
      srcimage={item.srcImage}
    />
  )

  const benefits_data = data.benefits.map((item) =>
    <OtherCard
      productName={item.name}
      description={item.description}
    />
  )
  const values_data = data.values.map((item) =>
    <OtherCard
      productName={item.name}
      description={item.description}
    />
  )
  return (
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
            <FormContact/>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 17 17" >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />

                  </svg>

                </div>
                <p className={style.number}>18</p>
                <p className={style.texto}>años de <br></br> experiencia</p>


              </div>

              <div class="col-sm">
                <div className={style.image} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 17 17">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>


                </div>
                <p className={style.number}>90+</p>
                <p className={style.texto}>Profesionales <br></br> en educación</p>


              </div>

              <div class="col-sm">
                <div className={style.image} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 17 17">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                  </svg>

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
      </section>

      <section>
        <div className={style.container}>
          <h2>Oferta academica</h2>
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
      <BannerEndPage />
    </Layout>
  )
}

import Layout from '../components/layout';
import mainImage from "./../public/bannerR.png";
import Image from 'next/image';
import { Card } from '../components/Card';
import style from './index.module.css'
import { data } from '../utils/data';
import FloatingWhatsApp from 'react-floating-whatsapp'
// import logoImage from './../public/skolmilogo1.png'
// import Carousel from '../components/Carousel';

export default function Index() {
  const products_data = data.products.map((item) =>
  <Card
      productName={item.name}
      description={item.description}
  />
)

  const benefits_data = data.benefits.map((item) =>
  <Card
      productName={item.name}
      description={item.description}
  />
)
  const values_data = data.values.map((item) =>
  <Card
      productName={item.name}
      description={item.description}
  />
)

const testimony_data = data.testomony.map((item) =>
<Card
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
      <section>
        <div className={style.img_container}>
          <Image src={mainImage}/>
          {/* <div className='container-fluid'>
            <p className={`${style.text} text-wrap`}>Educación básica primaria y bachillerato con modalidad 100% virtual.</p>
          </div> */}
          <button className={style.btn} type='button'><a href='#'>Empieza hoy</a></button>
        </div>
      </section>
      <section className={`${style.container} ${style.border_gradient} ${style.border_gradient_purple}`}>
          <h1>Sobre nosotros</h1>
          <div className={style.paragraph_container}>
            <p>
            Somos una apuesta por la formación integral, inclusiva y 
            afectiva, que permite a sus estudiantes desarrollar las 
            competencias cognitivas, sociales y afectivas para desenvolverse 
            en el mundo. Nuestra propuesta pedagógica tiene un componente
            de flexibilidad que facilita su adaptación a los diversos
            ritmos de aprendizaje y vincula de manera transversal a las 
            familias en la formación de sus hijos.
            </p>
          </div>
          <div className={style.button_container}>
            <button className={style.btn} type='button'><a>Conoce mas</a></button>
          </div>
      </section>
      <section className={style.container}>
        <div className={style.separe_item}></div>
        <h2>Oferta academica</h2>
        <div className='d-flex justify-content-center flex-wrap'>
          {products_data}
        </div>
        {/* <Carousel/> */}
      </section>
      <section className={`${style.values_section} ${style.container}`}>
        <div className={style.separe_item}></div>
        <h2>Valores</h2>
        <div className='d-flex justify-content-center flex-wrap'>
          {values_data}
        </div>
      </section>
      <section className={`${style.benefits} ${style.container}`}>
        <div className={style.separe_item}></div>
        <h2>Beneficios y ventajas</h2>
        <div className='d-flex justify-content-center flex-wrap'> 
          {benefits_data}
        </div>
      </section>
      <section className={`${style.testimony} ${style.container}`}>
      <div className={style.separe_item}></div>
        <h2>Testimonios</h2>
        <div className='d-flex justify-content-center flex-wrap'>
          {testimony_data}
        </div>
      </section>
    </Layout>
  )
}

import Layout from '../components/layout';
import mainImage from "./../public/bannerR.png";
import Image from 'next/image';
import { Card } from '../components/Card';
import style from './index.module.css'
import { products_data } from '../utils/data';
import Carousel from '../components/Carousel';

export default function Index() {

  const items = products_data.products.map((item) =>
  <Card
      productName={item.name}
      price={item.price}
      description={item.description}
  />
)

  return (
    <Layout>
      <section>
        <div className={style.img_container}>
          <Image src={mainImage}/>
          <button className={style.btn} type='button'><a href='#'>Empieza hoy</a></button>
        </div>
      </section>
      <section className={`${style.container} ${style.border_gradient} ${style.border_gradient_purple}`}>
          <h1>Sobre nosotros</h1>
          <div className={style.paragraph_container}>
            <p>
              Con 18 años de experiencia somos una apuesta por la formación integral, 
              inclusiva y afectiva, que permite a sus estudiantes desarrollar las competencias
              cognitivas, sociales y afectivas para desenvolverse en el mundo. 
              Nuestra propuesta pedagógica tiene un componente de flexibilidad que facilita
              su adaptación a los diversos ritmos de aprendizaje y vincula de manera transversal
              a las familias en la formación de sus hijos.
            </p>
          </div>
          <div className={style.button_container}>
            <button className={style.btn} type='button'><a>Conoce mas</a></button>
          </div>
      </section>
      <section className={style.container}>
        <div className={style.separe_item}></div>
        <h2>Oferta academica</h2>
        <Carousel/>
      </section>
    </Layout>
  )
}

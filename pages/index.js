import Layout from '../components/layout';
import mainImage from "./../public/bannerR.png";
import Image from 'next/image';
import style from './index.module.css'

export default function Index() {
  return (
    <Layout>
      <section>
        <div className={style.img_container}>
          <Image src={mainImage}/>
          <button className={style.btn} type='button'>Comienza hoy</button>
        </div>
      </section>
    </Layout>
  )
}

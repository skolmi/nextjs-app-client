import style from './layout.module.css'
import Script from 'next/script';
import Header from '../Header';
import Footer from '../Footer';
import OtherHeader from '../OtherHeader';
import LinkBar from '../LinkBar';
export default function Layout({ children }) {
    return (
        <>
            <LinkBar/>
            <OtherHeader/>
            <main>{children}</main>
            <Footer/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
        </>
    )
}

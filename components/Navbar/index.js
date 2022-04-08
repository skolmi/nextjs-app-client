import style from './Nav.module.css';
import Head from 'next/head'
import Logo from '../Logo';

export default function Navbar() {
    return (
        <div className={style.navcontainer}>
            <Head>
                <title>Skolmi</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <a href='#'>Inicio</a>
                    </li>
                    <li>
                        <a href='#'>Nosotros</a>
                    </li>
                    <li>
                        <a href='/payments'>Pagos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
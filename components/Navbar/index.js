import style from './Nav.module.css';
import Head from 'next/head'
import Heeader from '../Header';
import Logo from '../Logo';

export default function Navbar() {
    return (
        <nav className={style.navcontainer}>
            <ul>
                <li>
                    <a href='#'>Nosotros</a>
                </li>
                <li>
                    <a href='#'>Oferta educativa</a>
                </li>
                <li>
                    <a href='#'>Bienestar estudiantil</a>
                </li>
                <li>
                    <a href='#'>FAQ</a>
                </li>
            </ul>
        </nav>
    );
}
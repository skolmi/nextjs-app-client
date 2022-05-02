import style from './Nav.module.css';

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
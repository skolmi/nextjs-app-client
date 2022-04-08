import style from './Nav.module.css';
import logo from './../../public/skolmilogo1.png';
import Image from 'next/image';

export default function Navbar()  {
    return(
        <div className={style.navcontainer}>
            <a href='/'>
                <Image
                    src={logo}
                    width={200}
                    height={100}
                />
            </a>
            <nav>
                <ul>
                    <li>
                        <a href='/payments'>Pagos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
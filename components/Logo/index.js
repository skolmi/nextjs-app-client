import logo from './../../public/skolmilogo1.png';
import Image from 'next/image';
import style from './Logo.module.css';

export default function Logo() {
    return (
        <div className={style.logo}>
            <a href='/'>
                <Image
                    src={logo}
                />
            </a>
        </div>
    );
}
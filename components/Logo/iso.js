import logo from './../../public/iconiso.png';
import Image from 'next/image';
import style from './Logo.module.css';

export default function Iso() {
    return (
        <div className={style.logo}>
            <a href='/'>
                <Image
                    src={Iso}
                />
            </a>
        </div>
    );
}
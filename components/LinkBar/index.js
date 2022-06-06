import style from "./LinkBar.module.css";
import platformAccessButton from '../../public/boton_acceso_plataforma.svg'
import Image from "next/image";


export default function LinkBar() {
    return (
        <nav className={style.linkBar}>
            <div className={style.buttonContainer}>
                <button type="button">
                    <Image src={platformAccessButton} alt="Acceso a Plataforma" />
                </button>
            </div>
            <form>
                <ul>
                    <li>
                        <a href="/payments">Pagos</a>
                    </li>
                    <li>
                        <a href="#">Escuela de padres</a>
                    </li>
                    <li>
                        <a href="#">contacto</a>
                    </li>
                    <li>
                        <a href="#">PQR</a>
                    </li>
                </ul>
            </form>
        </nav>
    );
}
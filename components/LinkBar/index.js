import style from "./LinkBar.module.css";

export default function LinkBar() {
    return (
        <nav>
            <ul className={`${style.list_container} ${style.container_unique}`}>
                <li>
                    <a href="#">Plataforma</a>
                </li>
                <li className={`${style.list_container} ${style.container_}`}>
                    <li>
                        <a href="#">Pagos</a>
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
                </li>
            </ul>
        </nav>
    );
}
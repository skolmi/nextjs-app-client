import style from "./LinkBar.module.css";


export default function LinkBar() {
    return (
        <nav  className="navbar navbar-toggleable-md navbar-light bg-faded" id={`${style.nav}`} >

            
         <div className={`${style.divboton}`}>
                   
<a href="#"  className={`${style.botonPlataforma}`}>Acceso a Plataforma</a>
</div>      
                   
                   
                <form  className={`${style.nav2}`}>
            <ul className={`${style.list_container} ${style.container_unique}`}>                
                <li className={`${style.list_container} ${style.container_}`}>
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
                </li>
            </ul>
  </form>
        </nav>
    );
}
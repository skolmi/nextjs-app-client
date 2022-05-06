import style from './buttonInfo.module.css';

export default function ButtonInfo() {
    return(
        <button  className={style.btn} type='button'><a href='#'>Empieza hoy</a></button>
    );
}
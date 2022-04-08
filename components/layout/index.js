import Navbar from './../Navbar';
import style from './layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={style.main}>{children}</main>
        </>
    )
}
